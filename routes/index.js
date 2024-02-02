var express = require('express')
var router = express.Router()
const { PrismaClient } = require('@prisma/client')
const db = new PrismaClient()

router.get('/', async (req, res, next) => {
  const todos = await db.todo.findMany()
  const active = { home: 'home' }
  res.render('pages/index', { todos, active })
})

router.post('/create-todo', async (req, res, next) => {
  const todo = await db.todo.create({
    data: {
      content: req.body.todo,
    },
  })
  res.render('partials/create-todo', { todo })
})

router.delete('/delete-todo/:todoId', async (req, res, next) => {
  const todoId = req.params.todoId
  await db.todo.delete({
    where: {
      id: Number(todoId),
    },
  })
  const todos = await db.todo.findMany()
  if (todos.length === 0) {
    res.render('partials/delete-todo')
  } else {
    res.send()
  }
})

module.exports = router
