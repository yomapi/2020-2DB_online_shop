const { token } = require('morgan')
const { sequelize, Sequelize, User, Product } = require('../models')
const Op = Sequelize.Op

exports.ProductList = async (req, res) => {
    let products = null
    try{
        products = await Product.findAll()
        return res.status(200).json(products)
    } catch(error) {
        return res.status(500).json(error.message)
    }
}

exports.ProductCreate = async (req, res) => {
    //TODO: 판매자인지 확인
    const data = {
        sellerId: req.decoded.id,
        name: req.body.name,
        tag: req.body.tags,
        price: req.body.price,
        content: req.body.discription
    }
    let product = null
    try {
        product = await Product.create(data)
        return res.status(201).json(product)
    } catch(error) {
        return res.status(500).json(error.message)
    }
}

exports.ProductSearchByName = async (req, res) => {
    const searchName = req.params.name
    let products = null
    try {
        products = await Product.findAndCountAll({
            where: {
                name: { [Op.like]: '%' + searchName + '%' }
            }
        })
        const data = {
            count: products.count,
            data: products.rows
        }
        return res.status(200).json(data)
    } catch (error) {
        return res.status(500).json( error.message )
    }
}

exports.ProductSearchByTag = async (req, res) => {
    const searchTag = req.params.tag
    let products = null
    try {
        products = await Product.findAndCountAll({
            where: {
                tag: { [Op.like]: '%' + searchTag + '%' }
            }
        })
        const data = {
            count: products.count,
            data: products.rows
        }
        return res.status(200).json(data)
    } catch (error) {
        return res.status(500).json( error.message )
    }
}