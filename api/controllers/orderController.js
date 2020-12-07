const { sequelize, Sequelize, User, Product, Order, File } = require('../models')
const { ProductSearchBySellerId } = require('./productController')
const Op = Sequelize.Op

exports.OrderCreate = async (req, res) => {
    let data = {
        sellerId: null,
        customerId: req.decoded.id,
        productId: req.body.productId,
        address:req.body.address,
        status: false
    }
    let product = null
    try {
        product = await Product.findByPk(data.productId)
        if (!product) {
            return res.status(404).json( {message: 'Product Not Found'})
        }
    } catch (err) {
        return res.status(500).json( {message: err.message})
    }
    data.sellerId = product.sellerId
    try {
        const order = await Order.create(data)
        return res.status(201).json(order)
    } catch (err) {
        return res.status(500).json(err)
    }
}

exports.OrderInfo = async (req, res) => {
    const userId = req.params.userId
    const orderId = req.params.orderId
    

    let result = null
    
    const query = `select DISTINCT o.id, o.status, o.address, p.name, p.price, p.tag, 
                   o.productId, o.sellerId, o.createdAt as orderCreatedAt, p.createdAt as productCreatedAt, p.content, p.deletedAt as productDeletedAt, o.deletedAt as orderDeletedAt
                   from Orders o, Products p
                   where o.customerId = '${userId}' and o.productId = p.id and o.id = '${orderId}'` 
    
    if (req.decoded.id != userId) {
        return res.status(401).json({message:'UnAuthorized Access'})
    }
    try {
        result = await sequelize.query(query, {
            type: sequelize.QueryTypes.SELECT
        })
        result = result[0]
        result.image = await File.getImageById(result.productId)
        return res.status(200).json(result)
    } catch (err) {
        return res.status(500).json({message:err.message})
    }
}

exports.OrderDelete = async (req, res) => {
    const userId = req.params.userId
    const id = req.params.orderId
    let reuslt = null
    let order = null
    let data = null
    if (req.decoded.id != userId) {
        return res.status(401).json({message:'UnAuthorized Access'})
    }
    try {
        order = await Order.findAndCountAll({
            where: {
                id,
                customerId: userId
            }
        })
        if (order.count == 0) {
            return res.status(404).json({message:'Order Not Found'})
        }
        reuslt = await Order.destroy({
            where: {id}
        }) 
        data = order.rows[0].dataValues
        data.deleted = true
        return res.status(201).json(data)
    } catch(error){
        return res.status(500).json(error.message)
    }
}

exports.OrderList = async (req, res) => {
    const userId = req.params.userId

    let result = null
    
    const query = `select DISTINCT o.id, o.status, o.address, p.name, p.price, p.tag, 
                   o.productId, o.sellerId, p.content, o.createdAt as orderCreatedAt, p.createdAt as productCreatedAt, p.deletedAt as productDeletedAt, o.deletedAt as orderDeletedAt
                   from Orders o, Products p
                   where o.customerId = '${userId}' and o.productId = p.id` 
    
    if (req.decoded.id != userId) {
        return res.status(401).json({message:'UnAuthorized Access'})
    }
    try {
        result = await sequelize.query(query, {
            type: sequelize.QueryTypes.SELECT
        })
        for (order of result) {
            console.log(order)
            order.image = await File.getImageById(order.productId)
        }
        data = {
            count: result.length,
            data: result
        }
        return res.status(200).json(data)
    } catch (err) {
        return res.status(500).json({message:err.message})
    }
}

exports.OrderSearchByStatus = async (req, res) => {
    const userId = req.params.userId
    const status = req.params.status
    let result = null
    
    const query = `select DISTINCT o.id, o.status, o.address, p.name, p.price, p.tag, o.productId, o.sellerId, p.content, o.createdAt as orderCreatedAt, p.createdAt as productCreatedAt, p.deletedAt as productDeletedAt, o.deletedAt as orederDeletedAt
                   from Orders o, Products p
                   where o.customerId = '${userId}' and o.status = ${status} and o.productId = p.id` 
    
    if (req.decoded.id != userId) {
        return res.status(401).json({message:'UnAuthorized Access'})
    }
    try {
        result = await sequelize.query(query, {
            type: sequelize.QueryTypes.SELECT
        })
        for (order of result) {
            order.image = await File.getImageById(order.productId)
        }
        data = {
            count: result.length,
            data: result
        }
        return res.status(200).json(data)
    } catch (err) {
        return res.status(500).json({message:err.message})
    }

}

