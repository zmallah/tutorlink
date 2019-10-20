const mongoose = require('mongoose');
const GroupSchema = require('./GroupSchema');

let ArchiveSchema = new mongoose.Schema({
    groups: [GroupSchema]
})

module.exports = ArchiveSchema;