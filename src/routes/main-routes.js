const express = require('express')

const weatherController = require('../../controller/weather')

const router = express.Router()

router.get('', (req, res) => {
  res.render('index.hbs')
})

router.get('/weather',weatherController)

module.exports = router