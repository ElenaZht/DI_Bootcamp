import { createAsyncThunk } from "@reduxjs/toolkit";

interface LoginCredentials {
    email: string;
    password: string;
}
export interface LoginResponse {
    user: {
        id: string;
        email: string;
        username: string;
    };
    token: string;
}

export const loginUser = createAsyncThunk(
    'user/login',
    async (credentials: LoginCredentials, { rejectWithValue }) => {
        try {
            const response = await fetch('http://localhost:3001/api/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify(credentials),
            });
            console.log("response", response)
            if (!response.ok) {
                throw new Error('Login failed');
            }
            
            const data = await response.json();
            console.log("data", data)
            return data;
        } catch (error: any) {
            console.log("error", error)
            return rejectWithValue(error.message);
        }
    }
);