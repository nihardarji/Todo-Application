import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { addTodoReducer, deleteTodoReducer, getTodoReducer, getTodosReducer, updateTodoReducer } from './reducers/todoReducers'

const reducer = combineReducers({
    getTodos: getTodosReducer,
    addTodo: addTodoReducer,
    getTodo: getTodoReducer,
    updateTodo: updateTodoReducer,
    deleteTodo: deleteTodoReducer
})

const middleware = [thunk]

const store = createStore(
    reducer, 
    composeWithDevTools(applyMiddleware(...middleware))
)

export type RootStore = ReturnType<typeof reducer>

export default store