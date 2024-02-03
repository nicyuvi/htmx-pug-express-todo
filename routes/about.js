var express = require('express')
var router = express.Router()
const { PrismaClient } = require('@prisma/client')

router.get('/', async (req, res, next) => {
  const active = { about: 'about' }
  res.render('pages/about', { active })
})

module.exports = router
