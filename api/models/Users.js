'use strict'
const { sequelize } = require('.')
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class User extends Model { }
    User.init({
        id: {
            type: DataTypes.STRING(191),
            primaryKey: true,
        },
        password: {
            type: DataTypes.STRING(191),
        },
        name: {
            type: DataTypes.STRING(191),
        },
        isSeller: {
            type: DataTypes.BOOLEAN
        }
    }, {
        sequelize,
        paranoid: true,
        modelName: 'User'
    })
    return User
}
