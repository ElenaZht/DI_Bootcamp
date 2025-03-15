import './App.css'
import TasksList from './components/TasksList'
import AddTask from './components/AddTask'

function App() {

  return (
    <div className='container'>
      <h1>To-Do's</h1>
      <AddTask/>
      <hr />
      <TasksList/>
      
    </div>
  )
}

export default App
