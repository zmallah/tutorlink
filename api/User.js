import User from './schemas/UserSchema';

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://davidezra:tutor@tutorlinkdb-odr6c.mongodb.net/test?retryWrites=true&w=majority";
var dbName;


MongoClient.connect(uri, function(err, db){
	if (err) throw err;
    
    dbName = db.db("TLDB");

	dbName.createCollection("Users", function(err, res){
		if(err) throw err;
		console.log("C");
		db.close();
	});
});
