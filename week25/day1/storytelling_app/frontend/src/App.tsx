import './App.css'
import Navbar from './app/pages/components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './app/pages/HomePage'
import LogInPage from './app/pages/LogInPage'
import SignUpPage from './app/pages/SignUpPage'
import AccountPage from './app/pages/AccountPage'
import StoryViewer from './app/pages/StoryViewer'
import AddStory from './app/pages/components/AddStory'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from './features/store';
import { refreshToken } from './features/thunks/RefreshToken';
import { setUser } from './features/UserSlice'
import { getUserById } from './features/thunks/GetUserByIdThunk'
import { getAllStories } from './features/StoriesSlice'


function App() {
  // const dispatch = useDispatch<AppDispatch>();

  // useEffect(() => {
  //   const tryRefreshToken = async () => {
  //     try {
  //       const result = await dispatch(refreshToken()).unwrap();
  //       if (result.user_id) {
  //         const userData = await dispatch(getUserById(result.user_id)).unwrap();
  //         console.log("set user as", userData)
  //         dispatch(setUser(userData));
  //         dispatch(getAllStories())
  //       }
  //     } catch (err) {
  //       console.error('Failed to refresh token:', err);
        
  //     }
  //   };

  //   tryRefreshToken();
  // }, [dispatch]);
  
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
