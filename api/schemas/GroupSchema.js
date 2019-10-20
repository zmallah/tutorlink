const mongoose = require('mongoose');

let GroupSchema = new mongoose.Schema({
    
    name: String,
    owner: String,
    tutor: String,
    members: [String],
    cost: Number,
    active: Boolean,
    capacity: Number,
    subject: String
})

module.exports = GroupSchema;