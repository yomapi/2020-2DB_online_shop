'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class File extends Model {}
  File.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    originalFileName: {
      type: DataTypes.STRING(191)
    },
    serverFileName: {
      type: DataTypes.STRING(191)
    },
    path: {
      type: DataTypes.STRING(191)
    },
    mimeType: {
      type: DataTypes.STRING(191)
    },
    size: {
      type: DataTypes.INTEGER
    },
    productId: {
      type: DataTypes.INTEGER
    }
  }, {
    timestamps: false,
    sequelize,
    modelName: 'File',
  })
  File.getImageById = async (productId) => {
    let result = await File.findOne({
      where: { productId }
    })
    if (!result) {
      return null
    } else {
      let image = {
        id: result.id,
        name: result.originalFileName,
        url: result.path
      }
      return image
    }
  }
  return File;
};