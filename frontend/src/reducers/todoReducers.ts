import { GetTodosDispatch, GET_TODOS_FAIL, GET_TODOS_REQUEST, GET_TODOS_SUCCESS, ITodo } from "../actions/todoActionsTypes"

interface InitialStateI {
    loading: boolean,
    todos: ITodo[] | [],
    error?: any
}

const initialState: InitialStateI = {
    loading: false,
    todos: []
}

export const getTodosReducer = (state: InitialStateI = initialState, action: GetTodosDispatch): InitialStateI => {
    switch (action.type) {
        case GET_TODOS_REQUEST:
            return {
                ...state,
                loading: true
            }
            
        case GET_TODOS_SUCCESS:
            return {
                ...state,
                todos: action.payload,
                loading: false
            }

        case GET_TODOS_FAIL:
            return {
                todos: [],
                loading: false,
                error: action.payload
            }
        
        default:
            return state
    }
    
}

