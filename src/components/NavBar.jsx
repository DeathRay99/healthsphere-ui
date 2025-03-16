"use client"

import React, { useState } from 'react'
import Link from 'next/link';
import { useRouter } from 'next/navigation';


function NavBar() {

const [isLoggedIn, setIsLoggedIn] = useState(false);
const router = useRouter();
const handleLogin = () => {
    router.push('/login');
  };

  const handleSignup = () => {
    router.push('/signup');
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    setUserData(null);
    setLatestMeasurements(null);
    setRecentActivities([]);
    setMealRecommendations([]);
  };
  return (
    <nav className="bg-blue-600 text-white shadow-lg">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <span className="text-xl font-bold">HeathSphere</span>
          </div>
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-blue-200">Home</Link>
            {isLoggedIn ? (
              <>
                <Link href="/dashboard" className="hover:text-blue-200">Dashboard</Link>
                <Link href="/nutrition" className="hover:text-blue-200">Nutrition</Link>
                <Link href="/fitness" className="hover:text-blue-200">Fitness</Link>
                <Link href="/profile" className="hover:text-blue-200">Profile</Link>
                <button onClick={handleLogout} className="hover:text-blue-200">Logout</button>
              </>
            ) : (
              <>
                <Link href="/features" className="hover:text-blue-200">Features</Link>
                <Link href="/about" className="hover:text-blue-200">About</Link>
                <button onClick={handleLogin} className="hover:text-blue-200">Login</button>
                <button onClick={handleSignup} className="bg-white text-blue-600 px-4 py-1 rounded-md hover:bg-blue-100">Sign Up</button>
              </>
            )}
          </div>
          <button className="md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
  )
}

export default NavBar