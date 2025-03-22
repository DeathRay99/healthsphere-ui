"use client";
import React from 'react';
import Head from 'next/head';
import { 
  Bell, 
  ChevronDown, 
  Phone, 
  Mail, 
  User, 
  Utensils, 
  Target, 
  Users, 
  Droplet, 
  Activity, 
  Moon
} from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>HealthSphere - Your Health Dashboard</title>
        <meta name="description" content="HealthSphere personalized health platform" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center">
            <div className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center text-white font-bold">
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
                  <button className="flex items-center w-full p-2 hover:bg-gray-50 rounded">
                    <Users size={18} className="mr-3 text-gray-500" />
                    <span>Workout With Us</span>
                  </button>
                </li>
                <li>
                  <button className="flex items-center w-full p-2 bg-green-50 text-green-600 rounded">
                    <Phone size={18} className="mr-3" />
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
          {/* Specialists Section */}
          <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
            <h2 className="text-xl font-bold mb-6">Consult Our Specialists</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Specialist 1 */}
              <div className="border rounded-lg p-4">
                <div className="flex items-start mb-4">
                  <div className="bg-green-100 rounded-full p-2 mr-3">
                    <User size={24} className="text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold">Dr. Sarah Johnson</h3>
                    <p className="text-green-500 text-sm">Nutritionist</p>
                    <p className="text-sm text-gray-500 mt-1">Available: Mon, Wed, Fri</p>
                  </div>
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center">
                    <Phone size={16} className="text-green-500 mr-2" />
                    <span className="text-sm">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center">
                    <Mail size={16} className="text-green-500 mr-2" />
                    <span className="text-sm">sarah.johnson@healthsphere.com</span>
                  </div>
                </div>
                
                <button className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-md">
                  Schedule Appointment
                </button>
              </div>
              
              {/* Specialist 2 */}
              <div className="border rounded-lg p-4">
                <div className="flex items-start mb-4">
                  <div className="bg-green-100 rounded-full p-2 mr-3">
                    <User size={24} className="text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold">Dr. Michael Chen</h3>
                    <p className="text-green-500 text-sm">Fitness Expert</p>
                    <p className="text-sm text-gray-500 mt-1">Available: Tue, Thu, Sat</p>
                  </div>
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center">
                    <Phone size={16} className="text-green-500 mr-2" />
                    <span className="text-sm">+1 (555) 987-6543</span>
                  </div>
                  <div className="flex items-center">
                    <Mail size={16} className="text-green-500 mr-2" />
                    <span className="text-sm">michael.chen@healthsphere.com</span>
                  </div>
                </div>
                
                <button className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-md">
                  Schedule Appointment
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