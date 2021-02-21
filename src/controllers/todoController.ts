import { Request, Response } from 'express'
import { ITodo } from '../types/todoType'
import Todo from '../models/todoModel'

const getTodos = async (req: Request, res: Response): Promise<void> => {
    try {
        const todos: ITodo[] = await Todo.find({})

        res.json(todos)
    } catch (error) {
        throw error
    }
}

const addTodo = async (req: Request, res: Response): Promise<void> => {
    try {
        const body = req.body as Pick<ITodo, 'name' | 'description' | 'status'>

        const todo: ITodo = new Todo({
            name: body.name,
            description: body.description,
            status: body.status
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
            todo.description = body.name || todo.description
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
    updateTodo,
    deleteTodo
}