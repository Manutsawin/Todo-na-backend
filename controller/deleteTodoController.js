const{deleteTodoService} = require("../services");

module.exports = async function deleteTodoController(req,res){
    await   deleteTodoService(req.query,res);
    
};