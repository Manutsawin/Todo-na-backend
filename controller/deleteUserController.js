const{deleteUserService} = require("../services");

module.exports = async function deleteUserController(req,res){
    await   deleteUserService(req.query,res);
};