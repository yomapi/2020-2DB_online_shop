'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {}
  Order.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    sellerId: {
      type: DataTypes.STRING(191)
    },
    customerId: {
      type: DataTypes.STRING(191)
    },
    productId: {
      type: DataTypes.INTEGER
    },
    address: {
      type: DataTypes.TEXT('MEDIUM')
    },
    status: {
      type: DataTypes.BOOLEAN
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    },        
    deletedAt: {
      allowNull: true,
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    paranoid: true,
    modelName: 'Order',
  });
  return Order;
};