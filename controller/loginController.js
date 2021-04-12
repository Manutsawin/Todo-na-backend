const{loginService} = require("../services");

module.exports = async function loginController(req,res){
    await   loginService(req.body,res);
    
};