const { sequelize, Sequelize, Customer } = require('../models')
const jwt = require('jsonwebtoken')

exports.login = async (req, res) => {
    const id = req.body.id
    const password = req.body.password

    let token = null
    let user = null
    let tokenInfo = {
        userInfo: {
            id: null,
        },
        toeknConfig: {
            expiresIn: '24h',
            issuer: 'khusinsa',
        },
    }

    let match = false
    try {
        user = await Customer.findByPk(id)
        if (user) {
            match = (user.password === password)
        } else {
            message = "User Not Found"
            return res.status(404).json( {message} )
        }
    } catch(err) {
        return res.status(500).json( {message: err.message} )
    }

    if (match) {
        tokenInfo.userInfo.id = user.id
        token = jwt.sign(tokenInfo.userInfo, config.JWT_KEY, toeknInfo.toeknConfig)
        return res.status(200).json( {Token: token})
    } else {
        message = "Invalid Password"
        return res.status(404).json( {message} )
    }
}