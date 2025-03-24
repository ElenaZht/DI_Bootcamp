import './App.css'
import Categories from './features/Categories'
import InputTask from './features/InputTask'
import TasksList from './features/TasksList'

function App() {

  return (
    <div className='container'>
      <h2>Productivity app</h2>
      
      <InputTask/>
      <Categories/>
      <TasksList/>
    </div>
  )
}

export default App
