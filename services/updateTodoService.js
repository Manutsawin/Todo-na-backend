const {TodoModel} = require("../model");
const {UserModel} = require("../model");
const jwt = require('jsonwebtoken');
const constants = require('../constants');



module.exports = async function updateTodoService(req,res){
    var scretKey = constants.jwtScretKey;
    var decoded = await jwt.verify(req.query.token,scretKey);
    const  UserID = decoded.id

    const result = await UserModel.findOne({
        UserID
    })  
    if(result)
    {
       
        const task = await TodoModel.findOneAndUpdate({_id : req.query.id },req.body);
        res.send(200);
    }
    else{
        res.send("not found");
    }

    
};