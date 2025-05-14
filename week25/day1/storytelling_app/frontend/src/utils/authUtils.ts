import { refreshToken } from "../features/thunks/RefreshToken";


interface RequestConfig {
    url: string;
    method?: string;
    headers?: Record<string, string>;
    body?: string;
}

export const retryFailedRequest = async (originalRequest: RequestConfig, dispatch: Function) => {
    try {
        const result = await dispatch(refreshToken()).unwrap();
         
            const headers = {
                ...originalRequest.headers,
                'Authorization': `Bearer ${result.accessToken}`
            };

            // Retry the original request with new token
            const retryResponse = await fetch(originalRequest.url, {
                ...originalRequest,
                headers,
                credentials: 'include'
            });

            return retryResponse;
    
    } catch (err) {
        console.error('Failed to retry request:', err);
        throw err;
    }
};