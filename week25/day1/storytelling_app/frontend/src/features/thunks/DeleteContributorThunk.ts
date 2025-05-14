import { createAsyncThunk } from "@reduxjs/toolkit";
import { authenticatedFetch } from '../../utils/apiClient';
import {BASE_URL} from '../../utils/config'


export const deleteContributor = createAsyncThunk(
    'contributors/delete',
    async (contributor_id, { getState, rejectWithValue }) => {
        try {
            const accessToken = getState().user.token;
            const response = await authenticatedFetch(`${BASE_URL}/api/contributors/${contributor_id}`, accessToken, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error('Failed to delete contributor');
            }
            return await response.json();

        } catch (error) {
            return rejectWithValue(error.message);
        }
    } 
)