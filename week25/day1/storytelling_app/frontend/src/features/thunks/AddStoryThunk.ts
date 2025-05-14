import { createAsyncThunk } from "@reduxjs/toolkit";
import { authenticatedFetch } from '../../utils/apiClient';
import type {NewStory} from '../../../../types/StoryTypes'



export const addNewStory = createAsyncThunk(
    'stories/addNew',
    async (storyData: NewStory, { getState, rejectWithValue }) => {
        try {
            const accessToken = getState().user.token;
            const response = await authenticatedFetch('http://localhost:3001/api/stories', accessToken, {
                method: 'POST',
                body: JSON.stringify(storyData)
            });

            if (!response.ok) {
                throw new Error('Failed to create story');
            }

            return await response.json();
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
);