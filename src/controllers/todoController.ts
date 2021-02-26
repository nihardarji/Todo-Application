import { Request, Response } from 'express'
import { ITodo } from '../types/todoType'
import Todo from '../models/todoModel'
import asyncHandler from 'express-async-handler'

const getTodos = asyncHandler (async (req: Request, res: Response): Promise<void> => {
    const todos: ITodo[] = await Todo.find({}).sort({ createdAt: -1 })

    res.json(todos)
})

const getTodo = asyncHandler (async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params
    const todo: ITodo | null = await Todo.findById(id)
    if (todo) {
        res.json(todo)
    } else {
        res.status(404)
        throw new Error('Todo not found')
    }
})

const addTodo = asyncHandler (async (req: Request, res: Response): Promise<void> => {
    const body = req.body as Pick<ITodo, 'name' | 'description'>

    const todo: ITodo = new Todo({
        name: body.name,
        description: body.description
    })

    const newTodo = await todo.save()

    res.status(201).json(newTodo)
})

const updateTodo = asyncHandler(async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params
    const body = req.body as Pick<ITodo, 'name' | 'description' | 'status'>

    const todo: ITodo | null = await Todo.findById(id)

    if (todo) {
        if(todo.status){
            res.status(403)
            throw new Error('Task Already Completed')
        } else {
            todo.name = body.name || todo.name
            todo.description = body.description || todo.description
            todo.status = body.status

            const updatedTodo = await todo.save()

            res.json(updatedTodo)
        }
    } else {
        res.status(404)
        throw new Error('Todo not found')
    }
})

const deleteTodo = asyncHandler (async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params
    const todo: ITodo | null = await Todo.findById(id)

    if (todo) {
        await todo.remove()
        res.json({ message: 'Todo Deleted' })
    } else {
        res.status(404)
        throw new Error('Todo not found')
    }
})

export {
    addTodo,
    getTodos,
    getTodo,
    updateTodo,
    deleteTodo
}