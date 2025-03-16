import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './slices/TasksReducer';


const store = configureStore({
    reducer: tasksReducer
  });
  
  export default store;