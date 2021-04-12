const{profileService} = require("../services");

module.exports = async function profileController(req,res){
    await   profileService(req.query.token,res);
    
};