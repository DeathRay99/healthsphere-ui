"use client";
import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Footer from "./Footer";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import { Slideshow } from "./Slideshow";
import useAuthStore from "@/app/store/authStore";

export default function HomePage() {
  const { isLoggedIn } = useAuthStore();

  const router = useRouter();

  const words = [
    {
      text: "Your\u00A0 ",
    },
    {
      text: "Personal\u00A0 ",
    },
    {
      text: "Health\u00A0 ",
    },
    {
      text: "&\u00A0 ",
    },
    {
      text: "Fitness\u00A0 ",
    },
    {
      text: "Journey\u00A0 ",
    },
    {
      text: "Starts\u00A0 ",
    },
    {
      text: "Here.",
      className: "text-lime-400 dark:text-lime-400", // Vibrant contrast on green/teal background
    },
  ];

  // Check login status on component mount

  const handleLogin = () => {
    router.push("/login");
  };

  const handleSignup = () => {
    router.push("/signup");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <main>
        <section className="bg-gradient-to-r from-green-500 to-teal-600 text-white py-4">
          <div className="container mx-auto px-4 flex flex-col items-center text-center">
            <TypewriterEffectSmooth words={words} />
            <p className="text-xl mb-10 max-w-2xl">
              Track your nutrition, fitness activities, and health metrics with
              our AI-powered recommendations tailored just for you.
            </p>
            <div className="flex space-x-4">
              {!isLoggedIn && (
                <button
                  onClick={handleSignup}
                  className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition duration-300 hover:cursor-pointer"
                >
                  Get Started
                </button>
              )}
              <button
                onClick={() => router.push("/features")}
                className="border-2 hover:cursor-pointer border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition duration-300"
              >
                Learn More
              </button>
            </div>
          </div>
          <Slideshow />
        </section>

        {/* Features Section (for non-logged in users) */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
              Features Designed For Your Health Journey
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="bg-blue-100 text-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Nutrition Tracking
                </h3>
                <p className="text-gray-600">
                  Log your daily meals and get detailed nutritional insights to
                  help maintain a balanced diet.
                </p>
              </div>
              <div className="text-center p-6">
                <div className="bg-green-100 text-green-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Fitness Tracking</h3>
                <p className="text-gray-600">
                  Record your workouts, track progress, and see improvements in
                  your fitness journey over time.
                </p>
              </div>
              <div className="text-center p-6">
                <div className="bg-purple-100 text-purple-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  AI Recommendations
                </h3>
                <p className="text-gray-600">
                  Get personalized meal and workout suggestions based on your
                  goals and preferences.
                </p>
              </div>
            </div>
            {!isLoggedIn && (
              <div className="mt-12 text-center">
                <button
                  onClick={handleSignup}
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
                >
                  Start Your Journey Today
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
              What Our Users Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <span className="text-blue-600 font-bold text-xl">S</span>
                  </div>
                  <div>
                    <h4 className="font-bold">Sarah K.</h4>
                    <p className="text-gray-500 text-sm">
                      Lost 15kg in 6 months
                    </p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "The meal recommendations were spot on for my vegetarian diet.
                  I've never felt healthier and the weight loss has been steady
                  and sustainable."
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mr-4">
                    <span className="text-green-600 font-bold text-xl">M</span>
                  </div>
                  <div>
                    <h4 className="font-bold">Michael T.</h4>
                    <p className="text-gray-500 text-sm">Fitness enthusiast</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "As someone with specific fitness goals, this app has been
                  invaluable. The workout tracking and progression charts help
                  me stay motivated and see my improvements."
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mr-4">
                    <span className="text-purple-600 font-bold text-xl">J</span>
                  </div>
                  <div>
                    <h4 className="font-bold">Jessica L.</h4>
                    <p className="text-gray-500 text-sm">
                      Managing health conditions
                    </p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "The ability to track my medical conditions alongside my
                  nutrition has been life-changing. The app respects my dietary
                  restrictions and still offers delicious meal options."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        {!isLoggedIn && (
          <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Transform Your Health Journey?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Join thousands of users who are achieving their health and
                fitness goals with personalized tracking and AI recommendations.
              </p>
              <button
                onClick={handleSignup}
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition duration-300 mr-4"
              >
                Sign Up Free
              </button>
              <button
                onClick={handleLogin}
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-300"
              >
                Log In
              </button>
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
