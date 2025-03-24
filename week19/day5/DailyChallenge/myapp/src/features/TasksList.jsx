import React, { useCallback, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { deleteTask, completeTask } from './TasksSlice'
import EditTask from './EditTask'
import SetCategory from './SetCategory'
import { selectTasksByCategory, selectCompletedTasks } from '../redux/selectors'

export default function TasksList() {
    const [seeCompleted, setSeeCompleted] = useState(false)
    const currentCategoryId = useSelector(state => state.categoryReducer.currentCategory)
    const tasks = useSelector(state => {
        const selectTasks = selectTasksByCategory(currentCategoryId);
        const filteredTasks = currentCategoryId == '' ? state.tasksReducer.tasks : selectTasks(state);
        
        if (seeCompleted) {
            return selectCompletedTasks(state);
        }

        return filteredTasks;
    });
        
    const dispatch = useDispatch()
    
    const deleteThisTask = useCallback((taskID) => {
       dispatch(deleteTask({taskID})) 
    }, [dispatch])

    const toggleTask = useCallback((taskID) => {
        dispatch(completeTask({taskID}))
    }, [dispatch])


  return (
    <div className='taskList'>
        <SetCategory/>
        <div>
            <input onChange={() => setSeeCompleted(!seeCompleted)} type="checkbox" id="seeCompleted" checked={seeCompleted}/>
            <label>see compleded</label> 
        </div>

        {tasks && tasks.map(task => {
            return (
                <div className='task' style={{borderColor: task.color}} key={task.taskID}>
                    <input onChange={() => toggleTask(task.taskID)} type="checkbox" name="isCompleted" checked={task.isCompleted}/>
                    <p>{task.title}</p>
                    <button onClick={() => deleteThisTask(task.taskID)}>x</button>
                    <EditTask taskID={task.taskID}/>
                </div>
            )
        })}
        {tasks.length === 0 && <div>category is empty</div>}
    </div>
  )
}
