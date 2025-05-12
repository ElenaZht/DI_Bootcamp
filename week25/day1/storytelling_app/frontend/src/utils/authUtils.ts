interface RequestConfig {
    url: string;
    method?: string;
    headers?: Record<string, string>;
    body?: string;
}

export const retryFailedRequest = async (originalRequest: RequestConfig) => {
    try {
        // Request a new access token
        const refreshResponse = await fetch('http://localhost:3001/api/user/refresh-token', {
            method: 'GET',
            credentials: 'include',
        });

        if (refreshResponse.ok) {
            const { accessToken } = await refreshResponse.json();

            // Update authorization header with new token
            const headers = {
                ...originalRequest.headers,
                'Authorization': `Bearer ${accessToken}`
            };

            // Retry the original request with new token
            const retryResponse = await fetch(originalRequest.url, {
                ...originalRequest,
                headers,
                credentials: 'include'
            });

            return retryResponse;
        } else {
            throw new Error('Unable to refresh access token.');
        }
    } catch (err) {
        console.error('Failed to retry request:', err);
        throw err;
    }
};