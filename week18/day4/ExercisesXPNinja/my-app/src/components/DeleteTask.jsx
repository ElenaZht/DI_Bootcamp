import React from 'react'
import { useContext, useState } from 'react'
import TasksContext from './TasksContext'

function DeleteTask({id}) {
    const {tasks, dispatch} = useContext(TasksContext)
    const deleteTask = () => {
        const taskIdx = tasks.findIndex(t => t.id === id)
        if (taskIdx !== -1){
            dispatch({type: "DELETE_TASK", payload: id})
        }
    }

    return (
    <>
        <button onClick={deleteTask}>x</button>
    </>
    )
}

export default DeleteTask