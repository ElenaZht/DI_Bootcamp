import { configureStore } from "@reduxjs/toolkit";
import todosReducer from '../features/ToDoSlice'


const store = configureStore({
    reducer: todosReducer
})

export default store