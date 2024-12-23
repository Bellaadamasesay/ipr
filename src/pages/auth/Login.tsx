import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { handleSignIn } from '../../services/auth'
import {toast} from 'react-hot-toast'

export default function Login() {
  const location = useLocation();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  // const navigate = useNavigate()

  React.useEffect(() => {
    if (location.state && location.state.message) {
      toast.success(location.state.message);
    }
  }, [location.state]);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    try {
      await handleSignIn(email, password);
      console.log("Sign in successful");
      toast.success('Login successful!');
    } catch (err) {
      console.error("Sign in error:", err);
      toast.error(`Error: ${err instanceof Error ? err.message : 'An error occurred during sign in.'}`);
    }
  }

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Login</h2>
          {/* <Toaster /> */}
          {error && <p className="text-red-500 mt-2">{error}</p>}
          <form onSubmit={onSubmit} className="mt-8 space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
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
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign in
              </button>
            </div>
            <div className="text-center mt-6 font-medium text-gray-600 hover:text-gray-500">
              <span className="">Don't have an account? </span>
              <Link to="/auth/signup" className="text-indigo-600 hover:text-indigo-500">
                Sign Up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

