const {updateTodoService} = require("../services");

module.exports = async function updateTaskController (req,res){
    await updateTodoService(req,res);
};