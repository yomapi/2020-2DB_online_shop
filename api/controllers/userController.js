const { sequelize, Sequelize, User } = require('../models')

exports.UserInfo = async (req, res) => {
    const id = req.params.id
    let user = null
    const token = req.decoded   

    if (id !== token.id) {
        message = "UnAuthorized Access"
        return res.status(401).json( {message} )
    }

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
    const id = req.params.id 
    const token = req.decoded   

    if (id !== token.id) {
        message = "UnAuthorized Access"
        return res.status(401).json( {message} )
    }

    let user = null
    //TODO: body validation
    try {
        user = await User.findByPk(id)
        if (!user) {
            message = "User Not Found"
            return res.status(404).json( {message} )
        } else {
            await user.update(req.body)
            return res.status(201).json(user)
        }
    } catch (err) {
        return res.status(err.code).json(error.message)
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
    const id = req.params.id 
    const token = req.decoded   
    if (id !== token.id) {
        message = "UnAuthorized Access"
        return res.status(401).json( {message} )
    }
    let user = null
    //TODO: 존재하는 사용자인지 확인
    //TODO: 판매자일 경우 등록된 상품 삭제(soft deletion)
    try {
        user = await User.destroy({
            where: { id }
        })
        return res.status(201).json({sucess: true})
    } catch(error) {
        return res.status(500).json(error.message)
    }
}

