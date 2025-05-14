import { createAsyncThunk } from "@reduxjs/toolkit";
import type {SignUpCredentials} from '../../../../types/UserTypes'


export const signUp = createAsyncThunk(
    'user/register',
    async (credentials: SignUpCredentials, { rejectWithValue }) => {
        try {
            const response = await fetch('http://localhost:3001/api/user/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify(credentials),
            });
            console.log("register response", response)
            if (!response.ok) {
                throw new Error('Registration failed');
            }

            const data = await response.json();
            console.log("register data", data)
            return data;
            
        } catch (error: any) {
            console.log("error", error)
            return rejectWithValue(error.message);
        }
    }
)