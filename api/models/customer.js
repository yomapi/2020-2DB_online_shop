'use strict'
const { sequelize } = require('.')
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class Customer extends Model { }
    Customer.init({
        id: {
            type: DataTypes.STRING(191),
            primaryKey: true,
        },
        password: {
            type: DataTypes.STRING(191),
        },
        name: {
            type: DataTypes.STRING(191),
        }
    }, {
        sequelize,
        paranoid: true,
        modelName: 'Customer'
    })
    return Customer
}
