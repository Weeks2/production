const admin = require('../config/firebase-config');

class Middleware {

    async decodeToken(req,res,next) {
        try {
            console.log(req.headers)
            const token = req.headers.authorization.split(' ')[1];
            const decodeValue = await admin.auth().verifyIdToken(token);
            if(decodeValue) {
                req.user = decodeValue;
                return next();
            }
            return res.json({message: "No access"});
        } 
        catch (error) {
             return res.json({message: "Internal Error", error: error});
        }
    }
}

module.exports = new Middleware()