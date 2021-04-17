const{checkAdminService} = require("../services");

module.exports = async function checkAdminController(req,res){
    await   checkAdminService(req.query.token,res);
};