import { createAsyncThunk } from "@reduxjs/toolkit";
import { authenticatedFetch } from '../../utils/apiClient';
import type { RootState } from "../store"; // Assuming RootState is defined for getState

// Define the structure of the comment object returned by the backend
interface Comment {
  id: string;
  story_id: string;
  user_id: string;
  username?: string;
  content: string;
  created_at: string;
}

interface AddCommentPayload {
    story_id: string;
    content: string;
}

export const addComment = createAsyncThunk<
    Comment, // Expected return type on success (the new comment object)
    AddCommentPayload, // Type of the argument passed to the async function
    { getState: () => RootState; rejectValue: string } // ThunkAPI types
>(
    'comments/add',
    async ({ story_id, content }, { getState, rejectWithValue }) => {
        try {
            const accessToken = getState().user.token; // Ensure you have access to the token
            const response = await authenticatedFetch(
                `http://localhost:3001/api/stories/${story_id}/comments`, 
                accessToken, 
                {
                    method: 'POST',
                    body: JSON.stringify({ content }) // Only send content
                }
            );

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({ message: 'Failed to add comment' }));
                // Use errorData.errors if your backend sends structured validation errors
                const errorMessage = errorData.errors ? errorData.errors[0].msg : errorData.message;
                throw new Error(errorMessage || 'Failed to add comment');
            }

            return await response.json() as Comment; // Expect the new comment object in response

        } catch (error: any) {
            return rejectWithValue(error.message || 'An unknown error occurred');
        }
    }
);