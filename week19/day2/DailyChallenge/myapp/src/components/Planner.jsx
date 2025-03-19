import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import RemoveToDo from './RemoveToDo'
import EditToDo from './EditToDo'
import { toggle } from './taskSlice'
import AddToDo from './AddToDo'

export default function Planner() {
    const day = useSelector(state => state.day)
    const tasks = useSelector(state => state.tasks[day])
    
    const dispatch = useDispatch()
    
  return (
    <div className='plannerContainer'>
        <h2>Tasks</h2>
        <h4>{day}</h4>
        <AddToDo/>
        <div className="tasks">
           {tasks && tasks.map(task => {
            return (
                <div className='task' key={task.id}>
                    <input onChange={() => dispatch(toggle({id: task.id, day: day}))} type="checkbox" name="" checked={task.isDone}/>
                    <p>{task.text}</p>
                    <RemoveToDo id={task.id}/>
                    <EditToDo task={task}/>
                </div>
            )
        })}
        {!tasks && 
            <p>no tasks for this day</p>
        }
        </div>
        
    </div>
  )
}
