const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://davidezra:tutor@tutorlinkdb-odr6c.mongodb.net/test?retryWrites=true&w=majority";

MongoClient.connect(uri, function(err, db){
	if (err) throw err;

	db.db("TLDB").createCollection("Users", function(err, res){
		if(err) throw err;
		console.log("C");
		db.close();
	});
});
