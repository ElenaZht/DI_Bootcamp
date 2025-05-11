import { createSlice } from "@reduxjs/toolkit";
import type {User, UserState} from './types'


const initialState: UserState = {
    currentUser: null,
    status: 'idle',
    error: null,
    isAuthenticated: false,
    stories: [],
    contributedStories: []
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {

    }
})

export const {

} = userSlice.actions

export default userSlice.reducer