import { createSlice } from "@reduxjs/toolkit";
import type {Story, StoriesState} from '../../../types/StoryTypes'
import { createAsyncThunk } from "@reduxjs/toolkit";
import { authenticatedFetch } from '../utils/apiClient';
import { addNewStory } from './thunks/AddStoryThunk';


export const getAllStories = createAsyncThunk(
    'stories/getAll',
    async (_, { getState, rejectWithValue }) => {
        try {
            const accessToken = getState().user.token;
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

const initialState: StoriesState = {
    items: [],
    status: 'idle',
    error: null,
    selectedStory: null
};

export const storiesSlice = createSlice({
    name: 'stories',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // get all
        builder
            .addCase(getAllStories.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(getAllStories.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = action.payload;
                state.error = null;
            })
            .addCase(getAllStories.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload as string;
            });

        // add new story
        builder
            .addCase(addNewStory.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(addNewStory.fulfilled, (state) => {
                state.status = 'succeeded';
                state.status = 'idle';
            })
            .addCase(addNewStory.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload as string;
            });
    }
})

export const {
    
} = storiesSlice.caseReducers
export default storiesSlice.reducer