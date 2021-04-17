const {UserModel} = require("../model");
const jwt = require('jsonwebtoken');
const constants = require('../constants');



module.exports = async function updateUserService(req,res){
    var scretKey = constants.jwtScretKey;
    var decoded = await jwt.verify(req.query.token,scretKey);
    
    if(decoded.role=="Admin")
    {
        const user = await UserModel.findOneAndUpdate({_id : req.query.id },req.body);
        res.send(200);
    }
    else{
        res.send("not Admin");
    }
  
    
};