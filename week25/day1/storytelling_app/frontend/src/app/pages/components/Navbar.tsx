import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import type { RootState, AppDispatch } from '../../../features/store'
import { logoutUser } from '../../../features/thunks/LogoutThunk'
import { setUser } from '../../../features/UserSlice'
import { useEffect } from 'react'
import { refreshToken } from '../../../features/thunks/RefreshToken'
import { getAllStories } from '../../../features/StoriesSlice'
import { getUserById } from '../../../features/thunks/GetUserByIdThunk'


export default function Navbar() {
    const isAuthenticated = useSelector((state: RootState) => state.user.isAuthenticated)
    const {currentUser} =useSelector((state: RootState) => state.user)
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await dispatch(logoutUser()).unwrap();
            dispatch(setUser(null));
            navigate('/login');

        } catch (error) {
            console.error('Logout failed:', error);
        }
    };  

    useEffect(() => {
        const tryRefreshToken = async () => {
          try {
            const result = await dispatch(refreshToken()).unwrap();
            console.log("tryRefreshToken:", result)
            if (result.user_id) {
                console.log("tryRefreshToken user:", result.user_id)
              const userData = await dispatch(getUserById(result.user_id)).unwrap();
              dispatch(setUser(userData));
             dispatch(getAllStories())
            }
          } catch (err) {
            console.error('Failed to refresh token:', err);
            navigate('/login')
          }
        };
        if (!isAuthenticated) tryRefreshToken();

      }, [dispatch, isAuthenticated]);

  return (
    <div className="navbar bg-base-100 shadow-sm z-[100]">
        <div className="flex-1">
            <Link to="/" className="btn btn-ghost text-xl">Storytelling <span>{currentUser?.username}</span></Link>
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
