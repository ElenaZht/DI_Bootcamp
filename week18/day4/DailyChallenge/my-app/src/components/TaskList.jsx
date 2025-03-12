import React, { useContext, useEffect, useState } from 'react'
import TasksContext from './TasksContext'
import DeleteTask from './DeleteTask';


export default function TaskList() {

    const { tasks, dispatch } = useContext(TasksContext);    
    const [selectedButton, setSelectedButton] = useState(null);
    const [loading, setLoading] = useState(true)

    //filter tasks
    const handleClick = (buttonId) => {
        setSelectedButton(buttonId);
        dispatch({ type: "FILTER_TASKS", payload: buttonId });
    };
    //completed / incompleted for 1 task
    const handleCheckboxChange = (id) => {
        let toggledTaskIdx = tasks.tasks.findIndex(t => t.id === id)

        if (toggledTaskIdx !== -1){
            dispatch({ type: "TOGGLE_TASK", payload: id });
        }
    };

    //initially display all
    useEffect(() => {
        dispatch({ type: "FILTER_TASKS", payload: 'all' });
    }, [])
    useEffect(() => {
        setLoading(false)
    }, [tasks])

    return (
        <div className='taskContainer'>
            <h3>My tasks</h3>
            <div className='filterBtns'>
                <button onClick={() => handleClick('all')} className={selectedButton === 'all' ? 'clicked' : ''} id='allTasksBtn'>All</button>
                <button onClick={() => handleClick('completedTasksBtn')} className={selectedButton === 'completedTasksBtn' ? 'clicked' : ''} id='completedTasksBtn'>Completed</button>
                <button onClick={() => handleClick('incompletedTasksBtn')} className={selectedButton === 'incompletedTasksBtn' ? 'clicked' : ''} id='incompletedTasksBtn'>Incompleted</button>
            </div>
            {loading && <div>Loading...</div>}
            {tasks.tasks.length == 0 && <p>list is empty</p>}
            <div className='listWrap'>
                {(tasks.filtered && tasks.filtered.length > 0)&&
                    tasks.filtered.map((task, idx) => {
                        return (
                            <p key={idx}>
                                <input type="checkbox"
                                    name={task.id} 
                                    checked={task.completed ? true : false}
                                    onChange={() => handleCheckboxChange(task.id)}
                                />
                                <span style={{textDecoration: task.completed ? 'line-through' : ''}}>{task.text}</span>
                                <DeleteTask id={task.id}/>
                            </p>
                        )
                    })
                }
                {(tasks.filtered && tasks.filtered.length == 0 && !loading) &&
                    <p>no tasks was found</p>
                }

                {!tasks.filtered &&
                    tasks.tasks.map((task, idx) => {
                        return (
                            <p key={idx}>
                                <input type="checkbox"
                                    name={task.id} 
                                    checked={task.completed ? true : false}
                                    onChange={() => handleCheckboxChange(task.id)}
                                />
                                <span style={{textDecoration: task.completed ? 'line-through' : ''}}>{task.text}</span>
                                <DeleteTask id={task.id}/>
                            </p>
                        )
                    })
                }
            </div>

        </div>
    )
}
