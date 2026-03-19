let jwt = require('jsonwebtoken')
let userController = require("../controllers/users")
const { PUBLIC_KEY, JWT_ALGORITHM } = require('./constants')

module.exports = {
    checkLogin: async function (req, res, next) {
        try {
            let token = req.headers.authorization;
            if (!token || !token.startsWith('Bearer')) {
                return res.status(401).send("ban chua dang nhap")
            }
            token = token.split(" ")[1];
            let result = jwt.verify(token, PUBLIC_KEY, { algorithms: [JWT_ALGORITHM] });
            if (result.exp * 1000 > Date.now()) {
                let user = await userController.FindUserById(result.id);
                if (user) {
                    req.user = user
                    next()
                } else {
                    res.status(401).send("ban chua dang nhap")
                }
            } else {
                res.status(401).send("ban chua dang nhap")
            }
        } catch (error) {
            res.status(401).send("ban chua dang nhap")
        }
    }
}