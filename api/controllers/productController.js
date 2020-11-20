const { sequelize, Sequelize, User, Product } = require('../models')


exports.ProductList = async (req, res) => {
    let products = null
    try{
        products = await Product.findAll()
        return res.status(200).json(products)
    } catch(error) {
        return res.status(500).json(error.message)
    }
}