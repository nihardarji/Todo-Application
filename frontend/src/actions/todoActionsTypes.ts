export const GET_TODOS_REQUEST = 'GET_TODOS_REQUEST'
export const GET_TODOS_SUCCESS = 'GET_TODOS_SUCCESS'
export const GET_TODOS_FAIL = 'GET_TODOS_FAIL'

export const GET_TODO_REQUEST = 'GET_TODO_REQUEST'
export const GET_TODO_SUCCESS = 'GET_TODO_SUCCESS'
export const GET_TODO_FAIL = 'GET_TODO_FAIL'

export const ADD_TODO_REQUEST = 'ADD_TODO_REQUEST'
export const ADD_TODO_SUCCESS = 'ADD_TODO_SUCCESS'
export const ADD_TODO_FAIL = 'ADD_TODO_FAIL'

export const UPDATE_TODO_REQUEST = 'UPDATE_TODO_REQUEST'
export const UPDATE_TODO_SUCCESS = 'UPDATE_TODO_SUCCESS'
export const UPDATE_TODO_FAIL = 'UPDATE_TODO_FAIL'

export interface ITodo {
    _id?: string,
    name: string
    description: string
    status?: boolean
    createdAt?: string
    updatedAt?: string
}

export interface TodosFail {
    type: typeof GET_TODOS_FAIL | typeof ADD_TODO_FAIL | typeof GET_TODO_FAIL | typeof UPDATE_TODO_FAIL,
    payload: any
}

export interface TodosRequest {
    type: typeof GET_TODOS_REQUEST | typeof ADD_TODO_REQUEST | typeof GET_TODO_REQUEST | typeof UPDATE_TODO_REQUEST
}

// GET TODOS SUCCESS & DISPATCH
export interface GetTodosSuccess {
    type: typeof GET_TODOS_SUCCESS,
    payload: ITodo[]
}

export interface GetTodoSuccess {
    type: typeof GET_TODO_SUCCESS,
    payload: ITodo
}

export type GetTodosDispatch = GetTodosSuccess | TodosFail | TodosRequest
export type GetTodoDispatch = GetTodoSuccess | TodosFail | TodosRequest

// ADD TODO SUCCESS & DISPATCH
export interface AddTodoSuccess {
    type: typeof ADD_TODO_SUCCESS,
    payload: ITodo
}

export type AddTodoDispatch = AddTodoSuccess | TodosFail | TodosRequest

// UPDATE TODO SUCCESS & DISPATCH
export interface UpdateTodoSuccess {
    type: typeof UPDATE_TODO_SUCCESS,
    payload: ITodo
}

export type UpdateTodoDispatch = UpdateTodoSuccess | TodosFail | TodosRequest
