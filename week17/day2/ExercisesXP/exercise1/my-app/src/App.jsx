import './App.css'
import { Routes, Route, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './Navbar';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import ShopScreen from './ShopScreen';
import ErrorBoundary from './ErrorBoundary';


function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={
          <ErrorBoundary>
            <HomeScreen/>
          </ErrorBoundary>
          }/>
        <Route path="/profile" element={
          <ErrorBoundary>
            <ProfileScreen/>
          </ErrorBoundary>
          }/>
        <Route path="/shop" element={
          <ErrorBoundary>
            <ShopScreen/>
          </ErrorBoundary>
          }/>
      </Routes>
    </>
  )
}

export default App
