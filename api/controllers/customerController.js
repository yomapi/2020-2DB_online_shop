const { sequelize, Sequelize, Customer } = require('../models')

exports.CustomerInfo = async (req, res) => {
    const id = req.body.id
    let customer = null
    let result = {
        code: 500,
        data: null,
        message: "",
        sucess: false
    }
    customer = await Customer.findByPk(id)
    if (customer) {
        result.code = 200
        result.data = customer
        result.sucess = true
        return res.status(200).json(result)
    } else {
        result.code = 404
        result.data = null
        result.sucess = false
        result.message = "Customer Not Found"
        return res.status(404).json(result)
    }
}

exports.CustomerUpdate = async (req, res) => {
    const id = req.body.id
    let customer = null
    let result = {
        code: 500,
        data: null,
        message: "",
        sucess: false
    }

    customer = await Customer.findByPk(id)
    if (!customer) {
        result.code = 404
        result.data = null
        result.sucess = false
        result.message = "Customer Not Found"
        return res.status(404).json(result)
    } else {
        await customer.update(req.body)
        result.code = 201
        result.data = customer
        result.sucess = true
        return res.status(201).json(result)
    }
}

exports.CustomerCreate = async (req, res) => {
    const id = req.body.id
    let customer = null
    let result = {
        code: 500,
        data: null,
        message: "",
        sucess: false
    }
    customer = await Customer.findByPk(id)
    if (customer) {
        result.code = 400
        result.data = null
        result.sucess = false
        result.message = "User ID already Used"
        return res.status(400).json(result)
    } else {
        customer = await Customer.create(req.body)
        result.code = 201
        result.data = customer
        result.sucess = true
        return res.status(201).json(result)
    }
}


exports.CustomerDelete = async (req, res) => {
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

