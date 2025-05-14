import { createAsyncThunk } from "@reduxjs/toolkit";
import { authenticatedFetch } from '../../utils/apiClient';
import type { Contributor } from '../../../../types/ContributorTypes';
import {BASE_URL} from '../../utils/config'


export const getStoryContributors = createAsyncThunk(
    'stories/getContributors',
    async (storyId: string, { getState , rejectWithValue }) => {
        try {
            
            const accessToken: string = getState().user.token;
            const response = await authenticatedFetch(`${BASE_URL}/api/contributors/${storyId}`, accessToken);
            
            if (!response.ok) {
                throw new Error('Failed to fetch contributors');
            }
            
            const data = await response.json();
            return data.contributors as Contributor[];
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
);