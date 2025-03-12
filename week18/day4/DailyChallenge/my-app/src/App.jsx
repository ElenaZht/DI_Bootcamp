// Objective: Enhance the Task Manager application 
// by adding new features, including the ability 
// to edit tasks and filter tasks by completion 
// status, using useContext, useReducer, and useRef.
import { useReducer } from 'react'
import './App.css'
import TaskList from './components/TaskList'
import AddTask from './components/AddTask'
import TasksContext from './components/TasksContext'
import TasksReducer from './components/TaskReducer'

function App() {
  const initialState = {tasks: [
    {id: 0, text: 'buy milk', completed: false},
    {id: 1, text: 'cook dinner', completed: true},
    {id: 2, text: 'buy cheese', completed: false},
  ], filtered: []}
  const [tasks, dispatch] = useReducer(TasksReducer, initialState)

  return (
    <>
      <TasksContext value={{ tasks, dispatch }}>
        <h1>Task manager</h1>
        <div className='forms'>
          <AddTask/>
        </div>
        <hr />
        <TaskList/>
      </TasksContext>

    </>
  )
}

export default App
