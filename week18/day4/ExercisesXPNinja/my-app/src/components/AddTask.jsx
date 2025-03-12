import React, { useState } from 'react'
import { useContext, useRef } from 'react'
import TasksContext from './TasksContext'
import TasksReducer from './TaskReducer'

function AddTask() {
    const {tasks, dispatch} = useContext(TasksContext)
    const [msg, setMsg] = useState('')
    const inputRef = useRef()

    const handleSubmit = (e) => {
        e.preventDefault()
        if (inputRef.current.value.length  <= 0){
            setMsg('task must contain at leest 4 letters')
            return
        }
        const tasksLengthBefore = tasks.length
        dispatch({ type: "ADD_TASK", payload: inputRef.current.value });
        // setTasks([
        //     ...tasks,
        //     {
        //         id: `${new Date().getHours()}${new Date().getMinutes()}${new Date().getSeconds()}`, 
        //         text: inputRef.current.value, 
        //         completed: false}
        // ])
        const tasksLengthAfter = tasks.length
        if (tasksLengthAfter > tasksLengthBefore){
            setMsg('added successfuly')
        }
    }

    return (
    <div className='inputContainer'>
        <input ref={inputRef}  onInput={() => setMsg('')} type="text" placeholder='enter a task'/>
        <input onClick={handleSubmit} type="button" value="Add task" />
        <p className='message'>{msg}</p>
    </div>
    )
}
export default AddTask
