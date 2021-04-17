const {TodoModel} = require("../model");
const jwt = require('jsonwebtoken');
const constants = require('../constants');


module.exports = async function getTaskService(data,res){

    const {token} = await data
    var scretKey = await constants.jwtScretKey;
    var decoded = await jwt.verify(token,scretKey);
    if(decoded.role=="Admin")
    {
        const task = await TodoModel.find({
            isFinished: false
        })
        res.send(task);
    }
    else{
        res.send("not Admin");
    }
    
}