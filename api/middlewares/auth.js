const config = require(__dirname + '/../config/config')
const jwt = require('jsonwebtoken')

exports.memberOnly = (req, res, next) => {
    const token = req.headers.authorization

    try {
        req.decoded = jwt.verify(token, config.JWT_KEY)
        return next()
    } catch(err) {
        if (error.name === 'TokenExpiredError') {
            return res.status(419).json( {message: "TokenExpired" })
        } else {
            return res.status(401).json( {message: "InvalidToken" })
        }
    }
}
