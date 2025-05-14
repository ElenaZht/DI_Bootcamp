import { createAsyncThunk } from "@reduxjs/toolkit";
import { authenticatedFetch } from '../../utils/apiClient';
import type { RootState } from "../store";
import type {Comment, AddCommentPayload} from '../../../../types/StoryTypes'


export const addComment = createAsyncThunk<
    Comment,
    AddCommentPayload,
    { getState: () => RootState; rejectValue: string }
>(
    'comments/add',
    async ({ story_id, content }, { getState, rejectWithValue }) => {
        try {
            const accessToken = getState().user.token;
            const response = await authenticatedFetch(
                `http://localhost:3001/api/stories/${story_id}/comments`, 
                accessToken, 
                {
                    method: 'POST',
                    body: JSON.stringify({ content })
                }
            );

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({ message: 'Failed to add comment' }));
                const errorMessage = errorData.errors ? errorData.errors[0].msg : errorData.message;
                throw new Error(errorMessage || 'Failed to add comment');
            }

            return await response.json() as Comment;

        } catch (error: any) {
            return rejectWithValue(error.message || 'An unknown error occurred');
        }
    }
);