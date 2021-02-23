export const GET_TODOS_REQUEST = 'GET_TODOS_REQUEST'
export const GET_TODOS_SUCCESS = 'GET_TODOS_SUCCESS'
export const GET_TODOS_FAIL = 'GET_TODOS_FAIL'

export const ADD_TODO_REQUEST = 'ADD_TODO_REQUEST'
export const ADD_TODO_SUCCESS = 'ADD_TODO_SUCCESS'
export const ADD_TODO_FAIL = 'ADD_TODO_FAIL'

export interface ITodo {
    _id?: string,
    name: string
    description: string
    status?: boolean
    createdAt?: string
    updatedAt?: string
}

export interface TodosFail {
    type: typeof GET_TODOS_FAIL | typeof ADD_TODO_FAIL,
    payload: any
}

export interface TodosRequest {
    type: typeof GET_TODOS_REQUEST | typeof ADD_TODO_REQUEST
}

// GET TODOS SUCCESS & DISPATCH
export interface GetTodosSuccess {
    type: typeof GET_TODOS_SUCCESS,
    payload: ITodo[]
}

export type GetTodosDispatch = GetTodosSuccess | TodosFail | TodosRequest

// ADD TODO SUCCESS & DISPATCH
export interface AddTodoSuccess {
    type: typeof ADD_TODO_SUCCESS,
    payload: ITodo
}

export type AddTodoDispatch = AddTodoSuccess | TodosFail | TodosRequest
