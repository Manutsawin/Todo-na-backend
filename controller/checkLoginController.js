const{checkLoginService} = require("../services");

module.exports = async function checkLoginController(req,res){
    await   checkLoginService(req.query.token,res);
};