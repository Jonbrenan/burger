const fs = require('fs')
const DB = require('./index.js')

const connection = new DB({ multipleStatements: true }).connection
const schema = fs.readFileSync(`../db/schema.sql`, 'UTF8')
const seeds = fs.readFileSync(`../db/seeds.sql`, 'UTF8')

connection
  .query(schema)
  .then(() => connection.query(seeds).then(() => process.exit(0)))
