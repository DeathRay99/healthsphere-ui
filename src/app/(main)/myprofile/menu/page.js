"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { 
  Bell, 
  User, 
  ChevronDown, 
  UserCircle, 
  Menu, 
  Goal, 
  Users, 
  Phone,
  Droplet,
  Activity,
  Moon
} from 'lucide-react';

export default function Home() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm py-3 px-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="bg-green-500 rounded-full h-8 w-8 flex items-center justify-center text-white font-bold">
            h
          </div>
          <span className="ml-1 font-bold text-xl">
            <span className="text-black">health</span>
            <span className="text-green-500">Sphere</span>
          </span>
        </div>
        
        <div className="flex items-center">
          <button className="relative mr-4">
            <Bell size={20} />
            <span className="absolute -top-1 -right-1 bg-red-500 rounded-full w-2 h-2"></span>
          </button>
          
          <div className="relative">
            <button 
              className="flex items-center" 
              onClick={toggleDropdown}
            >
              <User size={20} className="text-green-500 mr-2" />
              <span className="mr-1">John Doe</span>
              <ChevronDown size={16} />
            </button>
            
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Edit Profile</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Refer Friends</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Leaderboard</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Contact Us</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sign Out</a>
              </div>
            )}
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <div className="w-60 bg-white shadow-md p-4">
          <div className="flex flex-col items-center mb-6">
            <div className="bg-green-100 rounded-full h-20 w-20 flex items-center justify-center">
              <UserCircle size={50} className="text-green-600" />
            </div>
            <h2 className="mt-2 font-semibold text-lg">John Doe</h2>
            <div className="text-sm text-gray-500">
              <div className="flex items-center justify-center mt-1">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '72%' }}></div>
                </div>
              </div>
              <span className="text-xs">72% of weekly goals completed</span>
            </div>
          </div>

          <div className="space-y-2">
            <a href="#" className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded">
              <User size={18} className="mr-3" />
              <span>Update Details</span>
            </a>
            <a href="#" className="flex items-center p-2 text-white bg-green-500 hover:bg-green-600 rounded">
              <Menu size={18} className="mr-3" />
              <span>Today's Menu</span>
            </a>
            <a href="#" className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded">
              <Goal size={18} className="mr-3" />
              <span>Today's Goals</span>
            </a>
            <a href="#" className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded">
              <Users size={18} className="mr-3" />
              <span>Workout With Us</span>
            </a>
            <a href="#" className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded">
              <Phone size={18} className="mr-3" />
              <span>Consult Specialists</span>
            </a>
          </div>

          <div className="mt-8 bg-green-500 rounded-lg p-4 text-white">
            <h3 className="font-semibold">Upgrade to Premium</h3>
            <p className="text-sm mt-1">Get advanced features and personalized coaching</p>
            <button className="mt-3 bg-white text-green-500 px-3 py-1 rounded text-sm font-medium">
              Go Premium
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          <h1 className="text-2xl font-bold mb-6">Today's Meal Plan</h1>
          
          {/* Breakfast Section */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Breakfast</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white rounded-lg shadow p-4 flex justify-between items-center">
                <div>
                  <h3 className="font-medium">Oatmeal with fruits</h3>
                  <div className="text-sm text-gray-500 mt-1 flex space-x-4">
                    <span>320 cal</span>
                    <span>12g protein</span>
                    <span>45g carbs</span>
                    <span>8g fat</span>
                  </div>
                </div>
                <button className="text-green-500 text-sm font-medium">Select</button>
              </div>
              
              <div className="bg-white rounded-lg shadow p-4 flex justify-between items-center">
                <div>
                  <h3 className="font-medium">Greek yogurt with honey</h3>
                  <div className="text-sm text-gray-500 mt-1 flex space-x-4">
                    <span>240 cal</span>
                    <span>15g protein</span>
                    <span>30g carbs</span>
                    <span>5g fat</span>
                  </div>
                </div>
                <button className="text-green-500 text-sm font-medium">Select</button>
              </div>
              
              <div className="bg-white rounded-lg shadow p-4 flex justify-between items-center">
                <div>
                  <h3 className="font-medium">Whole grain toast with avocado</h3>
                  <div className="text-sm text-gray-500 mt-1 flex space-x-4">
                    <span>280 cal</span>
                    <span>8g protein</span>
                    <span>28g carbs</span>
                    <span>16g fat</span>
                  </div>
                </div>
                <button className="text-green-500 text-sm font-medium">Select</button>
              </div>
            </div>
          </div>
          
          {/* Lunch Section */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Lunch</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white rounded-lg shadow p-4 flex justify-between items-center">
                <div>
                  <h3 className="font-medium">Grilled chicken salad</h3>
                  <div className="text-sm text-gray-500 mt-1 flex space-x-4">
                    <span>380 cal</span>
                    <span>35g protein</span>
                    <span>18g carbs</span>
                    <span>12g fat</span>
                  </div>
                </div>
                <button className="text-green-500 text-sm font-medium">Select</button>
              </div>
              
              <div className="bg-white rounded-lg shadow p-4 flex justify-between items-center">
                <div>
                  <h3 className="font-medium">Quinoa bowl with vegetables</h3>
                  <div className="text-sm text-gray-500 mt-1 flex space-x-4">
                    <span>350 cal</span>
                    <span>12g protein</span>
                    <span>48g carbs</span>
                    <span>10g fat</span>
                  </div>
                </div>
                <button className="text-green-500 text-sm font-medium">Select</button>
              </div>
              
              <div className="bg-white rounded-lg shadow p-4 flex justify-between items-center">
                <div>
                  <h3 className="font-medium">Turkey wrap with whole wheat</h3>
                  <div className="text-sm text-gray-500 mt-1 flex space-x-4">
                    <span>410 cal</span>
                    <span>28g protein</span>
                    <span>40g carbs</span>
                    <span>14g fat</span>
                  </div>
                </div>
                <button className="text-green-500 text-sm font-medium">Select</button>
              </div>
            </div>
          </div>
          
          {/* Dinner Section */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Dinner</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white rounded-lg shadow p-4 flex justify-between items-center">
                <div>
                  <h3 className="font-medium">Baked salmon with vegetables</h3>
                  <div className="text-sm text-gray-500 mt-1 flex space-x-4">
                    <span>420 cal</span>
                    <span>38g protein</span>
                    <span>12g carbs</span>
                    <span>22g fat</span>
                  </div>
                </div>
                <button className="text-green-500 text-sm font-medium">Select</button>
              </div>
              
              <div className="bg-white rounded-lg shadow p-4 flex justify-between items-center">
                <div>
                  <h3 className="font-medium">Vegetable stir fry with tofu</h3>
                  <div className="text-sm text-gray-500 mt-1 flex space-x-4">
                    <span>310 cal</span>
                    <span>18g protein</span>
                    <span>30g carbs</span>
                    <span>12g fat</span>
                  </div>
                </div>
                <button className="text-green-500 text-sm font-medium">Select</button>
              </div>
              
              <div className="bg-white rounded-lg shadow p-4 flex justify-between items-center">
                <div>
                  <h3 className="font-medium">Lentil soup with whole grain bread</h3>
                  <div className="text-sm text-gray-500 mt-1 flex space-x-4">
                    <span>330 cal</span>
                    <span>16g protein</span>
                    <span>45g carbs</span>
                    <span>8g fat</span>
                  </div>
                </div>
                <button className="text-green-500 text-sm font-medium">Select</button>
              </div>
            </div>
          </div>
          
          
          {/* Health Insights Section */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Health Insights & Tips</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex justify-center mb-4">
                  <Droplet size={36} className="text-blue-500" />
                </div>
                <h3 className="text-lg font-semibold text-center mb-2">Stay Hydrated</h3>
                <p className="text-gray-600 text-sm text-center">
                  Drinking enough water is crucial for overall health and optimal physical performance.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex justify-center mb-4">
                  <Activity size={36} className="text-red-500" />
                </div>
                <h3 className="text-lg font-semibold text-center mb-2">Regular Exercise</h3>
                <p className="text-gray-600 text-sm text-center">
                  Even 30 minutes of moderate exercise each day can significantly improve your health.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex justify-center mb-4">
                  <Moon size={36} className="text-purple-500" />
                </div>
                <h3 className="text-lg font-semibold text-center mb-2">Sleep Well</h3>
                <p className="text-gray-600 text-sm text-center">
                  Quality sleep is essential for recovery and maintaining good physical and mental health.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}