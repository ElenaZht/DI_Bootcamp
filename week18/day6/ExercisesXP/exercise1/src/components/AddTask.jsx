import React from 'react'
import { useRef } from 'react';
import { useDispatch} from 'react-redux';


export default function AddTask() {
    const inputRef = useRef()
    const dispatch = useDispatch();

    const handleInput = (e) => {
        e.preventDefault()
        if (inputRef.current.value.length > 0){
            dispatch({ type: 'ADD_TASK', payload:  inputRef.current.value})
        }
    }

    return (
        <div>
            <input ref={inputRef} type="text" name='text'/>
            <input type="button" value="add task" onClick={(e) => handleInput(e)}/>
        </div>
)
}
