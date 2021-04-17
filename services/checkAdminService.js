const jwt = require('jsonwebtoken')
const constants = require('../constants');


module.exports = async function checkAdminService(req,res){

    var scretKey = constants.jwtScretKey;
    var decoded = await jwt.verify(req,scretKey);
    if(decoded.role=="Admin")
    {
        res.send(true);
    }
    else{
        res.send(false);
    }

};