exports.OrderSearchByTags = async (req, res) => {
    const userId = req.params.userId
    const tag = req.params.tag
    let result = null
    
    const query = `select DISTINCT o.id, o.status, o.address, p.name, p.price, p.tag, o.productId, o.sellerId, o.createdAt as orderCreatedAt, p.createdAt as productCreatedAt, p.content, p.deletedAt as productDeletedAt, o.deletedAt as orederDeletedAt
                   from Orders o, Products p
                   where o.customerId = '${userId}' and p.tag Like '%${tag}%' and o.productId = p.id` 
    
    if (req.decoded.id != userId) {
        return res.status(401).json({message:'UnAuthorized Access'})
    }
    try {
        result = await sequelize.query(query, {
            type: sequelize.QueryTypes.SELECT
        })
        for (order of result) {
            order.image = await File.getImageById(order.productId)
        }
        data = {
            count: result.length,
            data: result
        }
        return res.status(200).json(data)
    } catch (err) {
        return res.status(500).json({message:err.message})
    }
}

exports.OrderSearchByName = async (req, res) => {
    const userId = req.params.userId
    const name = req.params.name
    let result = null
    
    const query = `select DISTINCT o.id, o.status, o.address, p.name, p.price, p.tag, o.productId, o.sellerId,o.createdAt as orderCreatedAt, p.createdAt as productCreatedAt, p.content, p.deletedAt as productDeletedAt, o.deletedAt as orederDeletedAt
                   from Orders o, Products p
                   where o.customerId = '${userId}' and p.name Like '%${name}%' and o.productId = p.id` 
    
    if (req.decoded.id != userId) {
        return res.status(401).json({message:'UnAuthorized Access'})
    }
    try {
        result = await sequelize.query(query, {
            type: sequelize.QueryTypes.SELECT
        })
        for (order of result) {
            console.log(order)
            order.image = await File.getImageById(order.productId)
        }
        data = {
            count: result.length,
            data: result
        }
        return res.status(200).json(data)
    } catch (err) {
        return res.status(500).json({message:err.message})
    }
}



exports.SellerOrderInfo = async (req, res) => {
    const userId = req.params.userId
    const orderId = req.params.orderId
    

    let result = null
    const query = `select DISTINCT o.id, o.status, o.address, p.name, p.price, p.tag, o.productId, o.customerId, p.content,o.createdAt as orderCreatedAt, p.createdAt as productCreatedAt,  p.deletedAt as productDeletedAt, o.deletedAt as orederDeletedAt
                   from Orders o, Products p
                   where o.sellerId = '${userId}' and o.productId = p.id and o.id = '${orderId}'` 
    
    if (req.decoded.id != userId) {
        return res.status(401).json({message:'UnAuthorized Access'})
    }
    try {
        result = await sequelize.query(query, {
            type: sequelize.QueryTypes.SELECT
        })
        for (order of result) {
            order.image = await File.getImageById(order.productId)
        }
        data = {
            count: result.length,
            data: result
        }
        return res.status(200).json(data)
    } catch (err) {
        return res.status(500).json({message:err.message})
    }
}

exports.SellerOrderDelete = async (req, res) => {
    const userId = req.params.userId
    const id = req.params.orderId

    let reuslt = null
    let order = null
    let data = null
    if (req.decoded.id != userId) {
        return res.status(401).json({message:'UnAuthorized Access'})
    }
    try {
        order = await Order.findAndCountAll({
            where: {
                id,
                sellerId: userId
            }
        })
        if (order.count == 0) {
            return res.status(404).json({message:'Order Not Found'})
        }
        reuslt = await Order.destroy({
            where: {id}
        }) 
        data = order.rows[0].dataValues
        data.deleted = true
        return res.status(201).json(data)
    } catch(error){
        return res.status(500).json(error.message)
    }
}

