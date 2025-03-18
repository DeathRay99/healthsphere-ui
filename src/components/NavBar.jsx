"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import useAuthStore from "@/app/store/authStore";
import Image from "next/image";

function NavBar() {
  const router = useRouter();
  const { isLoggedIn, logout, initializeAuth } = useAuthStore();

  useEffect(() => {
    initializeAuth(); // Restore login state on refresh
  }, []);

  const handleLogin = () => {
    router.push("/login");
  };

  const handleSignup = () => {
    router.push("/signup");
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-1 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/assets/logos/healthSphere-logo.png"
              height={100}
              width={200}
              alt="logo"
              className=" object-contain"
            />
          </Link>
        </div>
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="text-gray-700 hover:text-green-500">
            Home
          </Link>
          {isLoggedIn ? (
            <>
              <Link
                href="/goals"
                className="text-gray-700 hover:text-green-500"
              >
                My Goals
              </Link>
              <Link
                href="/nutrition"
                className="text-gray-700 hover:text-green-500"
              >
                Meals
              </Link>
              <Link
                href="/fitness"
                className="text-gray-700 hover:text-green-500"
              >
                Workouts
              </Link>
              <Link
                href="/profile"
                className="text-gray-700 hover:text-green-500"
              >
                Profile
              </Link>
              <Link
                href="/healthlogs"
                className="text-gray-700 hover:text-green-500"
              >
                Healthlogs
              </Link>
              <Link
                href="/consultants"
                className="text-gray-700 hover:text-green-500 hover:cursor-pointer"
              >
                Contact-Consultant
              </Link>
            </>
          ) : (
            <>
              <Link
                href="/features"
                className="text-gray-700 hover:text-green-500"
              >
                Features
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-green-500"
              >
                About
              </Link>
              <button
                onClick={handleLogin}
                className="text-gray-700 hover:text-green-500"
              >
                Login
              </button>
            </>
          )}
        </nav>
        {isLoggedIn ? (
          <div className="md:block">
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 transition-colors hover:cursor-pointer"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="md:block">
            <button
              onClick={handleSignup}
              className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition-colors hover:cursor-pointer"
            >
              Get Started
            </button>
          </div>
        )}
      </div>
    </header>
  );
}

export default NavBar;
