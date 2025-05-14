import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { User, UserState } from './types'
import { loginUser } from "./thunks/LoginThunk";
import { signUp } from './thunks/SignUpThunk'
import { refreshToken } from './thunks/RefreshToken';
import { getUserById } from './thunks/GetUserByIdThunk'


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
                console.log("login fullfiled action.payload", action.payload)
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload as string || 'Unknown error occurred';
                state.isAuthenticated = false;
                console.log("login failed", state)
            });

        // Signup
        builder
        // ...existing code...
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
                // console.log("action.payload", action.payload)
                state.isAuthenticated = true;
            })
            .addCase(refreshToken.rejected, (state) => {
                state.status = 'failed';
                state.token = null;
                state.currentUser = null;
                state.isAuthenticated = false;
            });

            // Get user by ID
            // builder
            // .addCase(getUserById.pending, (state) => {
            //     state.status = 'loading';
            // })
            // .addCase(getUserById.fulfilled, (state, action) => {
            //     state.status = 'succeeded';
            //     state.currentUser = action.payload;
            //     state.isAuthenticated = true;
            // })
            // .addCase(getUserById.rejected, (state, action) => {
            //     state.status = 'failed';
            //     state.error = action.payload as string;
            //     state.isAuthenticated = false;
            // });
    }
})

export const {logout, setUser} = userSlice.actions

export default userSlice.reducer