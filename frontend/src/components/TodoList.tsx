import React, { useEffect } from 'react'
import { Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getTodoList } from '../actions/todoActions'
import { ITodo } from '../actions/todoActionsTypes'
import { RootStore } from '../store'

const TodoList = () => {
    const dispatch = useDispatch()

    const getTodos = useSelector((state: RootStore) => state.getTodos)
    const { todos }: { todos: ITodo[]} = getTodos

    const addTodo = useSelector((state: RootStore) => state.addTodo )


    useEffect(() => {
        dispatch(getTodoList())
    }, [dispatch, addTodo])


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
                        <Link to={`/edit/todo/${todo._id}`} className='btn btn-success btn-sm'>Edit</Link>
                    </Card.Body>
                </Card>
            ))}
        </>
    )
}

export default TodoList
