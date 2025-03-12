import React from 'react'
import { useState } from 'react'
import { useRef } from 'react'

export default function Counter() {

    const userInputRef = useRef()
    const [count, setCount] = useState(0)
    const inputHandler = () => {
        setCount(userInputRef.current.value.length)
    }

    return (
    <div>
        <h3>{count} characters</h3>
        <textarea onInput={inputHandler} ref={userInputRef} name="userInput" placeholder='enter your text'></textarea>
    </div>
)
}
