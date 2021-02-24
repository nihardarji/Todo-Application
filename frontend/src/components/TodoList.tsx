import React, { useEffect } from 'react'
import { Badge, Button, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteTodo, getTodoList, updateTodo } from '../actions/todoActions'
import { ITodo } from '../actions/todoActionsTypes'
import { RootStore } from '../store'

const TodoList = () => {
    const dispatch = useDispatch()

    const getTodos = useSelector((state: RootStore) => state.getTodos)
    const { todos }: { todos: ITodo[]} = getTodos

    const addTodo = useSelector((state: RootStore) => state.addTodo)
    const updateTodoStore = useSelector((state: RootStore) => state.updateTodo)
    const deleteTodoStore = useSelector((state: RootStore) => state.deleteTodo)
    const { success } = deleteTodoStore


    useEffect(() => {
        dispatch(getTodoList())
    }, [dispatch, addTodo, updateTodoStore, success])

    const markAsCompleteHandler = (todo: ITodo) => {
        if(window.confirm("Are you sure?")){
            dispatch(updateTodo({
                ...todo,
                status: true
            }))
        }
    }

    const deleteHandler = (id: any) => {
        if(window.confirm('Are you sure want to delete?')){
            dispatch(deleteTodo(id))
        }
    }

    return (
        <>
            {todos.map((todo: ITodo) => (
                <Card key={todo._id} className='my-2' bg='dark' text='light'>
                    <Card.Body>
                        <Card.Title className='text-success'>
                            <div className='d-flex justify-content-between align-items-center'>
                                {todo.name}
                                <Button size='sm' onClick={() => deleteHandler(todo._id)} variant='danger'><i className='fa fa-lg fa-trash'></i></Button>
                            </div>
                        </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{todo.status ? 'Completed' : 'In Progress'}</Card.Subtitle>
                        <Card.Text>
                            {todo.description}
                        </Card.Text>
                        <div className='d-flex justify-content-between align-items-center'>
                            {!todo.status ? 
                                <Button onClick={() => markAsCompleteHandler(todo)} className='btn btn-success btn-sm'>Mark as Complete</Button>
                            :
                                <div>
                                    <Badge pill className='p-2' variant='success'> <i className='fa fa-check'></i> Completed</Badge>
                                </div>
                            }
                            {!todo.status && <Link to={`/edit/todo/${todo._id}`} className='btn btn-success btn-sm'>Edit</Link>}
                        </div>
                    </Card.Body>
                </Card>
            ))}
        </>
    )
}

export default TodoList
