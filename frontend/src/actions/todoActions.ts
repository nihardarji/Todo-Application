import { Dispatch } from 'redux'
import axios from 'axios'
import { GetTodosDispatch, GET_TODOS_FAIL, GET_TODOS_REQUEST, GET_TODOS_SUCCESS } from './todoActionsTypes'

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