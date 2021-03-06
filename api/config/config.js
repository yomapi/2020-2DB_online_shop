const path = require('path')
require('dotenv').config({path: path.join(__dirname, "../.env")})

const username = process.env.MYSQL_USERNAME || 'root'
const password = process.env.MYSQL_PASSWORD || null
const database = process.env.MYSQL_DATABASE || 'root'
const host = process.env.MYSQL_HOST || '127.0.0.1'
const port = process.env.MYSQL_PORT || 3306
const JWT_KEY = process.env.JWT_KEY || 'testKey'

module.exports = {
    'username': username,
    'password': password,
    'database': database,
    'host': host,
    'port': port,
    'dialect': 'mysql',
    'operatorsAliases': false,
    'JWT_KEY': JWT_KEY,
}
