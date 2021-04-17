const{getTaskService} = require("../services");

module.exports = async function getTaskController(req,res){
    await   getTaskService(req.query,res);
};