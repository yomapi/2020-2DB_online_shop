const { sequelize, Sequelize, File } = require('../models')
let fs = require('fs')

exports.fileUpload = async (req, res) => {
    console.log(req.file)
    const file = {
        originalFileName: req.file.originalname,
        serverFileName: req.file.filename,
        path: req.file.path,
        mimeType: req.file.mimetype,
        productId: req.body.productId,
        size: req.file.size
    }
    let result = null
    try {
        //파일있으면 삭제
        result = await File.findOne({
            where: { productId: file.productId },
        })
        if (result) { 
            console.log('file at: ../', result.path)
            await fs.unlink('./' + result.path, (error) => {
                if (error) {
                    throw error
                }  
            }) 
            await File.destroy({
                where: { productId: result.productId}
            })
            
        } 
        result = await File.create(file)
        return res.status(201).json(result)
    } catch (error) {
        console.log(error)
        return res.status(500).json({message: error.message})
    }
}

exports.fileDelete = async (req, res) => {
    const productId = req.params.productId
    try {
        await File.destroy({
            where: { productId },
        })
        return res.status(201).json({ message: 'file deleted'})
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}