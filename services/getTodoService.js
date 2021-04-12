const {TodoModel} = require("../model");
const jwt = require('jsonwebtoken');

module.exports = async function getTodoService(data,res){

    const {token,isFinished} = await data
    var scretKey = await 'asdkaujdklhfiashfeashoawdhsd'
    var decoded = await jwt.verify(token,scretKey);
    const  UserID = await decoded.id
    const todo = await TodoModel.find({
        UserID : UserID,
        isFinished: isFinished
    })
    res.send(todo);
}