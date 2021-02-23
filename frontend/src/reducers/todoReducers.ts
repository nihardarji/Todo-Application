import { AddTodoDispatch, ADD_TODO_FAIL, ADD_TODO_REQUEST, ADD_TODO_SUCCESS, GetTodosDispatch, GET_TODOS_FAIL, GET_TODOS_REQUEST, GET_TODOS_SUCCESS, ITodo } from "../actions/todoActionsTypes"

interface InitialGetTodoI {
    loading: boolean,
    todos: ITodo[] | [],
    error?: any
}

const initialState: InitialGetTodoI = {
    loading: false,
    todos: []
}

export const getTodosReducer = (state: InitialGetTodoI = initialState, action: GetTodosDispatch): InitialGetTodoI => {
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

interface initialAddTodoI {
    todo: ITodo | {},
    loading: boolean,
    error?: any
}

export const addTodoReducer = (state: initialAddTodoI = { todo: {}, loading: false }, action: AddTodoDispatch): initialAddTodoI => {
    switch (action.type) {
        case ADD_TODO_REQUEST:
            return {
                ...state,
                loading: true
            }
            
        case ADD_TODO_SUCCESS:
            return {
                ...state,
                todo: action.payload,
                loading: false
            }

        case ADD_TODO_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        
        default:
            return state
    }
    
}

