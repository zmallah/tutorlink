const mongoose = require('mongoose');
const globals = require('./Globals');
const userSchema = require('./Schemas/UserSchema');

mongoose.connect('mongodb+srv://davidezra:tutor@tutorlinkdb-odr6c.mongodb.net/tldb?retryWrites=true&w=majority', {useNewUrlParser: true});

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

module.exports = db;