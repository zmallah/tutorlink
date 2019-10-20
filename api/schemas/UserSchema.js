const mongoose = require('mongoose');
const GroupSchema = require('./GroupSchema');

let UserSchema = new mongoose.Schema({
	username: String,
	password: String,
	rating: Number,
	group: GroupSchema
})

module.exports = UserSchema;