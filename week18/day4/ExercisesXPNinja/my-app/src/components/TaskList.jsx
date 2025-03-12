import React, { useContext } from 'react'
import TasksContext from './TasksContext'
import DeleteTask from './DeleteTask';


export default function TaskList() {

    const { tasks, dispatch } = useContext(TasksContext);
    

    const handleCheckboxChange = (id) => {
        let toggledTaskIdx = tasks.findIndex(t => t.id === id)

        if (toggledTaskIdx !== -1){
            dispatch({ type: "TOGGLE_TASK", payload: id });
        }
        

    };
    return (
        <div className='taskContainer'>
            <h3>My tasks</h3>
            {tasks.length == 0 && <p>list is empty</p>}
            <div className='listWrap'>
                {tasks && tasks.map((task, idx) => {
                    return <p key={idx}>
                        <input type="checkbox"
                        name={task.id} 
                        checked={task.completed ? true : false}
                        onChange={() => handleCheckboxChange(task.id)}
                        />
                        <span style={{textDecoration: task.completed ? 'line-through' : ''}}>{task.text}</span>
                        <DeleteTask id={task.id}/>
                    </p>
                })}  
            </div>

        </div>
    )
}
