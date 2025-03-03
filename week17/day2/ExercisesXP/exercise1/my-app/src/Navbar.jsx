import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { NavLink } from "react-router"

export default function Navbar() {
  return (
    <div className="navbar">
        <nav>
            <NavLink className="btn btn-primary text-white" to="/">Home</NavLink>
            <NavLink className="btn btn-primary text-white" to="/profile">Profile</NavLink>
            <NavLink className="btn btn-primary text-white" to="/shop">Shop</NavLink>
        </nav>
    </div>
  )
}
