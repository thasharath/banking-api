const { User } = require("../models/UserModel");

const Auth = (req, res, next) => {
    let token = req.header('x-access-token') || req.header('authorization');

    if(token) {
        if(token.startsWith("Bearer")) {
            token = token.slice(7, token.length);
        }

        User.findByToken(token, (err, user) => {
            if(err) {
                throw err;
            }

            if(!user) {
                return res.status(400).json({
                    status: false,
                    message: "No valid token is provided!"
                });
            }

            req.token = token;
            req.user = user;

            next();
        })
    }
}

module.exports = { Auth }