exports.SellerOrderList =  async (req, res) => {
    const userId = req.params.userId

    let result = null
    const query = `select DISTINCT o.id, o.status, o.address, p.name, p.price, p.tag, o.productId, o.sellerId, p.content,o.createdAt as orderCreatedAt, p.createdAt as productCreatedAt, p.deletedAt as productDeletedAt, o.deletedAt as orederDeletedAt
                   from Orders o, Products p
                   where o.sellerId = '${userId}' and o.productId = p.id` 
    
    if (req.decoded.id != userId) {
        return res.status(401).json({message:'UnAuthorized Access'})
    }
    try {
        result = await sequelize.query(query, {
            type: sequelize.QueryTypes.SELECT
        })
        for (order of result) {
            order.image = await File.getImageById(order.productId)
        }
        data = {
            count: result.length,
            data: result
        }
        return res.status(200).json(data)
    } catch (err) {
        return res.status(500).json({message:err.message})
    }
}

exports.SellerOrderSearchByStatus = async (req, res) => {
    const userId = req.params.userId
    const status = req.params.status
    let result = null
    
    const query = `select DISTINCT o.id, o.status, o.address, o.productId, o.createdAt as orderCreatedAt, p.createdAt as productCreatedAt, p.name, p.price, p.tag, p.deletedAt as productDeletedAt, o.deletedAt as orederDeletedAt
                   from Orders o, Products p
                   where o.sellerId = '${userId}' and  o.status = ${status} and o.productId = p.id` 
    
    if (req.decoded.id != userId) {
        return res.status(401).json({message:'UnAuthorized Access'})
    }
    try {
        result = await sequelize.query(query, {
            type: sequelize.QueryTypes.SELECT
        })
        
        for (order of result) {
            console.log(order)
            order.image = await File.getImageById(order.productId)
        }
        data = {
            count: result.length,
            data: result
        }
        return res.status(200).json(data)
    } catch (err) {
        return res.status(500).json({message:err.message})
    }
}

exports.SellerOrderSearchByTags = async (req, res) => {
    const userId = req.params.userId
    const tag = req.params.tag
    let result = null
    
    const query = `select DISTINCT o.id, o.status, o.address, p.name, p.price, p.tag, o.productId, o.createdAt as orderCreatedAt, p.createdAt as productCreatedAt, p.deletedAt as productDeletedAt, o.deletedAt as orederDeletedAt
                   from Orders o, Products p
                   where o.sellerId = '${userId}' and p.tag Like '%${tag}%' and o.productId = p.id` 
    
    if (req.decoded.id != userId) {
        return res.status(401).json({message:'UnAuthorized Access'})
    }
    try {
        result = await sequelize.query(query, {
            type: sequelize.QueryTypes.SELECT
        })
        for (order of result) {
            order.image = await File.getImageById(order.productId)
        }
        data = {
            count: result.length,
            data: result
        }
        return res.status(200).json(data)
    } catch (err) {
        return res.status(500).json({message:err.message})
    }
}

exports.SellerOrderSearchByName = async (req, res) => {
    const userId = req.params.userId
    const name = req.params.name
    let result = null
    
    const query = `select DISTINCT o.id, o.status, o.address, p.name, p.price, o.productId, o.createdAt as orderCreatedAt, p.createdAt as productCreatedAt, p.tag, p.deletedAt as productDeletedAt, o.deletedAt as orederDeletedAt
                   from Orders o, Products p
                   where o.sellerId = '${userId}' and p.name Like '%${name}%' and o.productId = p.id` 
    
    if (req.decoded.id != userId) {
        return res.status(401).json({message:'UnAuthorized Access'})
    }
    try {
        result = await sequelize.query(query, {
            type: sequelize.QueryTypes.SELECT
        })
        for (order of result) {
            order.image = await File.getImageById(order.productId)
        }
        data = {
            count: result.length,
            data: result
        }
        return res.status(200).json(data)
    } catch (err) {
        return res.status(500).json({message:err.message})
    }
}

exports.SellerOrderStatus = async (req, res) => {
    const userId = req.params.userId
    const status = req.params.status
    const orderId = req.params.orderId
    let order = null
    try {
        order = await Order.findByPk(orderId)
        if (!order) {
            return res.status(404).json({message:'Order not Found'})
        }
        if (order.sellerId !== userId || req.decoded.id !==userId) {
            return res.status(401).json({message:'UnAuthorized Access'})
        }
        await order.update({status})
        return res.status(201).json(order)
    } catch (err) {
        return res.status(500).json({message:err.message})
    }
}