const {TodoModel} = require("../model");
const jwt = require('jsonwebtoken')
const {UserModel} = require("../model");



module.exports = async function createTodoService(data,res){
    
    
    const {token,taskName,time} = data
    
    var scretKey = 'asdkaujdklhfiashfeashoawdhsd';
    var decoded = await jwt.verify(token,scretKey);
    const  UserID = await decoded.id
    const result = await UserModel.findOne({
        UserID
    })
    
    if(result)
    {
        let newdata = {
            UserID: result.UserID,
            taskName: taskName,
            time: time,
        } 
    
           
    
        const task = new TodoModel(newdata);
        res.send("Created")
        return task.save();
            
    }
    else{
        res.send("not create");
    }
    
     
   
     
    
    
    

};