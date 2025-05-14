// import { useState, useEffect } from 'react';
// import { authenticatedFetch } from '../utils/apiClient';
// import { useSelector } from 'react-redux';

// export const useUsername = (userId: string) => {
//     const [username, setUsername] = useState<string>('');
//     const [isLoading, setIsLoading] = useState(true);
//     const [error, setError] = useState<string | null>(null);

//     useEffect(() => {
//         const fetchUsername = async () => {
//             try {
//                 const accessToken = useSelector((state: any) => state.user.token);
//                 if (!accessToken) {
//                     throw new Error('Access token not found');
//                 }
//                 const response = await authenticatedFetch(`http://localhost:3001/api/user/${userId}`, accessToken);
//                 if (!response.ok) {
//                     throw new Error('Failed to fetch username');
//                 }
//                 const data = await response.json();
//                 setUsername(data.username);
//             } catch (err) {
//                 setError(err instanceof Error ? err.message : 'Error fetching username');
//             } finally {
//                 setIsLoading(false);
//             }
//         };

//         if (userId) {
//             fetchUsername();
//         }
//     }, [userId]);

//     return { username, isLoading, error };
// };