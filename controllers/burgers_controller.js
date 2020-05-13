const express = require('express')



const router = express.Router()

let burger = require('../models/burger.js')
router.get('/', async function (req, res) {
   const burgerData = await burger.findAll()
   
   res.render("index", {burgerData: burgerData})
   
  })


  module.exports = router