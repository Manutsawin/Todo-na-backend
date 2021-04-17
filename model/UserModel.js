const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    Name: String,
    UserID: {type: String ,unique: true},
    Password: String,
    Role : String,  
});

const UserModel = mongoose.model("User",userSchema);

module.exports = UserModel;

