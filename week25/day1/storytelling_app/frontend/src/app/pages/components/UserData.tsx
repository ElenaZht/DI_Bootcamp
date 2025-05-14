import type { AppDispatch, RootState } from '../../../features/store';
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../../../features/thunks/LogoutThunk';
import { setUser } from '../../../features/UserSlice';


export default function UserData () {
    const { currentUser, isAuthenticated, status  } = useSelector((state: RootState) => state.user);
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
        console.log("userdata user", currentUser)

    }, [currentUser])
    
    if (status === 'loading') {
        return (
            <div className="card card-side bg-base-100 shadow-sm w-fit h-fit m-4">
                <div className="card-body items-center justify-center">
                    <p>Loading user data...</p>
                    <span className="loading loading-dots loading-md"></span>
                </div>
            </div>
        );
    }

    if (!isAuthenticated || !currentUser) {
        // This message will show if AccountPage renders UserData before currentUser is available
        // or if the user is genuinely not authenticated.
        console.log('UserData: currentUser not available or not authenticated. IsAuth:', isAuthenticated, 'User:', currentUser);
        return (
            <div className="card card-side bg-base-100 shadow-sm w-fit h-fit m-4">
                <div className="card-body items-center justify-center">
                    <p>Verifying user session...</p> 
                    <span className="loading loading-spinner loading-sm"></span>
                </div>
            </div>
        );
    }
  return (
    <>
        <div className="card card-side bg-base-100 shadow-sm w-fit h-fit m-4 flex flex-col gap-2">
            <figure className="w-48 m-4">
                <img
                className="object-cover h-48"
                src="https://img.freepik.com/premium-vector/avatar-person-cartoon-style-cartoon-design-mans-avatar_198565-9436.jpg"
                alt="User photo" />
            </figure>
            <div className="card-body flex flex-col gap-2">
                <h2 className="card-title text-left">{currentUser?.username}</h2>
                <p className='text-left'>{currentUser?.email}</p>
                <div className="card-actions">
                    <button className="btn btn-primary"
                    onClick={handleLogout}>Change user</button>
                </div>
            </div>
        </div>
    </>
  )
}