import { createAsyncThunk } from "@reduxjs/toolkit";
import type {LoginCredentials} from '../../../../types/UserTypes'
import {BASE_URL} from '../../utils/config'


export const loginUser = createAsyncThunk(
    'user/login',
    async (credentials: LoginCredentials, { rejectWithValue }) => {
        try {
            const response = await fetch(`${BASE_URL}/api/user/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify(credentials),
            });
            console.log("logine response", response)
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