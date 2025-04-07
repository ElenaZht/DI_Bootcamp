import React from 'react'

//Create a new UserCard.tsx component
// Define interface with optional name, age, and role props
// Implement default values for optional props
// Test component with various prop combinations

interface User{
    name?: string,
    age?: number,
    role?: string
}

export default function UserCard({name='user1', age=18, role='user'}: User) {
  return (
    <>
        <div className="card">
            <h3>{name}</h3>
            <p>age: {age}</p>
            <p>role: {role}</p>
        </div>
    </>
  )
}
