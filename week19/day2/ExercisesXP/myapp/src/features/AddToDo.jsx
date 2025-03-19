import React from 'react'
import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { add } from './ToDoSlice'

export default function AddToDo() {
    const inputRef = useRef()
    const dispatch = useDispatch()
  return (
    <div>
        <input ref={inputRef} type="text" placeholder='description'/>
        <input onClick={() => dispatch(add(inputRef.current.value))} type="button" value="add todo" />
    </div>
  )
}
