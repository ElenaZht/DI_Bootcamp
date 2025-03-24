import { configureStore, combineReducers } from "@reduxjs/toolkit";
import tasksReducer from '../features/TasksSlice'
import categoryReducer from '../features/CategoriesSlice'


const rootReducer = combineReducers({
    tasksReducer,
    categoryReducer
})
const store = configureStore({
    reducer: rootReducer
})

export default store