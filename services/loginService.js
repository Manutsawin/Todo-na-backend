
const bcrypt = require('bcrypt')
const Users = require('../model/UserModel')

const jwt = require('jsonwebtoken') 
const constants = require('../constants');




module.exports = async function loginService(req,res){
   
    

    const { UserID, Password } = await req
    
    const result = await Users.findOne({
        UserID
    })
    
    if(!result)
    {
        await res.send("User incorret");
    }

    const checked = await bcrypt.compare(Password,result.Password)
    

    if (checked) {
        
        var scretKey = constants.jwtScretKey;

        const payload = {
            
            id: result.UserID,
            name: result.Name,
            role: result.Role
        }
        

        var token = await jwt.sign(payload, scretKey, {

            expiresIn: '24h' // expires in 24 hours

        });
        
        await res.send(token);
        
        return 0;
    } else {
       
        await res.send("Password incorret");
       
    }
};

