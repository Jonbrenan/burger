


const connection = require('./connection')
// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection
const orm = {
  selectAll: async function (tableName) {
    const sql = 'SELECT * FROM ?? '
    // SELECT * FROM `table` WHERE `col` = 'match'
    const [rows] = await connection.query(sql, [
      tableName
    ])
    return rows
  },

  insertOne: async function (table, column, value) {
    const sql = 'INSERT INTO ?? (??) VALUES (?)'
    const [rows] = await connection.query(sql, [table, column, value])
    return rows
  },


  updateOne: async function (table, column1, column2) {
    const sql = 'UPDATE ?? SET ?? = 1 WHERE ?? = 1 '
    const [rows] = await connection.query(sql, [table, column1, column2])
    return rows
  },


  // INSERT INTO burgers (burger_name) VALUES ("Burger")
}




module.exports = orm