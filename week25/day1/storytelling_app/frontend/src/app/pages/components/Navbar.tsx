import { Link } from 'react-router-dom'


export default function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-sm">
  <div className="flex-1">
    <Link to="/" className="btn btn-ghost text-xl">Storytelling</Link>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/login">Log Out</Link></li>
      <li><Link to="/account">Account</Link></li>
      <li>
        <details>
          <summary>Authentication</summary>
          <ul className="bg-base-100 rounded-t-none p-2">
            <li><Link to="/signup">Sign Up</Link></li>
            <li><Link to="/login">Log In</Link></li>
          </ul>
        </details>
      </li>
    </ul>
  </div>
</div>
  )
}
