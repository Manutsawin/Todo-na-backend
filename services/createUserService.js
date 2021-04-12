const {UserModel} = require("../model");
const bcrypt = require('bcrypt')
const loginService = require("./loginService")
const jwt = require('jsonwebtoken')

module.exports = async function createUserService(data,res){
    
    
    const { UserID } = data


    if(data.Name.length<1)
    {
        res.send("name<1")
    }
    else{
       
        if(UserID.length<6)
        {
            res.send("userID<6")
        }
        else{
            
            if(data.Password.length<6)
            {
                res.send("password<6")
            }
            else{
                const result = await UserModel.findOne({
                    UserID
                })
            
                const checked = await result;
                
                if (!checked) {
                    let newdata = {
                        Name: data.Name,
                        UserID: data.UserID,
                        Role:"user"
                    } 
                
                    newdata.Password = await bcrypt.hash(data.Password,10)
                    const user = await new UserModel(newdata);
            
                    await user.save();
            
                    let logindata = await {
                        UserID : newdata.UserID,
                        Password: data.Password,
                    }
                    
                    await loginService(logindata,res);
                } 
                else {
                    res.send("UserID Same");
                }
            }
        }
    }

    

};