const mongoose = require('mongoose');
const UserSchema = require('./UserSchema');

let GroupSchema = new mongoose.Schema({
    
    name: String,
    owner: String,
    tutor: String,
    members: [{UserSchema}],
    date: Date,
    cost: Number,
    active: Boolean,
    capacity: Number,
    subject: String,
    display: Boolean
})

module.exports = GroupSchema;