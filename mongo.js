import User from './schemas/UserSchema';
import {MongoClient, uri} from './Globals';

MongoClient.connect(uri, function(err, db){
	if (err) throw err;
	
    var dbName = db.db("TLDB");

	dbName.createCollection("Users", function(err, res){
		if(err) throw err;
		console.log("C");
		db.close();
	});
});
