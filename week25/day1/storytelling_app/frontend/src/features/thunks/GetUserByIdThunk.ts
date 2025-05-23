import { createAsyncThunk } from "@reduxjs/toolkit";
import { authenticatedFetch } from '../../utils/apiClient';
import type { User } from '../../../../types/UserTypes';
import {BASE_URL} from '../../utils/config'


export const getUserById = createAsyncThunk(
    'user/getById',
    async (userId: string, { getState, rejectWithValue }) => {
        try {
            const accessToken = getState().user.token;
            

            const response = await authenticatedFetch(`${BASE_URL}/api/user/${userId}`, accessToken);
            if (!response.ok) {
                throw new Error('Failed to fetch user');
            }
            
            const data = await response.json();
            return data.user as User;

        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
);