const { User } = require("../models/UserModel");
const UserRole = require("../enums/UserRole");

const Admin = (req, res, next) => {
    let token = req.header('x-access-token') || req.header('authorization');

    if(token) {
        if(token.startsWith("Bearer")) {
            token = token.slice(7, token.length);
        }

        User.findByToken(token, (err, user) => {
            if(err) {
                throw err;
            }

            if(user.role !== UserRole.ADMIN) {
                return res.status(403).json({
                    status: false,
                    message: "Customers users don't have access to this route!"
                });
            }

            next();
        })
    }
}

module.exports = { Beautician }
