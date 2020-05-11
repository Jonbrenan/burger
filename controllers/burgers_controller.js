const express = require('express')



const router = express.Router()

let burger = require('../models/burger.js')
router.get('/', async function (req, res) {
   burger.selectAll( function(data) {

console.log(burgerObject)
   })
   
  })


  module.exports = router