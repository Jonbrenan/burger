const express = require('express')
const app = express()


const router = express.Router()


router.get('/', async function (req, res) {
    const data = await Cat.findAll()
    res.render('index', { cats: data })
  })