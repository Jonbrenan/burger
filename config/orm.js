


const connection = require('./connection')
// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection
const orm = {
  selectWhere: async function (tableName, colToSearch, valueToMatch) {
    const sql = 'SELECT * FROM ?? WHERE ?? = ?'
    // SELECT * FROM `table` WHERE `col` = 'match'
    const [rows] = await connection.query(sql, [
      tableName,
      colToSearch,
      valueToMatch
    ])
    return rows
  },

  selectAndOrder: async function (whatToSelect, table, orderCol) {
    const sql = 'SELECT ?? FROM ?? ORDER BY ?? DESC'
    const [rows] = await connection.query(sql, [whatToSelect, table, orderCol])
    return rows
  },

  findWhoHasMost: async function (
    tableOneCol,
    tableTwoForeignKey,
    tableOne,
    tableTwo
  ) {
    const sql = `
    SELECT ??, COUNT(??) AS count 
      FROM ?? 
 LEFT JOIN ?? ON ??.?? = ??.id 
  GROUP BY ?? 
  ORDER BY count DESC 
     LIMIT 1`

    const [rows] = await connection.query(sql, [
      tableOneCol,
      tableOneCol,
      tableOne,
      tableTwo,
      tableTwo,
      tableTwoForeignKey,
      tableOne,
      tableOneCol
    ])

    return rows
  }
}







// code that initializes process for adding employee
async function addEmployee (answer1) {
  try {
    await connect()
    await insertEmployee(answer1.newEmployeeFirstName, answer1.newEmployeeLastName, answer1.newEmployeeRole, answer1.newEmployeeManager )
  } catch (error) {
    console.error(error)
  } finally {
    connection.end()
  }
}

// function responisble for adding employee

async function insertEmployee(newEmployeeFirstName, newEmployeeLastName, newEmployeeRole, newEmployeeManager ){
  console.log('Inserting a new product ...\n')
  console.log('Selecting all products ...\n')
  const [rows] = await connection.query(`INSERT INTO employee SET first_name = '${newEmployeeFirstName}', last_name = '${newEmployeeLastName}', role_id = ${newEmployeeRole}, manager_id = ${newEmployeeManager};`)
  console.table(rows)
  start()
}





module.exports = orm