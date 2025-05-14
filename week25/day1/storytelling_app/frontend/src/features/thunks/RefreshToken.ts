import { createAsyncThunk } from "@reduxjs/toolkit";
import type { RefreshResponse } from "../types";
// interface RefreshResponse {
//     accessToken: string;
//     message: string;
// }

export const refreshToken = createAsyncThunk(
    "user/refresh-token",
    async (_, { rejectWithValue }) => {
        try {
            const response = await fetch('http://localhost:3001/api/user/refresh-token', {
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
            // console.log('Refresh token API response:', data); // Debug log
      
            return data as RefreshResponse;

        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
)