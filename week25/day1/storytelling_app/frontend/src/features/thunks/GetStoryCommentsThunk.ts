import { createAsyncThunk } from "@reduxjs/toolkit";
import { authenticatedFetch } from '../../utils/apiClient';


export const getStoryComments = createAsyncThunk(
    'stories/comments',
    async (story_id: string,{ getState, rejectWithValue }) => {
        try {
            const accessToken = getState().user.token;
            const response = await authenticatedFetch(`http://localhost:3001/api/stories/${story_id}/comments`, accessToken);
            
            if (!response.ok) {
                throw new Error('Failed to fetch comments.');
            }
            
            const data = await response.json();
            console.log("comments data", data)
            return data;

        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
);