const {TodoModel} = require("../model");
const {UserModel} = require("../model");
const jwt = require('jsonwebtoken');


module.exports = async function updateTodoService(req,res){
    var scretKey = 'asdkaujdklhfiashfeashoawdhsd'
    var decoded = await jwt.verify(req.query.token,scretKey);
    const  UserID = decoded.id

    const result = await UserModel.findOne({
        UserID
    })  
    if(result)
    {
        res.send(200);
        const task = await TodoModel.findOneAndUpdate({_id : req.query.id },req.body);
    }
    else{
        res.send("not found");
    }

    
    
};