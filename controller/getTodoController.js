const{getTodoService} = require("../services");

module.exports = async function getTodoController(req,res){
    await   getTodoService(req.query,res);
};