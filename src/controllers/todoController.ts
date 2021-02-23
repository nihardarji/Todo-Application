import { Request, Response } from 'express'
import { ITodo } from '../types/todoType'
import Todo from '../models/todoModel'

const getTodos = async (req: Request, res: Response): Promise<void> => {
    try {
        const todos: ITodo[] = await Todo.find({}).sort({ createdAt: -1 })

        res.json(todos)
    } catch (error) {
        throw error
    }
}

const getTodo = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params
        const todo: ITodo | null = await Todo.findById(id)
        if (todo) {
            res.json(todo)
        } else {
            res.status(404)
            throw new Error('Todo not found')
        }
    } catch (error) {
        throw error
    }
}

const addTodo = async (req: Request, res: Response): Promise<void> => {
    try {
        const body = req.body as Pick<ITodo, 'name' | 'description'>

        const todo: ITodo = new Todo({
            name: body.name,
            description: body.description
        })

        const newTodo = await todo.save()

        res.status(201).json(newTodo)
    } catch (error) {
        throw error
    }
}

const updateTodo = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params
        const body = req.body as Pick<ITodo, 'name' | 'description' | 'status'>

        const todo: ITodo | null = await Todo.findById(id)

        if (todo) {
            todo.name = body.name || todo.name
            todo.description = body.description || todo.description
            todo.status = body.status

            const updatedTodo = await todo.save()

            res.json(updatedTodo)
        } else {
            res.status(404)
            throw new Error('Todo not found')
        }
    } catch (error) {
        throw error
    }
}

const deleteTodo = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params
        const todo: ITodo | null = await Todo.findById(id)

        if (todo) {
           await todo.remove()
           res.json({ message: 'Todo Deleted' })
        } else {
            res.status(404)
            throw new Error('Todo not found')
        }
    } catch (error) {
        throw error
    }
}

export {
    addTodo,
    getTodos,
    getTodo,
    updateTodo,
    deleteTodo
}