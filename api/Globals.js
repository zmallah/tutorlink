const uri = "mongodb+srv://davidezra:tutor@tutorlinkdb-odr6c.mongodb.net/test?retryWrites=true&w=majority";
const mongoose = require('mongoose');

const handleError = (err) => {
	console.error(err);
};

module.export = {uri, mongoose, handleError};