const { sequelize, Sequelize, Customer } = require('../models')

exports.UserInfo = async (req, res) => {
    const id = req.params.id
    let customer = null
    const token = req.decoded   

    if (id !== token.id) {
        message = "UnAuthorized Access"
        return res.status(401).json( {message} )
    }

    //TODO: add Seller
    customer = await Customer.findByPk(id)
    if (customer) {
        data = {
            id: customer.id,
            name: customer.name
        }
        return res.status(200).json(data)
    } else {
        message = "Customer Not Found"
        return res.status(404).json( {message} )
    }
}

exports.UserUpdate = async (req, res) => {
    const id = req.params.userId
    let customer = null
    //TODO: body validation
    customer = await Customer.findByPk(id)
    if (!customer) {
        message = "Customer Not Found"
        return res.status(404).json( {message} )
    } else {
        await customer.update(req.body)
        return res.status(201).json(customer)
    }
}

exports.UserCreate = async (req, res) => {
    const id = req.body.id
    const password = req.body.password
    const name = req.body.name
    //TODO: 넘겨온 값 validation
    
    let customer = null
    customer = await Customer.findByPk(id)
    if (customer) {
        return res.status(400).json({message: "User ID already Used"})
    } else {
        customer = await Customer.create(req.body)
        return res.status(201).json(customer)
    }
}


exports.UserDelete = async (req, res) => {
    const id = req.body.id
    let customer = null
    let result = {
        code: 500,
        data: null,
        message: "",
        sucess: false
    }
    customer = await Customer.destroy({
        where: { id }
    })
    result.code = 201
    result.data = customer
    result.sucess = true
    return res.status(201).json(result)
}

