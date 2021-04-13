const {TodoModel} = require("../model");
const {UserModel} = require("../model");
const jwt = require('jsonwebtoken');
const jwtConstants = require("../constants")


module.exports = async function updateNameTodoService(req,res){
    var scretKey = jwtConstants.secret;
    var decoded = await jwt.verify(req.query.token,scretKey);
    const  UserID = decoded.id

    const result = await UserModel.findOne({
        UserID
    })  
    if(result)
    {
       
        const task = await TodoModel.findOneAndUpdate({_id : req.query.id },req.body);
        console.log(req.body)
    }
    else{
       
    }

    
    
};