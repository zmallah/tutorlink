const mongoose = require('mongoose');

let GroupSchema = new mongoose.Schema({
    
    owner: String,
    tutor: String,
    members: [String],
    cost: Number,
    active: Boolean,
    capacity: Number,
    Subject: String
})

module.exports = GroupSchema;