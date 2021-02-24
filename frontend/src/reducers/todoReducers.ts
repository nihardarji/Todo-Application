import { AddTodoDispatch, ADD_TODO_FAIL, ADD_TODO_REQUEST, ADD_TODO_SUCCESS, DeleteTodoDispatch, DELETE_TODO_REQUEST, DELETE_TODO_SUCCESS, GetTodoDispatch, GetTodosDispatch, GET_TODOS_FAIL, GET_TODOS_REQUEST, GET_TODOS_SUCCESS, GET_TODO_FAIL, GET_TODO_REQUEST, GET_TODO_RESET, GET_TODO_SUCCESS, ITodo, UpdateTodoDispatch, UPDATE_TODO_FAIL, UPDATE_TODO_REQUEST, UPDATE_TODO_SUCCESS } from "../actions/todoActionsTypes"

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

interface initialTodoI {
    todo: ITodo | {},
    loading?: boolean,
    error?: any
}

export const getTodoReducer = (state: initialTodoI = { todo: {} }, action: GetTodoDispatch): initialTodoI => {
    switch (action.type) {
        case GET_TODO_REQUEST:
            return {
                ...state,
                loading: true
            }

        case GET_TODO_SUCCESS:
            return {
                todo: action.payload,
                loading: false
            }

        case GET_TODO_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        case GET_TODO_RESET:
            return {
                todo: {}
            }
    
        default:
            return state
    }
}

export const addTodoReducer = (state: initialTodoI = { todo: {} }, action: AddTodoDispatch): initialTodoI => {
    switch (action.type) {
        case ADD_TODO_REQUEST:
            return {
                ...state,
                loading: true
            }
            
        case ADD_TODO_SUCCESS:
            return {
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

export const updateTodoReducer = (state: initialTodoI = { todo: {} }, action: UpdateTodoDispatch): initialTodoI => {
    switch (action.type) {
        case UPDATE_TODO_REQUEST:
            return {
                ...state,
                loading: true
            }
            
        case UPDATE_TODO_SUCCESS:
            return {
                todo: action.payload,
                loading: false
            }

        case UPDATE_TODO_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        
        default:
            return state
    }
    
}

interface deleteTodoI {
    loading?: boolean,
    error?: any,
    success?: boolean
}

export const deleteTodoReducer = (state: deleteTodoI = {}, action: DeleteTodoDispatch): deleteTodoI => {
    switch (action.type) {
        case DELETE_TODO_REQUEST:
            return {
                ...state,
                loading: true
            }
            
        case DELETE_TODO_SUCCESS:
            return {
                ...state,
                success: true,
                loading: false
            }

        case UPDATE_TODO_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        
        default:
            return state
    }
    
}
