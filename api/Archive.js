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
}

const add = async (group) => {
    //search by group name
    var archive = await Archive.findOne({name: 'arc'});
    archive.groups.update({group: group});
}

module.exports = {create, add};