import { configureStore } from '@reduxjs/toolkit';
import booksSlice from '../components/BookList/BooksSlice'


const store = configureStore({
  reducer: booksSlice,
});

export default store;
