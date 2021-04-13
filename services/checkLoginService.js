const Users = require('../model/UserModel')
const jwt = require('jsonwebtoken')
const jwtConstants = require("../constants")



module.exports = async function checkLoginService(req,res){

    var scretKey = jwtConstants.secret;
    var decoded = await jwt.verify(req,scretKey);
    const  UserID = decoded.id
    const result = await Users.findOne({
        UserID
    })
    if(result){
        res.send(true)
    }
    else{
        res.send(false)
    }
    


};
