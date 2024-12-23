import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { handleSignUp } from '../../services/auth'
import { toast } from 'react-hot-toast'

export default function SignUp() {
  const [fullname, setFullname] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const navigate = useNavigate()

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await handleSignUp(email, password, fullname, phone);
      toast.success('Account Created Successfully, Please check your email address');
      setTimeout(() => {
        navigate('/auth/login', { 
          state: { message: 'Account Created Successfully, Please check your email address' } 
        });
      }, 2000);
    } catch (err) {
      console.error("Sign up error:", err);
    }
  };


  return (
    <div className="bg-white py-12 sm:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Sign Up</h2>
          {error && <p className="text-red-500 mt-2">{error}</p>}
          <form onSubmit={onSubmit} className="mt-8 space-y-6">
            <div>
              <label htmlFor="fullname" className="block text-sm font-medium text-gray-700">
                Fullname
              </label>
              <input
                id="fullname"
                name="fullname"
                type="text"
                autoComplete="name"
                required
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Sign Up
              </button>
            </div>
            <div className="text-center mt-6 font-medium text-gray-600 hover:text-gray-500">
              <span className="">Already have an account? </span>
              <Link to="/auth/login" className="text-indigo-600 hover:text-indigo-500">
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}