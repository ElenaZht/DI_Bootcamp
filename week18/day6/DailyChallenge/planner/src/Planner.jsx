import React, { useEffect } from 'react'
import { useDispatch, useSelector} from 'react-redux';


export default function Planner() {
  const curDay = useSelector(state => state.currentDay)
  const curDayTasks = useSelector(state => state.tasks[curDay] || [])
  const dispatch = useDispatch()

  const toggleHandler = (id) => {
    dispatch({type: 'TOGGLE_TASK', payload : {id: id, day: curDay}})
  }

  const removeHandler = (id) => {
    dispatch({type: 'REMOVE_TASK', payload : {id: id, day: curDay}})
  }

  const addHandler = (e) => {
    e.preventDefault()
    if (e.target.newTaskText.value.length > 0){
      dispatch({type: 'ADD_TASK', payload : {text: e.target.newTaskText.value, day: curDay}})
    }
  }

  return (
    <div className='plannerContainer'>
      <h2>{curDay}</h2>
      <form onSubmit={(e) => addHandler(e)}>
        <input type="text" name='newTaskText' placeholder='describe task'/>
        <input type="submit" value="Add task" />
      </form>
      {curDayTasks.length === 0 && <p>no tasks for this day</p>}
      {curDayTasks && curDayTasks.length > 0 && (
        <div className='listContainer'>
          {curDayTasks.map((t) => {
            return <p className='task' key={t.id}>
              <input type="checkbox" onChange={() => toggleHandler(t.id)} checked={t.isDone}/>
              {t.text}
              <button onClick={() => removeHandler(t.id)} className='removeBtn'>x</button>
            </p>;
          })}
        </div>
      )}

    </div>
  )
}
