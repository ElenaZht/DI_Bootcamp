import { createAsyncThunk } from "@reduxjs/toolkit";
import { authenticatedFetch } from '../../utils/apiClient';


export const deleteContributor = createAsyncThunk(
    'contributors/delete',
    async (contributor_id, { getState, rejectWithValue }) => {
        try {
            const accessToken = getState().user.token;
            const response = await authenticatedFetch(`http://localhost:3001/api/contributors/${contributor_id}`, accessToken, {
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