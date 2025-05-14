import type { AppDispatch, RootState } from '../../../features/store';
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../../../features/thunks/LogoutThunk';
import { setUser } from '../../../features/UserSlice';


export default function UserData () {
    const { currentUser } = useSelector((state: RootState) => state.user);
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

    // useEffect(() => {
    //     console.log("cur user USERDATA", currentUser)
    // }, [currentUser])
  return (
    <>
        <div className="card card-side bg-base-100 shadow-sm w-fit h-fit m-4 flex flex-col gap-2">
            <figure className="w-48 m-4">
                <img
                className="object-cover h-48"
                src="https://images.ctfassets.net/lh3zuq09vnm2/yBDals8aU8RWtb0xLnPkI/19b391bda8f43e16e64d40b55561e5cd/How_tracking_user_behavior_on_your_website_can_improve_customer_experience.png"
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