import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import type { AppDispatch } from '../../features/store'
import { signUp } from '../../features/thunks/SignUpThunk'

interface SignUpForm {
  username: string;
  email: string;
  password: string;
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
        navigate('/account')

    } catch (err) {
        setError(typeof err === 'string' ? err : 'Registration failed');
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
  };

  return (
    <div className="flex flex-col items-center justify-start p-4">
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
      <form onSubmit={handleSubmit} className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Username</span>
            </label>
            <input
              type="text"
              name="username"
              placeholder="Enter username"
              className="input input-bordered w-full"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-control w-full">
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
            />
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Create password"
              className="input input-bordered w-full"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="card-actions justify-end mt-4">
            <button type="submit" className="btn btn-primary">Sign Up</button>
          </div>
          
          <div className="text-center mt-4">
            <span>Already have an account? </span>
            <Link to="/login" className="link link-primary">Login</Link>
          </div>
        </div>
      </form>
    </div>
  )
}