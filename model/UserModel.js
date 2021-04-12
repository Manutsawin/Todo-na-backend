const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    Name: String,
    UserID: String,
    Password: String,
    Role : String,  
});

const UserModel = mongoose.model("User",userSchema);

module.exports = UserModel;

