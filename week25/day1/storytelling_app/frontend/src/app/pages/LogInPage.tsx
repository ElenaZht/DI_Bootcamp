import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { loginUser } from '../../features/thunks/LoginThunk'
import type { AppDispatch } from '../../features/store'
import { setUser } from '../../features/UserSlice'
import type {LoginForm, LoginError} from '../../../../types/UserTypes'


export default function LogInPage() {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState<string | null>(null); // Added for success messages

    const [formData, setFormData] = useState<LoginForm>({
        email: '',
        password: ''
    });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuccessMessage(null);
    try {
        const response = await dispatch(loginUser(formData)).unwrap();
        // await dispatch(setUser(response.user));
        setSuccessMessage('Login successful! Redirecting...');
        setTimeout(() => {
          navigate('/');
      }, 1500); // 1.5 seconds delay

    } catch (err) {
        const errorPayload = err as LoginError;
        setError(errorPayload.message || 'Login failed. Please check your credentials.');    
    
      } finally {
        setIsLoading(false);

    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (error) setError(null);
    if (successMessage) setSuccessMessage(null);
  };

  return (
    <div className="flex flex-col items-center justify-center bg-base-200 p-4">
      <div className="card w-full max-w-md bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

          {/* Error Message Alert */}
          {error && (
            <div role="alert" className="alert alert-error shadow-lg mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2 2m2-2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span>{error}</span>
            </div>
          )}

          {/* Success Message Alert */}
          {successMessage && (
            <div role="alert" className="alert alert-success shadow-lg mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span>{successMessage}</span>
            </div>
          )}
          
          <form onSubmit={handleSubmit}>
            <div className="form-control w-full mb-4">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email@example.com"
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
                placeholder="Enter your password"
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
                    Logging in...
                  </>
                ) : (
                  'Login'
                )}
              </button>
            </div>
          </form>
          
          <div className="text-center mt-6">
            <span className="text-sm">Don't have an account? </span>
            <Link to='/signup' className="link link-primary text-sm">Sign up</Link>
          </div>
        </div>
      </div>
    </div>
  )
}