const { sequelize, Sequelize, User } = require('../models')

exports.UserInfo = async (req, res) => {
    const id = req.params.id
    let user = null
    const token = req.decoded   

    if (id !== token.id) {
        message = "UnAuthorized Access"
        return res.status(401).json( {message} )
    }

    //TODO: add Seller
    user = await User.findByPk(id)
    if (user) {
        data = {
            id: user.id,
            name: user.name
        }
        return res.status(200).json(data)
    } else {
        message = "User Not Found"
        return res.status(404).json( {message} )
    }
}

exports.UserUpdate = async (req, res) => {
    const id = req.params.userId
    let user = null
    //TODO: body validation
    user = await User.findByPk(id)
    if (!user) {
        message = "User Not Found"
        return res.status(404).json( {message} )
    } else {
        await user.update(req.body)
        return res.status(201).json(user)
    }
}

exports.UserCreate = async (req, res) => {
    const id = req.body.id
    const password = req.body.password
    const isSeller = req.body.isSeller
    const name = req.body.name
    //TODO: 넘겨온 값 validation
    
    let user = null
    user = await User.findByPk(id)
    if (user) {
        return res.status(400).json({message: "User ID already Used"})
    } else {
        user = await User.create(req.body)
        return res.status(201).json(user)
    }
}


exports.UserDelete = async (req, res) => {
    const id = req.body.id
    let user = null
    let result = {
        code: 500,
        data: null,
        message: "",
        sucess: false
    }
    user = await User.destroy({
        where: { id }
    })
    result.code = 201
    result.sucess = true
    return res.status(201).json(result)
}

