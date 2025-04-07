import React, { useState } from 'react'

//Create a new Counter.tsx component
// Implement state management for counter value
// Add increment and decrement functionality
// Track last action performed
// Add proper TypeScript types for all state variables

export default function Counter() {
    let [counter, setCounter] = useState<number>(0)

    const increment = (): void => {
        setCounter(counter + 1)
        console.log('increment performed')
    }
    const decrement = (): void => {
        setCounter(counter - 1)
        console.log('decrement performed')
    }

    return (
        <>
            <h2>Counter: {counter}</h2>
            <button onClick={increment}>+1</button>
            <button onClick={decrement}>-1</button>
        </>
)
}
