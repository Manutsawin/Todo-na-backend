const {TodoModel} = require("../model");
const jwt = require('jsonwebtoken');
const constants = require('../constants');


module.exports = async function getTaskService(data,res){

    const {token,isFinished} = await data
    var scretKey = await constants.jwtScretKey;
    var decoded = await jwt.verify(token,scretKey);
    if(decoded.role=="Admin")
    {
        const task = await TodoModel.find({
            isFinished: isFinished
        })
        res.send(task);
    }
    else{
        res.send("not Admin");
    }
    
}