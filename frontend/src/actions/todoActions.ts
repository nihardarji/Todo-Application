import { Dispatch } from 'redux'
import axios from 'axios'
import { AddTodoDispatch, ADD_TODO_FAIL, ADD_TODO_REQUEST, ADD_TODO_SUCCESS, GetTodosDispatch, GetTodoDispatch, GET_TODOS_FAIL, GET_TODOS_REQUEST, GET_TODOS_SUCCESS, ITodo, GET_TODO_REQUEST, GET_TODO_SUCCESS, GET_TODO_FAIL, UpdateTodoDispatch, UPDATE_TODO_SUCCESS, UPDATE_TODO_REQUEST, UPDATE_TODO_FAIL, DeleteTodoDispatch, DELETE_TODO_REQUEST, DELETE_TODO_SUCCESS, DELETE_TODO_FAIL } from './todoActionsTypes'

export const getTodoList = () => async (dispatch: Dispatch<GetTodosDispatch>) => {
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

export const getTodoById = (id: string) => async (dispatch: Dispatch<GetTodoDispatch>) => {
    try {
        dispatch({ type: GET_TODO_REQUEST })

        const { data } = await axios.get(`/api/todos/${id}`)

        dispatch({
            type: GET_TODO_SUCCESS,
            payload: data
        })
        
    } catch (error) {
        dispatch({
            type: GET_TODO_FAIL,
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

export const updateTodo = (todo: ITodo) => async (dispatch: Dispatch<UpdateTodoDispatch>) => {
    try {
        dispatch({ type: UPDATE_TODO_REQUEST })

        const { data } = await axios.put(`/api/todos/${todo._id}`, todo)

        dispatch({
            type: UPDATE_TODO_SUCCESS,
            payload: data
        })
        
    } catch (error) {
        dispatch({
            type: UPDATE_TODO_FAIL,
            payload: error.response
        })
    }
}

export const deleteTodo = (id: string) => async (dispatch: Dispatch<DeleteTodoDispatch>) => {
    try {
        dispatch({ type: DELETE_TODO_REQUEST })

        await axios.delete(`/api/todos/${id}`)

        dispatch({
            type: DELETE_TODO_SUCCESS
        })
        
    } catch (error) {
        dispatch({
            type: DELETE_TODO_FAIL,
            payload: error.response
        })
    }
}