import React, { useEffect } from 'react'
import { Badge, Button, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getTodoList } from '../actions/todoActions'
import { ITodo } from '../actions/todoActionsTypes'
import { RootStore } from '../store'

const TodoList = () => {
    const dispatch = useDispatch()

    const getTodos = useSelector((state: RootStore) => state.getTodos)
    const { todos }: { todos: ITodo[]} = getTodos

    const addTodo = useSelector((state: RootStore) => state.addTodo)
    const updateTodo = useSelector((state: RootStore) => state.updateTodo)


    useEffect(() => {
        dispatch(getTodoList())
    }, [dispatch, addTodo, updateTodo])


    return (
        <>
            {todos.map((todo: ITodo) => (
                <Card key={todo._id} className='my-2' bg='dark' text='light'>
                    <Card.Body>
                        <Card.Title className='text-success'>{todo.name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{todo.status ? 'Completed' : 'In Progress'}</Card.Subtitle>
                        <Card.Text>
                            {todo.description}
                        </Card.Text>
                        <div className='d-flex justify-content-between align-items-center'>
                            {!todo.status ? 
                                <Button className='btn btn-success btn-sm'>Mark as Complete</Button>
                            :
                                <div>
                                    <Badge pill className='p-2' variant='success'> <i className='fa fa-check'></i> Completed</Badge>
                                </div>
                            }
                            <Link to={`/edit/todo/${todo._id}`} className='btn btn-success btn-sm'>Edit</Link>
                        </div>
                    </Card.Body>
                </Card>
            ))}
        </>
    )
}

export default TodoList
