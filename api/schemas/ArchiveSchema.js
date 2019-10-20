const mongoose = require('mongoose');
const GroupSchema = require('./GroupSchema');

let ArchiveSchema = new mongoose.Schema({
    name: String,
    groups: [{GroupSchema}],
})

module.exports = ArchiveSchema;