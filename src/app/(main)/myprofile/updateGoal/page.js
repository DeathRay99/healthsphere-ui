"use client";
import Head from 'next/head';
import { useState } from 'react';
import { 
  User,
  Bell,
  ChevronDown,
  ClipboardList,
  Utensils,
  Users,
  Phone,
  BarChart2,
  Clock,
  Droplet,
  Heart,
  Moon
} from 'lucide-react';

export default function Dashboard() {
  const [waterIntake, setWaterIntake] = useState(5);
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>healthSphere - Dashboard</title>
        <meta name="description" content="Health tracking dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center">
            <div className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center">
              <span className="text-white font-bold">h</span>
            </div>
            <span className="ml-2 font-bold">healthSphere</span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Bell className="h-6 w-6 text-gray-600" />
              <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
            </div>
            <div className="flex items-center">
              <span className="text-sm mr-2">John Doe</span>
              <ChevronDown className="h-4 w-4 text-gray-400" />
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6 flex">
        {/* Sidebar */}
        <div className="w-48 mr-8">
          <div className="bg-white rounded-lg p-4 flex flex-col items-center shadow-sm mb-4">
            <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center">
              <User className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="font-medium mt-2">John Doe</h2>
            <div className="w-full mt-2">
              <div className="bg-gray-200 h-2 rounded-full">
                <div className="bg-green-500 h-2 rounded-full w-3/4"></div>
              </div>
              <p className="text-xs text-gray-500 mt-1">72% of weekly goals completed</p>
            </div>
          </div>

          {/* Menu Items */}
          <div className="bg-white rounded-lg shadow-sm">
            <button className="w-full py-3 px-4 flex items-center hover:bg-gray-50 border-l-4 border-transparent">
              <User className="h-5 w-5 text-gray-500 mr-3" />
              <span className="text-sm">Update Details</span>
            </button>

            <button className="w-full py-3 px-4 flex items-center hover:bg-gray-50 border-l-4 border-transparent">
              <Utensils className="h-5 w-5 text-gray-500 mr-3" />
              <span className="text-sm">Today's Menu</span>
            </button>

            <button className="w-full py-3 px-4 flex items-center bg-green-50 border-l-4 border-green-500">
              <ClipboardList className="h-5 w-5 text-green-500 mr-3" />
              <span className="text-sm font-medium">Today's Goals</span>
            </button>

            <button className="w-full py-3 px-4 flex items-center hover:bg-gray-50 border-l-4 border-transparent">
              <Users className="h-5 w-5 text-gray-500 mr-3" />
              <span className="text-sm">Workout With Us</span>
            </button>

            <button className="w-full py-3 px-4 flex items-center hover:bg-gray-50 border-l-4 border-transparent">
              <Phone className="h-5 w-5 text-gray-500 mr-3" />
              <span className="text-sm">Consult Specialists</span>
            </button>
          </div>

          {/* Premium Box */}
          <div className="bg-green-500 rounded-lg p-4 mt-4 text-white shadow-sm">
            <h3 className="font-bold">Upgrade to Premium</h3>
            <p className="text-xs mt-1">Get advanced features and personalized coaching</p>
            <button className="mt-4 bg-white text-green-500 px-4 py-1 rounded-full text-sm font-medium">
              Go Premium
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <h1 className="text-xl font-bold mb-6">Today's Goals Tracking</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Food Tracking */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <Utensils className="h-5 w-5 text-green-500 mr-2" />
                <h2 className="font-medium">Track Food</h2>
              </div>

              <div className="mb-4">
                <div className="flex justify-between text-sm mb-1">
                  <span>Calories</span>
                  <span className="text-gray-500">1250 / 2000 cal</span>
                </div>
                <div className="bg-gray-200 h-2 rounded-full">
                  <div className="bg-green-500 h-2 rounded-full w-3/5"></div>
                </div>
              </div>

              <div className="mb-4">
                <div className="flex justify-between text-sm mb-1">
                  <span>Protein</span>
                  <span className="text-gray-500">65 / 120 g</span>
                </div>
                <div className="bg-gray-200 h-2 rounded-full">
                  <div className="bg-green-500 h-2 rounded-full w-1/2"></div>
                </div>
              </div>

              <button className="text-green-500 text-sm font-medium flex items-center">
                <span>+ Add food</span>
              </button>
            </div>

            {/* Weight Tracking */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <BarChart2 className="h-5 w-5 text-green-500 mr-2" />
                <h2 className="font-medium">Track Weight</h2>
              </div>
              
              <div className="h-32 bg-gray-100 rounded flex items-center justify-center mb-4">
                <span className="text-gray-400 text-sm">Weight history graph will be displayed here</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-sm">Last recorded: 72.5 kg</span>
                <button className="text-green-500 text-sm font-medium">
                  + Add measurement
                </button>
              </div>
            </div>

            {/* Sleep Tracking */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <Clock className="h-5 w-5 text-green-500 mr-2" />
                <h2 className="font-medium">Track Sleep</h2>
              </div>

              <div className="mb-4">
                <div className="flex justify-between text-sm mb-1">
                  <span>Sleep Duration</span>
                  <span className="text-gray-500">7h 20m</span>
                </div>
                <div className="bg-gray-200 h-2 rounded-full">
                  <div className="bg-green-500 h-2 rounded-full w-4/5"></div>
                </div>
              </div>

              <div className="flex justify-between text-xs text-gray-500 mb-4">
                <span>4h</span>
                <span>6h</span>
                <span>8h</span>
                <span>10h</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-sm">11:45 PM - 7:05 AM</span>
                <button className="text-green-500 text-sm font-medium">
                  Update
                </button>
              </div>
            </div>

            {/* Water Tracking */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <Droplet className="h-5 w-5 text-green-500 mr-2" />
                <h2 className="font-medium">Track Water</h2>
              </div>

              <div className="flex justify-center mb-4">
                <div className="relative w-24 h-24">
                  <svg viewBox="0 0 36 36" className="w-full h-full">
                    <path
                      d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#E5E7EB"
                      strokeWidth="3"
                    />
                    <path
                      d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#22C55E"
                      strokeWidth="3"
                      strokeDasharray={`${waterIntake * 12.5}, 100`}
                    />
                    <text x="18" y="20.5" textAnchor="middle" className="text-lg font-medium">
                      {waterIntake}/8
                    </text>
                  </svg>
                </div>
              </div>

              <div className="flex justify-between">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
                  <button
                    key={index}
                    className={`h-8 w-8 rounded-full flex items-center justify-center ${
                      index <= waterIntake ? 'bg-green-100 text-green-500' : 'bg-gray-100 text-gray-400'
                    }`}
                    onClick={() => setWaterIntake(index)}
                  >
                    <Droplet className="h-4 w-4" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Health Insights */}
          <div className="mt-8">
            <h2 className="text-xl font-bold mb-4">Health Insights & Tips</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-blue-400 mb-2">
                  <Droplet className="h-8 w-8" />
                </div>
                <h3 className="font-medium mb-2">Stay Hydrated</h3>
                <p className="text-sm text-gray-600">Drinking enough water is crucial for overall health. Aim for 8 glasses a day.</p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-red-400 mb-2">
                  <Heart className="h-8 w-8" />
                </div>
                <h3 className="font-medium mb-2">Regular Exercise</h3>
                <p className="text-sm text-gray-600">Even 30 minutes of moderate exercise daily can significantly improve your health.</p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-purple-400 mb-2">
                  <Moon className="h-8 w-8" />
                </div>
                <h3 className="font-medium mb-2">Sleep Well</h3>
                <p className="text-sm text-gray-600">Quality sleep is essential for recovery and mental health. Aim for 7-8 hours.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}