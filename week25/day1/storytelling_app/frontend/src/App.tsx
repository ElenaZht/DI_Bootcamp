import './App.css'
import Navbar from './app/pages/components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './app/pages/HomePage'
import LogInPage from './app/pages/LogInPage'
import SignUpPage from './app/pages/SignUpPage'
import AccountPage from './app/pages/AccountPage'
import StoryViewer from './app/pages/StoryViewer'
import AddStory from './app/pages/components/AddStory'


function App() {

  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/login" element={<LogInPage />}  />
          <Route  path="/signup" element={<SignUpPage />}/>
          <Route  path="/account" element={<AccountPage />}/>
          <Route path="/story/:id" element={<StoryViewer/>}/>
          <Route path="/addstory" element={<AddStory/>}/>
        </Routes>
      </Router>
      
    </>
  )
}

export default App
