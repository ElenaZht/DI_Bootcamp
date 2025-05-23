import { retryFailedRequest } from './authUtils';
// import { store } from "../features/store.ts"

export const authenticatedFetch = async (url: string, accessToken: string, options: RequestInit = {}) => {
    const { store } = await import('../features/store');
    try {
        
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
            }, store.dispatch);
        }

        return response;
    } catch (error) {
        console.error('Request failed:', error);
        throw error;
    }
};