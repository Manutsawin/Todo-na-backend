const{getUserService} = require("../services");

module.exports = async function getUserController(req,res){
    await   getUserService(req.query,res);
};