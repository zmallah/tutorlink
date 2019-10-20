const mongoose = require('mongoose');

const schema = mongoose.schema;
const GroupSchema = require('./schemas/GroupSchema');

const Group = mongoose.model('Groups', GroupSchema);

const create = async (req) => {
    var newGroup = new Group({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        owner: req.body.owner,
        tutor: req.body.tutor,
        members: req.body.members,
        cost: req.body.cost,
        active: req.body.active,
        capacity: req.body.capacity,
        subject: req.body.subject
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

const update = async (req) => {
    var group = Group.findOne({name: req.body.name});
    console.log(result);
}

module.exports = {create, update};