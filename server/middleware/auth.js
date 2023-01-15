const jwt = require('jsonwebtoken');
// This is a middleware function that will be used to verify the token
const auth = (req, res, next) => {
    try { //try to verify the token if it is valid if not send a response to the frontend
        const token = req.header("x-auth-token");
        if (!token) 
            return res
                .status(401)
                .json({msg: "No authentication token, access denied"});

        const verified = jwt.verify(token, process.env.JWT_SECRET);

        if (!verified) //if the token is not verified, this will send a response to the frontend
            return res //this is sending a response to the frontend
                .status(401)
                .json({msg: "Token verification failed, authorization denied"});
        req.user = verified.id;
        next();
    } catch (err) {
        res
            .status(500)
            .json({error: err.message});
    }
}

module.exports = auth;