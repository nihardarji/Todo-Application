import express from 'express'
import { addTodo, deleteTodo, getTodos, updateTodo } from '../controllers/todoController'

const router: express.Router = express.Router()

router.route('/').get(getTodos).post(addTodo)

router.route('/:id').delete(deleteTodo).put(updateTodo)

export default router