import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from '../components/taskSlice'

const store = configureStore({
    reducer: tasksReducer
})

export default store