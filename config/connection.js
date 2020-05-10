


const mysql = require('mysql2')

const defaultConfig = {
  host: 'localhost',
  user: 'root',
  password: 'Black117!',
  database: 'burgers_db'
}

let connection = mysql.createConnection(defaultConfig)

connection.promise()

module.exports = connection
