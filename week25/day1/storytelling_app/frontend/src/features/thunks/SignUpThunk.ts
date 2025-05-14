import { createAsyncThunk } from "@reduxjs/toolkit";
import type {SignUpCredentials, SignUpResponse} from '../../../../types/UserTypes'
import {BASE_URL} from '../../utils/config'

interface BackendValidationError {
    type: string;
    value: string;
    msg: string;
    path: string;
    location: string;
}

interface BackendErrorPayload {
    message: string;
    errors?: BackendValidationError[];
}
export const signUp = createAsyncThunk<
    SignUpResponse,
    SignUpCredentials,
    { rejectValue: BackendErrorPayload }
>(
    'user/register',
    async (credentials: SignUpCredentials, { rejectWithValue }) => {
        try {
            const response = await fetch(`${BASE_URL}/api/user/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                // credentials: 'include',
                body: JSON.stringify(credentials),
            });

            const data = await response.json();
            if (!response.ok) {
                return rejectWithValue(data as BackendErrorPayload);            
            }

            
            return data as SignUpResponse;
            
        } catch (error: any) {
            console.error("Network or parsing error in signUp thunk:", error);
            return rejectWithValue({ message: error.message || 'An unexpected network error occurred' });
        }
    }
)