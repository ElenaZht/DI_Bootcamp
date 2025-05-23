import { createAsyncThunk } from "@reduxjs/toolkit";
import type { RefreshResponse } from "../../../../types/UserTypes";
import {BASE_URL} from '../../utils/config'


export const refreshToken = createAsyncThunk(
    "user/refresh-token",
    async (_, { rejectWithValue }) => {
        try {
            const response = await fetch(`${BASE_URL}/api/user/refresh-token`, {
                method: 'GET',
                credentials: 'include', // needed for cookies
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            if (!response.ok) {
                throw new Error('Token refresh failed');
            }
            const data = await response.json();
      
            return data as RefreshResponse;

        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
)