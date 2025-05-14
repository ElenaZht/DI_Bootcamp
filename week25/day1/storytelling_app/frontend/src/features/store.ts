import { configureStore } from '@reduxjs/toolkit';
import storiesReducer from './StoriesSlice'
import userReducer from './UserSlice'


export const store = configureStore({
  reducer: {
    user: userReducer,
    stories: storiesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;