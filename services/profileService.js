
const bcrypt = require('bcrypt')
const Users = require('../model/UserModel')
const jwt = require('jsonwebtoken')
const constants = require('../constants');


module.exports = async function profileService(req,res){

    var scretKey =  constants.jwtScretKey;
    var decoded = await jwt.verify(req,scretKey);
    const  UserID = decoded.id
    const result = await Users.findOne({
        UserID
    })
    if(result){
        const profile = {

            Name: result.Name,
            User: result.UserID,
            role: result.Role
        }
        
        res.send(profile)
    }
    else{
        res.send("Error")
    }
    


};
