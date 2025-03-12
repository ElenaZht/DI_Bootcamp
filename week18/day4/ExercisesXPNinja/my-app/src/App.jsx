import { useReducer } from 'react'
import './App.css'
import TaskList from './components/TaskList'
import AddTask from './components/AddTask'
import TasksContext from './components/TasksContext'
import TasksReducer from './components/TaskReducer'

function App() {
  const initialState = []
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
