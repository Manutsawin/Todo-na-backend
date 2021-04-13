
const bcrypt = require('bcrypt')
const Users = require('../model/UserModel')

const jwt = require('jsonwebtoken')  // ใช้งาน jwt module
// const fs = require('fs') // ใช้งาน file system module ของ nodejs

const constants = require('../constants');




module.exports = async function loginService(req,res){
   
    console.log(constants.jwtScretKey)

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
            'iss': 'konoe',
            'aud': 'everyone',
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

