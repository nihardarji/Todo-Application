import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { RouteComponentProps } from 'react-router-dom'
import { addTodo } from '../actions/todoActions'

type EditTodoProps = RouteComponentProps

const EditTodo: React.FC<EditTodoProps> = ({ history }) => {
    const [name, setName] = useState<string>('')
    const [description, setDescription] = useState<string>('')

    const dispatch = useDispatch()

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch(addTodo({
            name,
            description
        }))
        history.push('/')
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
            <Button className='ml-2 my-2'>Cancel</Button>
        </Form>
    )
}

export default EditTodo
