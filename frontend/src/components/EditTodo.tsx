import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, RouteComponentProps } from 'react-router-dom'
import { addTodo, getTodoById } from '../actions/todoActions'
import { ITodo } from '../actions/todoActionsTypes'
import { RootStore } from '../store'

interface RouteParams { id?: string }
interface EditTodoProps extends RouteComponentProps<RouteParams>{}

const EditTodo: React.FC<EditTodoProps> = ({ history, match }) => {
    const todoId = match.params.id
    const [name, setName] = useState<string>('')
    const [description, setDescription] = useState<string>('')

    const getTodo = useSelector((state: RootStore) => state.getTodo)
    const { todo } = getTodo

    const dispatch = useDispatch()

    useEffect(() => {
        if(todoId){
            if(!(todo as ITodo).name || (todo as ITodo)._id !== todoId){
                dispatch(getTodoById(todoId))
            } else {
                setName((todo as ITodo).name)
                setDescription((todo as ITodo).description)
            }
        } else {
            setName('')
            setDescription('')
        }
    }, [todoId, todo, dispatch])

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(todoId){
            console.log('Update Todo')
        } else {
            dispatch(addTodo({
                name,
                description
            }))
            history.push('/')
        }
    }

    return (
        <Form onSubmit={submitHandler}>
            <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control 
                    type="text"
                    placeholder="Enter name"
                    value={name}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                />
            </Form.Group>
            <Form.Group controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control 
                    as="textarea" 
                    rows={3} 
                    placeholder="Enter description"
                    value={description}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDescription(e.target.value)}
                />
            </Form.Group>
            <Button type='submit' className='mr-2 my-2'>Save</Button>
            <Link to='/' className='btn btn-primary mr-2 my-2'>Cancel</Link>
        </Form>
    )
}

export default EditTodo
