import { createAsyncThunk } from "@reduxjs/toolkit";
import { authenticatedFetch } from '../../utils/apiClient';
import type { Contributor } from '../types';

export const getStoryContributors = createAsyncThunk(
    'stories/getContributors',
    async (storyId: string, { getState, rejectWithValue }) => {
        try {
            const accessToken = getState().user.token;
            const response = await authenticatedFetch(`http://localhost:3001/api/contributors/${storyId}`, accessToken);
            
            if (!response.ok) {
                throw new Error('Failed to fetch contributors');
            }
            
            const data = await response.json();
            // console.log("fetch contributors", data)
            return data.contributors as Contributor[];
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
);