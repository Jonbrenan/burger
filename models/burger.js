const orm = require('../config/orm')



orm
  .insertOne('burgers', 'burger_name', 'big_burger')
  .then(rows => console.table(rows))
  .catch(console.error)

orm
  .updateOne('burgers', 'devoured', 'devoured')
  .then(rows => console.table(rows))
  .catch(console.error)


  const burger = {findAll: function () {
    return orm
  .selectAll('burgers')
  .then(rows => rows)
  .catch(console.error)
  }}


  module.exports = burger