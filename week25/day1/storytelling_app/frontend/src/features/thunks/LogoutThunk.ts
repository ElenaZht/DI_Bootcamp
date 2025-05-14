import { createAsyncThunk } from "@reduxjs/toolkit";
import { logout } from "../UserSlice";
import {BASE_URL} from '../../utils/config'


export const logoutUser = createAsyncThunk(
    'user/logout',
    async (_, { dispatch }) => {
        try {
            const response = await fetch(`${BASE_URL}/api/user/logout`, {
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