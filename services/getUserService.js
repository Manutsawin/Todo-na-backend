const {UserModel} = require("../model");
const jwt = require('jsonwebtoken');
const constants = require('../constants');


module.exports = async function getUserService(data,res){

    const {token} = await data
    var scretKey = await constants.jwtScretKey;
    var decoded = await jwt.verify(token,scretKey);
    
    if(decoded.role=="Admin")
    {
        const user = await UserModel.find({
            Role : "user"
        })
        res.send(user);
    }
    else{
        res.send("not Admin");
    }

    
    
    
}