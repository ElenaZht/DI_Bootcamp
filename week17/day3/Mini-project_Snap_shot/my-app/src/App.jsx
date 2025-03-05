import './App.css'
import { CiSearch } from "react-icons/ci";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Galary from './Galary'
import { useState } from 'react';


function App() {
  const apiKey = import.meta.env.VITE_API_KEY;
  const [topic, setTopic] = useState('mountain')
  const navigate = useNavigate();


  return (
    <>
      <h1>SnapShot</h1>
      <form onSubmit={(e) => {
          e.preventDefault()
          setTopic(e.target.searchInput.value)
          navigate('/search')
        }}>
        <input type="text" name="searchInput" placeholder='Search...'/>
        <button type="submit" ><CiSearch /></button>
      </form>
      <div className='navContainer'>
        <Link className="navButton" to="/mountain">Mountain</Link>
        <Link className="navButton" to="/beaches">Beaches</Link>
        <Link className="navButton" to="/birds">Birds</Link>
        <Link className="navButton" to="/food">Food</Link>
      </div>
      <Routes>
        <Route path="/mountain" element={<Galary topic='mountain'/>}/>
        <Route path="/beaches" element={<Galary topic='beaches'/>}/>
        <Route path="/birds" element={<Galary topic='birds'/>}/>
        <Route path="/food" element={<Galary topic='food'/>}/>
        <Route path="/search" element={<Galary topic={topic}/>}/>
      </Routes>
    </>
  )
}

export default App