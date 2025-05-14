import { createAsyncThunk } from "@reduxjs/toolkit";
import { authenticatedFetch } from '../../utils/apiClient';


interface Story {
    title: string;
    content: string;
}

export const editStory = createAsyncThunk(
    'stories/edit',
    // async (story_id: string, storyData: Story, { getState, rejectWithValue }) => {
    async (data, { getState, rejectWithValue }) => {
    try {
            const story_id = data.id
            const storyData = data.story
            console.log("edit story_id", story_id)
            const accessToken = getState().user.token;
            const response = await authenticatedFetch(`http://localhost:3001/api/stories/${story_id}`, accessToken, {
                method: 'PATCH',
                body: JSON.stringify(storyData)
            });

            if (!response.ok) {
                throw new Error('Failed to edit story');
            }

            return await response.json();

        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
);