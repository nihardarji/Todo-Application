export const GET_TODOS_REQUEST = 'GET_TODOS_REQUEST'
export const GET_TODOS_SUCCESS = 'GET_TODOS_SUCCESS'
export const GET_TODOS_FAIL = 'GET_TODOS_FAIL'

export interface ITodo {
    _id: string,
    name: string
    description: string
    status: boolean
    createdAt?: string
    updatedAt?: string
}

export interface GetTodosSuccess {
    type: typeof GET_TODOS_SUCCESS,
    payload: ITodo[]
}

export interface GetTodosFail {
    type: typeof GET_TODOS_FAIL,
    payload: any
}

export interface GetTodosRequest {
    type: typeof GET_TODOS_REQUEST
}

export type GetTodosDispatch = GetTodosSuccess | GetTodosFail | GetTodosRequest