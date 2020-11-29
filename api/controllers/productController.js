const { sequelize, Sequelize, User, Product } = require('../models')
const Op = Sequelize.Op

exports.ProductList = async (req, res) => {
    let products = null
    try{
        products = await Product.findAll({
            paranoid: false
        })
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
            },
            paranoid: false
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
            },
            paranoid: false
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

exports.ProductSearchBySellerId = async (req, res) => {
    const sellerId = req.params.provider
    let products = null
    try {
        products = await Product.findAndCountAll({
            where: {
                sellerId
            },
            paranoid: false
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

exports.ProductInfo = async (req, res) => {
    const id = req.params.productId
    let product = null
    try {
        product = await Product.findByPk(id,{ paranoid: false })
        if (!product) {
            return res.status(404).json( {message:'Product Not Found'} )
        } else {
            return res.status(200).json(product)
        }
    } catch(error) {
        return res.status(error.code).json(error.message)
    }
}
exports.ProductDelete = async (req, res) => {
    //checkOwner
    const token = req.decoded   
    const productId = req.params.productId
    let product = null
    let result = null
    let data = null
    try {
        product = await Product.findByPk(productId)
        if (!product) {
            return res.status(404).json( {message:'Product Not Found'} )
        } 
        if (product.sellerId != token.id) {
            return res.status(401).json( {message:'UnAuthorized Access'} )
        }
        //TODO: delete Order on cascade
        result = await Product.destroy({
            where: { id: product.id }
        })
        data = product.dataValues
        data.deleted = true
        return res.status(201).json(data)
    } catch (error) {
        return res.status(500).json(error.message)
    }    
}

exports.ProductUpdate = async (req, res) => {
    const token = req.decoded
    const productId = req.params.productId
    const data = req.body
    let product = null
    //TODO: Update validation
    try {
        product = await Product.findByPk(productId)
        if (!product) {
            return res.status(404).json( {message:'Product Not Found'} )
        } 
        if (product.sellerId != token.id) {
            return res.status(401).json( {message:'UnAuthorized Access'} )
        }
        await product.update(data)
        return res.status(201).json(product)
    } catch(error) {
        return res.status(500).json(error.message)
    }
}