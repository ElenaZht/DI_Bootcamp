import { createAsyncThunk } from "@reduxjs/toolkit";
import { authenticatedFetch } from '../../utils/apiClient';
import type { Story } from "../../../../types/StoryTypes";
import { useDispatch } from 'react-redux';
import {BASE_URL} from '../../utils/config'

const dispatch = useDispatch();

export const getAllStories = createAsyncThunk(
    'stories/getAll',
    async (_, { getState, rejectWithValue }) => {
        try {
            const accessToken = getState().user.token;
            const response = await authenticatedFetch(`${BASE_URL}/api/stories`,
                 accessToken, dispatch);
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