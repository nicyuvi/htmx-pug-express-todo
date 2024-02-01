var express = require('express')
var router = express.Router()
const { PrismaClient } = require('@prisma/client')
const db = new PrismaClient()

/* GET home page. */
router.get('/', async (req, res, next) => {
  const todos = await db.todo.findMany()
  // const active = { home: 'home' }
  res.render('index', { todos })
})

/* GET about page. */
router.get('/about', async (req, res, next) => {
  // const active = { about: 'about' }
  res.render('about')
})

router.post('/create-todo', async (req, res, next) => {
  const todo = await db.todo.create({
    data: {
      content: req.body.todo,
    },
  })
  res.render('partials/create-todo', { todo })
})

module.exports = router
