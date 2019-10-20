const mongoose = require('mongoose');

const schema = mongoose.schema;
const UserSchema = require('./schemas/UserSchema');

const user = mongoose.model('Users', UserSchema);

const create = (req) => {
    var newuser = new user ({
        _id: new mongoose.Types.ObjectId(),
        username: req.body.username,
        password: req.body.password,
        rating: 100,
        group: null
    });
    
    user.create(function (err, newuser) {
        if (err) return handleError(err);
    });
    
    newuser.save(function (err, newuser){
        if (err) return handleError(err);
    });

}

module.exports = {create};