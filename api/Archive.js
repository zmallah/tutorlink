const mongoose = require('mongoose');
const schema = mongoose.schema;
const GroupSchema = require('./schemas/GroupSchema');
const Group = mongoose.model('Groups', GroupSchema);
const ArchiveSchema = require('./schemas/ArchiveSchema');
const Archive = mongoose.model('Archive', ArchiveSchema);

const create = () =>{
    var newArchive = new Archive({
        _id: new mongoose.Types.ObjectId(),
        name: 'arc',
        groups: null
    })

    Archive.create(function (err, newArchive){
        if (err) return handleError(err);
    });

    newArchive.save(function (err, newArchive){
        if (err) return handleError(err);
    });
}

const add = async (group) => {
    //search by group name
    var archive = await Archive.findOne({name: 'arc'});
    archive.groups.update({group: group});
}

const find = async () => {
    return await Archive.findOne({name: 'arc'});
}

module.exports = {create, add, find};