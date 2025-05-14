import { createAsyncThunk } from "@reduxjs/toolkit";
import { authenticatedFetch } from '../../utils/apiClient';
import type { Story } from "../../../../types/StoryTypes";


export const getAllStories = createAsyncThunk(
    'stories/getAll',
    async (_, { getState, rejectWithValue }) => {
        try {
            const accessToken = getState().user.token;
            console.log("getAllStories accessToken:",accessToken);
            const response = await authenticatedFetch('http://localhost:3001/api/stories', accessToken);
            if (!response.ok) {
                throw new Error('Failed to fetch stories');
            }
            const data: Story[] = await response.json();
            return data;
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
);