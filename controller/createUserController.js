const{createUserService} = require("../services");

module.exports = async function createUserController(req,res){
    await   createUserService(req.body,res);
    
};