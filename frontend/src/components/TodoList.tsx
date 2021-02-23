import React, { useEffect } from 'react'
import { Button, Card, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getTodoList } from '../actions/todoActions'
import { ITodo } from '../actions/todoActionsTypes'
import { RootStore } from '../store'

const TodoList = () => {
    const dispatch = useDispatch()

    const getTodos = useSelector((state: RootStore) => state.getTodos)
    const { todos } = getTodos

    useEffect(() => {
        dispatch(getTodoList())
    }, [dispatch])


    return (
        <Container className='my-3'>
            {(todos as Array<ITodo>).map((todo: ITodo) => (
                <Card key={todo._id} className='my-2' bg='dark' text='light'>
                    <Card.Body>
                        <Card.Title>{todo.name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{todo.status ? 'Completed' : 'In Progress'}</Card.Subtitle>
                        <Card.Text>
                            {todo.description}
                        </Card.Text>
                        <Button size='sm' variant='success'>Edit</Button>
                    </Card.Body>
                </Card>
            ))}
        </Container>
    )
}

export default TodoList
