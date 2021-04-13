const {TodoModel} = require("../model");
const {UserModel} = require("../model");
const jwt = require('jsonwebtoken');
import { jwtConstants } from '../constants';


module.exports = async function deleteTodoService(data,res){
    var scretKey = 'asdkaujdklhfiashfeashoawdhsd';
    var decoded = await jwt.verify(data.token,scretKey);
    const  UserID = decoded.id

    const result = await UserModel.findOne({
        UserID
    })  
    if(result)
    {
        res.send("deleted");
        return  TodoModel.deleteOne({_id: data.id});
    }
    else{
        res.send("not delete");
    }

    
    
};