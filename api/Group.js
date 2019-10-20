const mongoose = require('mongoose');

const schema = mongoose.schema;
const GroupSchema = require('./schemas/GroupSchema');
const Group = mongoose.model('Groups', GroupSchema);

const create = (req) => {
    var newGroup = new Group({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        owner: req.body.owner,
        tutor: req.body.tutor,
        members: [],
        date: req.body.date,
        cost: req.body.cost,
        active: req.body.active,
        capacity: req.body.capacity,
        subject: req.body.subject,
        display: req.body.display
    });

    Group.create(function(err, newGroup){
        if(err) return {'group': newGroup, 
                        'creationSuccess': false};
    });

    newGroup.save(function (err, newGroup){
        if(err) return {'group': newGroup, 
                        'creationSuccess': false};
    });

    return {'group': newGroup, 'creationSuccess': true};
}

const find = async (req) => {
    var list = await Group.find({$and: [{$or: [{name: req.body.name},
                                 {subject: req.body.subject}]},
                                 {display: true}]});

    //var list = await Group.find({});
    console.log(list);
    return list;
}

const update = async (req) => {
    var group = await Group.findOne({name: req.body.name});
    if(group === null){
        return {'group': null, 'updateSuccess': false};
    }else{
        if(req.body.name !== null) group.name = req.body.name;
        if(req.body.owner !== null) group.owner = req.body.owner;
        if(req.body.tutor !== null) group.tutor = req.body.tutor;
        if(req.body.members !== null) group.members.push({user: req.body.members})
        if(req.body.date !== null) group.date = req.body.date;
        if(req.body.cost !== null) group.cost = req.body.cost;
        if(req.body.active !== null) group.active = req.body.active;
        if(req.body.capacity !== null) group.capacity = req.body.capacity;
        if(req.body.subject !== null) group.subject = req.body.subject;
        if(req.body.display !== null) group.display = req.body.display;
        return {'group': group, 'updateSuccess': true};
    }
}

//"delete" but not really cuz var name had issues
const delet = async (req) => {
    //same idea here. user clicks on a group from a list
    //and that sends the request which sends _id
    var group = await Group.findOne({name: req.body.name});
    console.log(group);
    if(group === null){
        return {'group': null, 'deleteSuccess': false};
    }else{
        group.display = false;
        return {'group': group, 'deleteSuccess': true};
    }
}

module.exports = {create, find, update, delet};