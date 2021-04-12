const{createTodoService} = require("../services");

module.exports = async function createTodoController(req,res){
    await   createTodoService(req.body,res);
};