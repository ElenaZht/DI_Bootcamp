import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { User, UserState } from '../../../types/UserTypes'
import { loginUser } from "./thunks/LoginThunk";
import { signUp } from './thunks/SignUpThunk'
import { refreshToken } from './thunks/RefreshToken';


const initialState: UserState = {
    currentUser: null,
    token: null, // access token
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
        setUser: (state, action: PayloadAction<User | null>) => {
            state.currentUser = action.payload;
            state.isAuthenticated = !!action.payload;
            state.status = 'succeeded';
            state.error = null;
        },
        logout: (state) => {
            state.currentUser = null;
            state.token = null;
            state.status = 'idle';
            state.error = null;
            state.isAuthenticated = false;
            state.stories = [];
            state.contributedStories = [];
        }
    },
    extraReducers: (builder) => {
        // Login
        builder
            .addCase(loginUser.pending, (state) => {
                state.status = 'loading';
                state.error = null;
                
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.currentUser = action.payload.user;
                state.token = action.payload.newAccessToken;  // access token
                state.isAuthenticated = true;
                state.error = null;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload as string || 'Unknown error occurred';
                state.isAuthenticated = false;
                console.error("login failed", state.error)
            });

        // Signup
        builder
            .addCase(signUp.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(signUp.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.currentUser = action.payload.user;
                state.token = action.payload.accessToken;
                state.isAuthenticated = true;
                state.error = null;
            })
            .addCase(signUp.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload as string || 'Registration failed';
                state.isAuthenticated = false;
            });

        // refresh token
        builder
            .addCase(refreshToken.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(refreshToken.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.token = action.payload.accessToken;
                state.isAuthenticated = true;
            })
            .addCase(refreshToken.rejected, (state) => {
                state.status = 'failed';
                state.token = null;
                state.currentUser = null;
                state.isAuthenticated = false;
            });
    }
})

export const {logout, setUser} = userSlice.actions

export default userSlice.reducer