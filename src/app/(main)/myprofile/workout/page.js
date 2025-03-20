"use client";
import React from 'react';
import Head from 'next/head';
import { 
  Bell, 
  ChevronDown, 
  User, 
  Utensils, 
  Target, 
  Users,
  Phone,
  Droplet,
  Activity,
  Moon
} from 'lucide-react';

export default function WorkoutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Today's Workout - HealthSphere</title>
        <meta name="description" content="Your personalized workout plan" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center">
            <div className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center text-white font-bold">
              h
            </div>
            <span className="ml-2 font-bold text-lg">
              <span>health</span>
              <span className="text-green-500">Sphere</span>
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <button className="relative">
              <Bell size={20} />
              <span className="absolute -top-1 -right-1 bg-red-500 rounded-full w-2 h-2"></span>
            </button>
            <div className="flex items-center cursor-pointer">
              <div className="text-right mr-2">
                <span className="flex items-center text-gray-700">
                  John Doe <ChevronDown size={16} className="ml-1" />
                </span>
              </div>
              <div className="bg-green-100 rounded-full p-1">
                <User size={20} className="text-green-600" />
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Sidebar */}
        <div className="md:col-span-1">
          <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
            <div className="flex flex-col items-center mb-4">
              <div className="bg-green-100 rounded-full p-6 mb-2">
                <User size={32} className="text-gray-600" />
              </div>
              <h2 className="text-xl font-bold">John Doe</h2>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '72%' }}></div>
              </div>
              <p className="text-sm text-gray-500 mt-1">72% of weekly goals completed</p>
            </div>

            <nav className="mt-6">
              <ul className="space-y-2">
                <li>
                  <button className="flex items-center w-full p-2 hover:bg-gray-50 rounded">
                    <User size={18} className="mr-3 text-gray-500" />
                    <span>Update Details</span>
                  </button>
                </li>
                <li>
                  <button className="flex items-center w-full p-2 hover:bg-gray-50 rounded">
                    <Utensils size={18} className="mr-3 text-gray-500" />
                    <span>Today's Menu</span>
                  </button>
                </li>
                <li>
                  <button className="flex items-center w-full p-2 hover:bg-gray-50 rounded">
                    <Target size={18} className="mr-3 text-gray-500" />
                    <span>Today's Goals</span>
                  </button>
                </li>
                <li>
                  <button className="flex items-center w-full p-2 bg-green-50 text-green-600 rounded">
                    <Users size={18} className="mr-3" />
                    <span>Workout With Us</span>
                  </button>
                </li>
                <li>
                  <button className="flex items-center w-full p-2 hover:bg-gray-50 rounded">
                    <Phone size={18} className="mr-3 text-gray-500" />
                    <span>Consult Specialists</span>
                  </button>
                </li>
              </ul>
            </nav>

            <div className="mt-6 bg-green-600 rounded-lg p-4 text-white">
              <h3 className="font-bold">Upgrade to Premium</h3>
              <p className="text-sm mt-1 text-green-100">
                Get advanced features and personalized coaching
              </p>
              <button className="mt-4 bg-white text-green-600 px-4 py-2 rounded-md text-sm font-medium">
                Go Premium
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="md:col-span-3">
          {/* Today's Workout Section */}
          <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
            <h2 className="text-xl font-bold mb-6">Today's Workout</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Upper Body Section */}
              <div>
                <h3 className="text-lg font-semibold mb-1">Upper Body Strength</h3>
                <p className="text-gray-600 text-sm mb-2">Focus on chest, shoulders, and arms</p>
                <div className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm mb-4">
                  4 sets
                </div>

                {/* Exercise Cards */}
                <div className="space-y-4">
                  {/* Push-ups */}
                  <div className="border rounded-lg p-4 flex justify-between items-center">
                    <div>
                      <h4 className="font-medium">Push-ups</h4>
                      <p className="text-gray-600 text-sm">15-20</p>
                    </div>
                    <button className="text-green-500 text-sm font-medium">Watch Demo</button>
                  </div>
                  
                  {/* Dumbbell Shoulder Press */}
                  <div className="border rounded-lg p-4 flex justify-between items-center">
                    <div>
                      <h4 className="font-medium">Dumbbell shoulder press</h4>
                      <p className="text-gray-600 text-sm">12-15</p>
                    </div>
                    <button className="text-green-500 text-sm font-medium">Watch Demo</button>
                  </div>
                  
                  {/* Tricep Dips */}
                  <div className="border rounded-lg p-4 flex justify-between items-center">
                    <div>
                      <h4 className="font-medium">Tricep dips</h4>
                      <p className="text-gray-600 text-sm">12-15</p>
                    </div>
                    <button className="text-green-500 text-sm font-medium">Watch Demo</button>
                  </div>
                  
                  {/* Bicep Curls */}
                  <div className="border rounded-lg p-4 flex justify-between items-center">
                    <div>
                      <h4 className="font-medium">Bicep curls</h4>
                      <p className="text-gray-600 text-sm">12-15 each arm</p>
                    </div>
                    <button className="text-green-500 text-sm font-medium">Watch Demo</button>
                  </div>
                </div>
                
                <button className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-md mt-4 font-medium">
                  Start Workout
                </button>
              </div>
              
              {/* Core Section */}
              <div>
                <h3 className="text-lg font-semibold mb-1">Core Burner</h3>
                <p className="text-gray-600 text-sm mb-2">Focus on abdominal and lower back</p>
                <div className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm mb-4">
                  3 sets
                </div>

                {/* Exercise Cards */}
                <div className="space-y-4">
                  {/* Plank */}
                  <div className="border rounded-lg p-4 flex justify-between items-center">
                    <div>
                      <h4 className="font-medium">Plank</h4>
                      <p className="text-gray-600 text-sm">30-60 seconds</p>
                    </div>
                    <button className="text-green-500 text-sm font-medium">Watch Demo</button>
                  </div>
                  
                  {/* Bicycle Crunches */}
                  <div className="border rounded-lg p-4 flex justify-between items-center">
                    <div>
                      <h4 className="font-medium">Bicycle crunches</h4>
                      <p className="text-gray-600 text-sm">20 each side</p>
                    </div>
                    <button className="text-green-500 text-sm font-medium">Watch Demo</button>
                  </div>
                  
                  {/* Russian Twists */}
                  <div className="border rounded-lg p-4 flex justify-between items-center">
                    <div>
                      <h4 className="font-medium">Russian twists</h4>
                      <p className="text-gray-600 text-sm">20 total</p>
                    </div>
                    <button className="text-green-500 text-sm font-medium">Watch Demo</button>
                  </div>
                  
                  {/* Leg Raises */}
                  <div className="border rounded-lg p-4 flex justify-between items-center">
                    <div>
                      <h4 className="font-medium">Leg raises</h4>
                      <p className="text-gray-600 text-sm">15-20</p>
                    </div>
                    <button className="text-green-500 text-sm font-medium">Watch Demo</button>
                  </div>
                </div>
                
                <button className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-md mt-4 font-medium">
                  Start Workout
                </button>
              </div>
            </div>
          </div>
          
          {/* Health Tips Section */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-bold mb-6">Health Insights & Tips</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Tip 1 */}
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex justify-center mb-4">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <Droplet size={24} className="text-blue-500" />
                  </div>
                </div>
                <h3 className="font-bold text-center mb-2">Stay Hydrated</h3>
                <p className="text-sm text-gray-600">
                  Drinking enough water is crucial for overall health. Aim for 8 glasses a day.
                </p>
              </div>
              
              {/* Tip 2 */}
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex justify-center mb-4">
                  <div className="bg-red-100 p-2 rounded-full">
                    <Activity size={24} className="text-red-500" />
                  </div>
                </div>
                <h3 className="font-bold text-center mb-2">Regular Exercise</h3>
                <p className="text-sm text-gray-600">
                  Even 30 minutes of moderate exercise daily can significantly improve your health.
                </p>
              </div>
              
              {/* Tip 3 */}
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex justify-center mb-4">
                  <div className="bg-purple-100 p-2 rounded-full">
                    <Moon size={24} className="text-purple-500" />
                  </div>
                </div>
                <h3 className="font-bold text-center mb-2">Sleep Well</h3>
                <p className="text-sm text-gray-600">
                  Quality sleep is essential for recovery and mental health. Aim for 7-8 hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}