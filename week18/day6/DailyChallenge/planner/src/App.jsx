//! I use hooks instead connect as mentioned in exercise 
// because it is modern way to get data from the store
import './App.css'
import CalendarComponent from './CalendarComponent'
import Planner from './Planner'

function App() {

  return (
    <>
      <h1>My planner</h1>
      <div className='container'>
        <Planner/>
        <CalendarComponent/>
      </div>
      
    </>
  )
}

export default App
