import { Dispatch } from 'redux'
import axios from 'axios'
import { AddTodoDispatch, ADD_TODO_FAIL, ADD_TODO_REQUEST, ADD_TODO_SUCCESS, GetTodosDispatch, GET_TODOS_FAIL, GET_TODOS_REQUEST, GET_TODOS_SUCCESS, ITodo } from './todoActionsTypes'

export const getTodos = () => async (dispatch: Dispatch<GetTodosDispatch>) => {
    try {
        dispatch({ type: GET_TODOS_REQUEST })

        const { data } = await axios.get('/api/todos')

        dispatch({
            type: GET_TODOS_SUCCESS,
            payload: data
        })
        
    } catch (error) {
        dispatch({
            type: GET_TODOS_FAIL,
            payload: error.response
        })
    }
}

export const addTodo = (todo: ITodo) => async (dispatch: Dispatch<AddTodoDispatch>) => {
    try {
        dispatch({ type: ADD_TODO_REQUEST })

        const { data } = await axios.post('/api/todos', todo)

        dispatch({
            type: ADD_TODO_SUCCESS,
            payload: data
        })
        
    } catch (error) {
        dispatch({
            type: ADD_TODO_FAIL,
            payload: error.response
        })
    }
}