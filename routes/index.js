var express = require('express')
var router = express.Router()
const { PrismaClient } = require('@prisma/client')
const db = new PrismaClient()

const payload = {
  title: 'heading 1',
  message: 'using pug',
  subtitle: 'subtitle',
}
/* GET home page. */
router.get('/', async (req, res, next) => {
  const todos = await db.todo.findMany()
  res.render('index', { todos })
})

/* GET about page. */
router.get('/about', async (req, res, next) => {
  res.render('about')
})

module.exports = router
