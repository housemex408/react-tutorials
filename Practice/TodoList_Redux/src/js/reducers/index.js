import { combineReducers } from "redux"

import listTodos from "./listTodoReducer"
import editTodos from "./editTodoReducer"

export default combineReducers({
    listTodos,
    editTodos
})