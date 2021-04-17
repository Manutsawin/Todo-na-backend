const {UserModel} = require("../model");
const jwt = require('jsonwebtoken');
const constants = require('../constants');


module.exports = async function deleteUserService(data,res){
    var scretKey = constants.jwtScretKey;
    var decoded = await jwt.verify(data.token,scretKey);
    
    if(decoded.role=="Admin")
    {
        res.send("deleted");
        return  UserModel.deleteOne({_id: data.id});
        
    }
    else{
        res.send("not Admin");
    }
        
};