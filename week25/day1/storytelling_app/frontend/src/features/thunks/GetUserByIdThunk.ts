import { createAsyncThunk } from "@reduxjs/toolkit";
import { authenticatedFetch } from '../../utils/apiClient';
import type { User } from '../types';

export const getUserById = createAsyncThunk(
    'user/getById',
    async (userId: string, { getState, rejectWithValue }) => {
        try {
            const accessToken = getState().user.token;
            // console.log("createAsyncThunk access token", accessToken);
            

            const response = await authenticatedFetch(`http://localhost:3001/api/user/${userId}`, accessToken);
            // console.log("createAsyncThunk response", response);
            if (!response.ok) {
                throw new Error('Failed to fetch user');
            }
            
            const data = await response.json();
            // console.log("thunk bring user as ", data.user)
            return data.user as User;

        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
);