const mongoose = require('mongoose');

const schema = mongoose.schema;
const UserSchema = require('./schemas/UserSchema');

const User = mongoose.model('Users', UserSchema);

const create = (req) => {
    var newuser = new User ({
        _id: new mongoose.Types.ObjectId(),
        username: req.body.username,
        password: req.body.password,
        rating: req.body.rating,
        group: req.body.group
    });
    
    User.create(function (err, newuser) {
        if (err) return handleError(err);
    });
    
    newuser.save(function (err, newuser){
        if (err) return handleError(err);
    });
}


const verifyLogin = async (req) => {
    var user = await User.findOne({username: req.body.username});
    console.log(user);
    if(req.body.password === user.password){
        return {'user': user, 'loginSuccess': 'true'};
    }else{
        return {'user': user, 'loginSuccess': 'false'};
    }
    
} 

module.exports = {create,verifyLogin};