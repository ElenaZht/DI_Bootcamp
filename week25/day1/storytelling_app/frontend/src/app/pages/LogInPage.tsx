import React, { useState } from 'react'
import { Link } from 'react-router-dom'

interface LoginForm {
  email: string;
  password: string;
}

export default function LogInPage() {
  const [formData, setFormData] = useState<LoginForm>({
    email: '',
    password: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="flex flex-col items-center justify-start p-4">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form onSubmit={handleSubmit} className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
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
              placeholder="Enter your password"
              className="input input-bordered w-full"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="card-actions justify-end mt-4">
            <button type="submit" className="btn btn-primary">Login</button>
          </div>
          
          <div className="text-center mt-4">
            <span>Don't have an account? </span>
            <Link to='/signup' className="link link-primary">Sign up</Link>
          </div>
        </div>
      </form>
    </div>
  )
}