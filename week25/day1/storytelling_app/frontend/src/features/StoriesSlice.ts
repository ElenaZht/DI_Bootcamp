import { createSlice } from "@reduxjs/toolkit";
import type {Story, StoriesState} from './types'


const initialState: StoriesState = {
    items: [],
    status: 'idle',
    error: null,
    selectedStory: null
};

export const storiesSlice = createSlice({
    name: 'stories',
    initialState,
    reducers: {

    }
})

export const {
    
} = storiesSlice.caseReducers
export default storiesSlice.reducer