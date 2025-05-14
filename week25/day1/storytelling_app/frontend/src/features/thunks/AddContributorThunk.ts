import { createAsyncThunk } from "@reduxjs/toolkit";
import { authenticatedFetch } from '../../utils/apiClient';
import {BASE_URL} from '../../utils/config'


export const addContributor = createAsyncThunk(
    'contributers/add',

    async (data, { getState, rejectWithValue }) => {
        try {
            const {user_id, story_id, user} = data
            console.log("data add contr", data)
            const accessToken = getState().user.token;
            const response = await authenticatedFetch(`${BASE_URL}/api/contributors`, accessToken, {
                method: 'POST',
                body: JSON.stringify(data)
            });
            if (!response.ok) {
                throw new Error('Failed to edit story');
            }

            return await response.json();

        } catch (error) {
            return rejectWithValue(error.message);
        }


    }
)