import { createAsyncThunk } from "@reduxjs/toolkit";
import { authenticatedFetch } from '../../utils/apiClient';
import {BASE_URL} from '../../utils/config'


export const deleteStory = createAsyncThunk(
    'story/delete',
    async (id: string, { getState, rejectWithValue }) => {
       try {
        const accessToken = getState().user.token;
        const response = await authenticatedFetch(`${BASE_URL}/api/stories/${id}`, accessToken, {
            method: 'DELETE',
        });

        if (!response.ok) {
            throw new Error('Failed to delete story');
        }
        return await response.json();

       } catch (error) {
            return rejectWithValue(error.message);
       } 
    }
)