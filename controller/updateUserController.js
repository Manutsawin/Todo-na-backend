const {updateUserService} = require("../services");

module.exports = async function updateUserController (req,res){
    await updateUserService(req,res);
};