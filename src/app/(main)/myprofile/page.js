"use client";

// pages/index.js
import Head from 'next/head';
import { 
  Bell, 
  ChevronDown, 
  User, 
  Droplet, 
  Clock, 
  Users, 
  CheckCircle,
  CalendarCheck,
  Menu,
  ActivitySquare
} from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>healthSphere</title>
        <meta name="description" content="Your health dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navigation Bar */}
      <nav className="bg-white shadow-sm px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <div className="w-9 h-9 rounded-full bg-green-500 text-white flex items-center justify-center font-bold mr-2">
            h
          </div>
          <div className="text-xl font-bold">
            health<span className="text-green-500">Sphere</span>
          </div>
        </div>

        {/* User Controls */}
        <div className="flex items-center">
          <div className="relative mr-6 cursor-pointer">
            <Bell className="h-6 w-6 text-gray-700" />
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-white text-xs flex items-center justify-center">
              1
            </div>
          </div>
          <div className="flex items-center cursor-pointer">
            <span className="mr-1">John Doe</span>
            <ChevronDown className="h-5 w-5 text-gray-700" />
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex px-8 py-6">
        {/* Sidebar */}
        <div className="w-64 mr-8">
          {/* User Profile */}
          <div className="bg-white rounded-xl p-6 text-center mb-4">
            <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-4">
              <User className="h-10 w-10 text-green-500" />
            </div>
            <div className="font-bold text-lg mb-2">John Doe</div>
            <div className="mt-4">
              <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
                <div className="bg-green-500 h-full" style={{ width: '72%' }}></div>
              </div>
              <div className="text-sm text-gray-500 mt-1">
                72% of weekly goals completed
              </div>
            </div>
          </div>

          {/* Navigation Menu */}
          <div className="bg-white rounded-xl overflow-hidden mb-4">
            <div className="flex items-center py-3 px-4 hover:bg-gray-50 cursor-pointer">
              <User className="h-5 w-5 mr-3 text-gray-600" />
              <span >Update Details</span>
            </div>
            <div href="src\app\(main)\myprofile\menu" className="flex items-center py-3 px-4 hover:bg-gray-50 cursor-pointer">
              <Menu className="h-5 w-5 mr-3 text-gray-600" />
              <span >Today's Menu</span>
            </div>
            <div className="flex items-center py-3 px-4 hover:bg-gray-50 cursor-pointer">
              <ActivitySquare className="h-5 w-5 mr-3 text-gray-600" />
              <span>Today's Goals</span>
            </div>
            <div className="flex items-center py-3 px-4 hover:bg-gray-50 cursor-pointer">
              <Users className="h-5 w-5 mr-3 text-gray-600" />
              <span>Workout With Us</span>
            </div>
            <div className="flex items-center py-3 px-4 hover:bg-gray-50 cursor-pointer">
              <CheckCircle className="h-5 w-5 mr-3 text-gray-600" />
              <span>Consult Specialists</span>
            </div>
          </div>

          {/* Premium Box */}
          <div className="bg-green-500 rounded-xl p-6 text-white">
            <div className="font-bold text-lg mb-1">Upgrade to Premium</div>
            <div className="text-sm mb-4">Get advanced features and personalized coaching</div>
            <button className="bg-white text-green-500 rounded-full py-2 px-4 text-sm font-medium">
              Go Premium
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold mb-2">Update Your Details</h1>
            <p className="text-gray-600 mb-4">
              Update your profile information to get more personalized recommendations.
            </p>
            <button className="bg-green-500 text-white rounded-full py-2 px-6 font-medium">
              Update Profile
            </button>
          </div>

          {/* Health Insights */}
          <div>
            <h2 className="text-xl font-bold mb-6">Health Insights & Tips</h2>
            <div className="grid grid-cols-3 gap-6">
              {/* Hydration Card */}
              <div className="bg-white rounded-xl p-6">
                <div className="text-blue-500 mb-4">
                  <Droplet className="h-10 w-10" />
                </div>
                <h3 className="font-bold mb-2">Stay Hydrated</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Drinking enough water is crucial for overall health. Aim for 8 glasses a day.
                </p>
              </div>

              {/* Exercise Card */}
              <div className="bg-white rounded-xl p-6">
                <div className="text-red-500 mb-4">
                  <ActivitySquare className="h-10 w-10" />
                </div>
                <h3 className="font-bold mb-2">Regular Exercise</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Even 30 minutes of moderate exercise daily can significantly improve your health.
                </p>
              </div>

              {/* Sleep Card */}
              <div className="bg-white rounded-xl p-6">
                <div className="text-purple-500 mb-4">
                  <Clock className="h-10 w-10" />
                </div>
                <h3 className="font-bold mb-2">Sleep Well</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Quality sleep is essential for recovery and mental health. Aim for 7-8 hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}