'use strict';
const { Model } = require('sequelize');
const { sequelize } = require('.')
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {}
  Product.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(191)
    },
    content: {
      type: DataTypes.TEXT('long')
    },
    price:{
      type: DataTypes.INTEGER
    },
    sellerId: {
      type:DataTypes.STRING(191)
    }
  }, {
    sequelize,
    paranoid: true,
    modelName: 'Product',
  });
  return Product;
};