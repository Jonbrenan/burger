


const mysql = require('mysql2')

const defaultConfig = {
  host: 'localhost',
  user: 'root',
  port: 3306,
  password: 'Black117!',
  database: 'burgers_db'
}

let connection = mysql.createConnection(defaultConfig)

connection.connect (function(error) {
  if (error) {
    console.error('error', +error.stack)
  } console.log('connected as ID', + connection.threadId)
}) 



module.exports = connection.promise()
