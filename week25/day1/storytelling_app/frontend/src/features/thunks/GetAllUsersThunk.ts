import { createAsyncThunk } from "@reduxjs/toolkit";
import { authenticatedFetch } from '../../utils/apiClient';
import {BASE_URL} from '../../utils/config'


export const getAllUsers = createAsyncThunk(
    'users/all',
    async (_,{ getState, rejectWithValue }) => {
        try {
            const accessToken = getState().user.token;
            const response = await authenticatedFetch(`${BASE_URL}/api/user`, accessToken);
            
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