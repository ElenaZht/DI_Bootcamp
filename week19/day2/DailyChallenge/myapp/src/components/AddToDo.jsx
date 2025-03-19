import React, { useRef } from 'react'
import { add } from './taskSlice'
import { useDispatch, useSelector } from 'react-redux'

export default function AddToDo() {
    const day = useSelector(state => state.day)
    const inputRef = useRef()
    const dispatch = useDispatch()
    const addTask = () => {
        if (inputRef.current.value.trim().length === 0) return
        dispatch(add({day, text: inputRef.current.value.trim()}))
    }
  return (
    <>
        <input ref={inputRef} type="text" placeholder='enter new task'/>
        <input onClick={addTask} type="button" value="Add" />
    </>
  )
}
