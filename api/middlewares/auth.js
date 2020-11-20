const config = require(__dirname + '/../config/config')
const jwt = require('jsonwebtoken')
const { sequelize, Sequelize, User } = require('../models')

exports.memberOnly = (req, res, next) => {
    const token = req.headers.authorization

    try {
        req.decoded = jwt.verify(token, config.JWT_KEY)
        return next()
    } catch(error) {
        if (error.name === 'TokenExpiredError') {
            return res.status(419).json( {message: "TokenExpired" })
        } else {
            return res.status(401).json( {message: "InvalidToken" })
        }
    }
}

exports.sellerOnly = async (req, res, next) => {
    const token = req.headers.authorization
    let seller = null
    try {
        req.decoded = jwt.verify(token, config.JWT_KEY)
        seller = await User.isSeller(req.decoded.id)
        console.log(seller)
        if (seller) {
            return next()
        } else {
            return res.status(404).json({message: 'NoSellerFound'})
        }
    } catch(error) {
        if (error.name === 'TokenExpiredError') {
            return res.status(419).json( {message: "TokenExpired" })
        } else {
            console.log(error.message)
            return res.status(401).json( {message: "InvalidToken" })
        }
    }

}