import { retryFailedRequest } from './authUtils';
// import { store } from '../features/store';



export const authenticatedFetch = async (url: string, accessToken: string, options: RequestInit = {}) => {
    try {
        // const accessToken = store.getState().user.token;
        // console.log("access token", accessToken);
        
        // Create headers with the JWT token
        const headers = {
            ...options.headers,
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
        };
        const response = await fetch(url, {
            ...options,
            headers
        });

        // If token expired (401), try to refresh and retry
        if (response.status === 401) {
            return retryFailedRequest({
                url,
                method: options.method || 'GET',
                headers: options.headers as Record<string, string>,
                body: options.body as string
            });
        }

        return response;
    } catch (error) {
        console.error('Request failed:', error);
        throw error;
    }
};

//* code for thunks
// - fetchStories (GET /api/stories)
// - addNewStory (POST /api/stories)
// - editStory (PATCH /api/stories/:id)
// - deleteStory (DELETE /api/stories/:id)

// - addContributor (POST /api/contributors)
// - getContributors (GET /api/contributors/:story_id)
// - deleteContributor (DELETE /api/contributors/:id)
// import { createAsyncThunk } from '@reduxjs/toolkit';
// import { authenticatedFetch } from '../../utils/apiClient';

// export const fetchUserStories = createAsyncThunk(
//     'stories/fetchUserStories',
//     async (_, { rejectWithValue }) => {
//         try {
//             const response = await authenticatedFetch('http://localhost:3001/api/stories');
//             if (!response.ok) {
//                 throw new Error('Failed to fetch stories');
//             }
//             return await response.json();
//         } catch (error: any) {
//             return rejectWithValue(error.message);
//         }
//     }
// );