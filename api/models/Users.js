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
    User.isSeller = async function(id) {
        let user = null
        user = await User.findOne({
            where: {
                id,
                isSeller:true
            }
        })
        if (user) {
            return user
        } else {
            return false
        }
    }
    return User
}
