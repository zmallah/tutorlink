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
        members: req.body.members,
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

//too lazy to do relevant first sort
const find = async (req) => {
    // var list = await Group.find({$and: [{$or: [{name: req.body.name},
    //                             {subject: req.body.subject}]},
    //                             {display: true}]});

    var list = await Group.find({});
    console.log(list);
    return list;
}

//could use this for both group owner updating
//and join, where join only send the member name
//in the request
const update = async (req) => {
    //not sure how req is going to pass the entire
    //object through. the idea here was after finding
    //the group (using find func above), clicking the
    //group would send a request for that group (and
    //_id would also be sent when the list of groups
    //is found).
    //wasnt sure how it would send, so left as _id for now
    var group = await Group.findOne({_id: req.body._id});
    if(group === null){
        return {'group': null, 'updateSuccess': false};
    }else{
        if(req.body.name !== null) group.name = req.body.name;
        if(req.body.owner !== null) group.owner = req.body.owner;
        if(req.body.tutor !== null) group.tutor = req.body.tutor;
        if(req.body.user !== null) group.members.update({user: req.body.user})
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
    var group = await Group.findOne({_id: req.body._id});
    if(group === null){
        return {'group': null, 'deleteSuccess': false};
    }else{
        group.display = false;
        var archive = await Archive.findOne({name: 'arc'});
        await archive.add(group);
        return {'group': group, 'deleteSuccess': true};
    }
}

module.exports = {create, find, update, delet};