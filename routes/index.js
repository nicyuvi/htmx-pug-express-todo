var express = require('express')
var router = express.Router()
const { PrismaClient } = require('@prisma/client')
const db = new PrismaClient()

router.get('/', async (req, res, next) => {
  const todos = await db.todo.findMany()
  // const active = { home: 'home' }
  res.render('pages/index', { todos })
})

router.post('/create-todo', async (req, res, next) => {
  const todo = await db.todo.create({
    data: {
      content: req.body.todo,
    },
  })
  res.render('partials/create-todo', { todo })
})

/**
 * Edit Feature
 * todo: move feature routes to directory
 */
router.get('/edit-todo/:todoId', async (req, res, next) => {
  const todoId = Number(req.params.todoId)
  const todo = await db.todo.findUniqueOrThrow({
    where: {
      id: todoId,
    },
  })
  const defaultValue = todo.content
  res.render('partials/edit-todo', { defaultValue, todoId })
})

router.get('/edit-cancel/:todoId', async (req, res, next) => {
  const todoId = Number(req.params.todoId)
  const todo = await db.todo.findUniqueOrThrow({
    where: {
      id: todoId,
    },
  })
  res.render('partials/edit-cancel', { todo })
})

router.delete('/delete-todo/:todoId', async (req, res, next) => {
  const todoId = Number(req.params.todoId)
  await db.todo.delete({
    where: {
      id: todoId,
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
