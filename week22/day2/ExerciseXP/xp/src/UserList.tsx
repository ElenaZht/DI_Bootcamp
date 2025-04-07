import React, { useEffect, useState } from 'react'

// Create a new UserList.tsx component
// Define User interface for API data
// Implement loading and error states
// Fetch and display user data from the API https://jsonplaceholder.typicode.com/users. 
// Use the useEffect hook to fetch data from the API when the component mounts.
// Handle potential errors properly
// Display the fetched data in the component

interface UserFromAPI{
    id: number,
    name: string,
    city: string
}

export default function UserList() {

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [users, setUsers] = useState<UserFromAPI[]>([])

    const fetchUsers = async (url: string): Promise<UserFromAPI[]> => {
        try {
            const res = await fetch(url);
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            const data = await res.json();
            return data;

        } catch (error) {
            throw new Error(error instanceof Error ? error.message : 'Unknown error occurred');
        }
    };

    useEffect(() => {
        setLoading(true) // torn on loading

        fetchUsers('https://jsonplaceholder.typicode.com/users')
        .then(data => {
            data ? setUsers(data) : setError('no users')
            setLoading(false) // torn of loading
            })
        .catch(error => {
            setError(error.message)
            setLoading(false) // torn of loading
        })
        

    }, [])

  return (
    <div>
        <h1>user list:</h1>
        {loading && <div>Loading...</div>}
        {error && <div>error: {error}</div>}
        {users && 
            users.map(user => {
                return <div key={user.id}>
                    {user.name && <h2>{user.name}</h2>}
                    {!user.name && <h2>default name</h2>}

                    {user.id && <p>{user.id}</p>}
                    {!user.id && <p>some id</p>}

                    {user.city && <small>{user.city}</small>}
                    {!user.city && <small>some city</small>}
                    
                </div>
            })
        }

        {(!users || !users.length) && !loading && <div>Users not found</div>}
    </div>
  )
}
