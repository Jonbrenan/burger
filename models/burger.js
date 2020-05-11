const orm = require('../config/orm')

orm
  .selectAll('burgers')
  .then(rows => console.table(rows))
  .catch(console.error)

orm
  .insertOne('burger', 'burger_name', 'big_burger')
  .then(rows => console.table(rows))
  .catch(console.error)

orm
  .updateOne('burgers', 'devoured', 'devoured')
  .then(rows => console.table(rows))
  .catch(console.error)
