import { createAsyncThunk } from "@reduxjs/toolkit";
import { logout } from "../UserSlice";

export const logoutUser = createAsyncThunk(
    'user/logout',
    async (_, { dispatch }) => {
        try {
            const response = await fetch('http://localhost:3001/api/user/logout', {
                method: 'POST',
                credentials: 'include',
            });

            if (!response.ok) {
                throw new Error('Logout failed');
            }

            dispatch(logout());
        } catch (error) {
            console.error('Logout error:', error);
            throw error;
        }
    }
);