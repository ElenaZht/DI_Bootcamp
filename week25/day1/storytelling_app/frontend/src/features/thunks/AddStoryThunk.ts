import { createAsyncThunk } from "@reduxjs/toolkit";
import { authenticatedFetch } from '../../utils/apiClient';
import type {NewStory, Story} from '../../../../types/StoryTypes'
import type { RootState } from "../store";
import {BASE_URL} from '../../utils/config'

interface BackendValidationError {
    type: string;
    value?: string;
    msg: string;
    path: string;
    location: string;
}

interface BackendErrorPayload {
    message: string; 
    errors?: BackendValidationError[]; 
}


interface AddStorySuccessResponse {
    message: string;
    story: Story; 
}

export const addNewStory = createAsyncThunk<
    AddStorySuccessResponse,
    NewStory,
    { getState: () => RootState; rejectValue: BackendErrorPayload }
>(
    'stories/addNew',
    async (storyData: NewStory, { getState, rejectWithValue }) => {
        try {
            const accessToken = getState().user.token;
            const response = await authenticatedFetch(`${BASE_URL}/api/stories`, accessToken, {
                method: 'POST',
                body: JSON.stringify(storyData)
            });

            const responseData = await response.json()
            if (!response.ok) {
                return rejectWithValue(responseData as BackendErrorPayload);
            }
            

            return responseData as AddStorySuccessResponse;

        } catch (error: any) {
            return rejectWithValue({ message: error.message || 'An unexpected network error occurred while adding the story.' });
        }
    }
);