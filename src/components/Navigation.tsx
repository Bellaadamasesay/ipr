import { useState, useEffect } from 'react';
import { NavigationItem } from '../types';
import { Link } from 'react-router-dom';
import { checkUserSession, handleSignOut } from '../services/auth';

const navigation: NavigationItem[] = [
  // { title: 'Home', href: '/' },
  { title: 'Register IPR', href: '/register' },
  { title: 'Track Status', href: '/track' },
  { title: 'Resources', href: '/resources' },
  { title: 'Contact', href: '/contact' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkSession = async () => {
      try {
        const user = await checkUserSession();
        setIsLoggedIn(!!user);
      } catch (error) {
        console.error('Error checking user session:', error);
      }
    };

    checkSession();
  }, []);

  return (
    <nav>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Hamburger Icon for Small Screens */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-black focus:outline-none"
            >
              {isOpen ? (
                // Close Icon
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  color='white'
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                // Menu Icons
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  color='white'
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Navigation Links for Large Screens */}
          <div className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.title}
                to={item.href}
                className="text-white text-base font-medium hover:text-black"
              >
                {item.title}
              </Link>
            ))}
          </div>

          <div className="">
            {isLoggedIn ? (
              <>
              <Link to="/admin" className="text-white text-base font-medium hover:text-black mx-4">
                Admin
              </Link>
              <Link to="/profile">
                <button className="px-8 py-4 bg-white hover:text-indigo-400 text-indigo-500 rounded-full ml-8 font-bold">Profile</button>
              </Link>
              <Link to="#" onClick={() => handleSignOut()}>
                <button className="px-8 py-4 bg-transparent hover:text-gray-200 border border-1 border-white text-white rounded-full ml-8 font-bold">Logout</button>
              </Link>
              </>
            ) : (
              <Link to="/auth/login">
                <button className="px-8 py-4 bg-white hover:text-indigo-400 text-indigo-500 rounded-full ml-8 font-bold">Login/Sign Up</button>
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Collapsed Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden px-4 py-4 space-y-3">
          {navigation.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="block text-white text-base font-medium hover:text-black ml-2"
            >
              {item.title}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
