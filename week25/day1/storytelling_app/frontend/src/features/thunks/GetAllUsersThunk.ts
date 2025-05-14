import { createAsyncThunk } from "@reduxjs/toolkit";
import { authenticatedFetch } from '../../utils/apiClient';


export const getAllUsers = createAsyncThunk(
    'users/all',
    async (_,{ getState, rejectWithValue }) => {
        try {
            const accessToken = getState().user.token;
            const response = await authenticatedFetch('http://localhost:3001/api/user', accessToken);
            
            if (!response.ok) {
                throw new Error('Failed to fetch users');
            }
            
            const data = await response.json();
            return data.allUsers;

        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
);