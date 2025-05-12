import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import type { RootState, AppDispatch } from '../../../features/store'
import { logoutUser } from '../../../features/thunks/LogoutThunk'


export default function Navbar() {
    const isAuthenticated = useSelector((state: RootState) => state.user.isAuthenticated)
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await dispatch(logoutUser()).unwrap();
            navigate('/login');

        } catch (error) {
            console.error('Logout failed:', error);
        }
    };  

  return (
    <div className="navbar bg-base-100 shadow-sm z-[100]">
        <div className="flex-1">
            <Link to="/" className="btn btn-ghost text-xl">Storytelling</Link>
        </div>
        <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
            <li><Link to="/">Home</Link></li>
            {isAuthenticated && <li><Link to="/login"  onClick={handleLogout}>Log Out</Link></li>}
            {isAuthenticated && <li><Link to="/account">Account</Link></li>}
            {!isAuthenticated && <li>
                <details>
                <summary>Authentication</summary>
                    <ul className="bg-base-100 rounded-t-none p-2 z-100">
                        <li><Link to="/signup">Sign Up</Link></li>
                        <li><Link to="/login">Log In</Link></li>
                    </ul>
                </details>
            </li>}
            </ul>
        </div>
    </div>
  )
}
