import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import type { AppDispatch } from '../../features/store'
import { signUp } from '../../features/thunks/SignUpThunk'
import type {SignUpForm} from '../../../../types/UserTypes'
import { getAllStories } from '../../features/StoriesSlice'
interface BackendValidationError {
  type: string;
  value: string;
  msg: string;
  path: string;
  location: string;
}

interface BackendErrorPayload {
  message: string;
  errors?: BackendValidationError[]; // errors array is optional
}

export default function SignUpPage() {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate(); 
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<SignUpForm>({
    username: '',
    email: '',
    password: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
        await dispatch(signUp(formData)).unwrap();
        dispatch(getAllStories()); 
        
        setTimeout(() => {
          navigate('/');
      }, 1500); // 1.5 seconds delay

    } catch (err) {
      const backendError = err as BackendErrorPayload
      if (backendError.errors && backendError.errors.length > 0) {
        setError(backendError.errors[0].msg); 
    } else {
        setError(backendError.message || 'Registration failed. Please try again.');
    }
    } finally {
        setIsLoading(false);
      }

    console.log('Signup attempted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (error) setError(null);
  };

  return (
    <div className="flex flex-col items-center justify-center bg-base-200 p-4">
    <div className="card w-full max-w-md bg-base-100 shadow-xl">
        <div className="card-body">
        <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>

        {/* Error Message Alert */}
        {error && (
            <div role="alert" className="alert alert-error shadow-lg mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2 2m2-2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span>{error}</span> {/* This will now display the specific validation message */}
            </div>
        )}
        
        <form onSubmit={handleSubmit}>
            <div className="form-control w-full mb-4">
            <label className="label">
                <span className="label-text">Username</span>
            </label>
            <input
                type="text"
                name="username"
                placeholder="Choose a username"
                className="input input-bordered w-full"
                value={formData.username}
                onChange={handleChange}
                required
                disabled={isLoading}
            />
            </div>

            <div className="form-control w-full mb-4">
            <label className="label">
                <span className="label-text">Email</span>
            </label>
            <input
                type="email"
                name="email"
                placeholder="your.email@example.com"
                className="input input-bordered w-full"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={isLoading}
            />
            </div>

            <div className="form-control w-full mb-6">
            <label className="label">
                <span className="label-text">Password</span>
            </label>
            <input
                type="password"
                name="password"
                placeholder="Create a secure password"
                className="input input-bordered w-full"
                value={formData.password}
                onChange={handleChange}
                required
                disabled={isLoading}
            />
            </div>

            <div className="card-actions justify-center">
            <button type="submit" className="btn btn-primary w-full" disabled={isLoading}>
                {isLoading ? (
                <>
                    <span className="loading loading-spinner"></span>
                    Signing up...
                </>
                ) : (
                'Sign Up'
                )}
            </button>
            </div>
        </form>
        
        <div className="text-center mt-6">
            <span className="text-sm">Already have an account? </span>
            <Link to="/login" className="link link-primary text-sm">Login</Link>
        </div>
        </div>
    </div>
    </div>
  )
}