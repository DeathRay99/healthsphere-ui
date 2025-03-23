// pages/admin/index.js
"use client";
import React from 'react';
import Link from 'next/link';
import { Users, Coffee, Activity, UserCheck, Home, Bell, Settings, Search, LogOut } from 'lucide-react';

// export default function AdminDashboard() {
//   return (
//     <div className="flex h-screen bg-gray-50">
//       {/* Sidebar */}
//       <div className="w-64 bg-green-700 text-white">
//         <div className="p-4">
//           <h1 className="text-2xl font-bold">HealthSphere</h1>
//           <p className="text-green-200 text-sm">Admin Dashboard</p>
//         </div>
        
//         <nav className="mt-6">
//           <div className="px-4 py-2 bg-green-800">
//             <Link href="/admin" className="flex items-center text-white">
//               <Home className="h-5 w-5 mr-3" />
//               <span>Dashboard</span>
//             </Link>
//           </div>
          
//           <div className="px-4 py-2 hover:bg-green-800 transition-colors duration-200">
//             <Link href="/admin/users" className="flex items-center text-white">
//               <Users className="h-5 w-5 mr-3" />
//               <span>Users</span>
//             </Link>
//           </div>
          
//           <div className="px-4 py-2 hover:bg-green-800 transition-colors duration-200">
//             <Link href="/admin/meals" className="flex items-center text-white">
//               <Coffee className="h-5 w-5 mr-3" />
//               <span>Meals</span>
//             </Link>
//           </div>
          
//           <div className="px-4 py-2 hover:bg-green-800 transition-colors duration-200">
//             <Link href="/admin/workouts" className="flex items-center text-white">
//               <Activity className="h-5 w-5 mr-3" />
//               <span>Workouts</span>
//             </Link>
//           </div>
          
//           <div className="px-4 py-2 hover:bg-green-800 transition-colors duration-200">
//             <Link href="/admin/consultants" className="flex items-center text-white">
//               <UserCheck className="h-5 w-5 mr-3" />
//               <span>Consultants</span>
//             </Link>
//           </div>
          
//           <div className="px-4 py-2 hover:bg-green-800 transition-colors duration-200">
//             <Link href="/admin/settings" className="flex items-center text-white">
//               <Settings className="h-5 w-5 mr-3" />
//               <span>Settings</span>
//             </Link>
//           </div>
//         </nav>
        
//         <div className="absolute bottom-0 w-64 p-4">
//           <div className="flex items-center p-2 text-white hover:bg-green-800 rounded transition-colors duration-200">
//             <LogOut className="h-5 w-5 mr-3" />
//             <span>Logout</span>
//           </div>
//         </div>
//       </div>
      
//       {/* Main Content */}
//       <div className="flex-1 flex flex-col overflow-hidden">
//         {/* Top Navigation */}
//         <header className="bg-white border-b border-gray-200 shadow-sm">
//           <div className="flex items-center justify-between p-4">
//             <div className="flex items-center rounded-md bg-gray-100 p-2 w-1/3">
//               <Search className="h-5 w-5 text-gray-500 mr-2" />
//               <input
//                 type="text"
//                 placeholder="Search..."
//                 className="bg-transparent outline-none w-full text-gray-700"
//               />
//             </div>
            
//             <div className="flex items-center gap-4">
//               <div className="relative">
//                 <Bell className="h-6 w-6 text-gray-600" />
//                 <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
//               </div>
              
//               <div className="flex items-center gap-2">
//                 <div className="h-8 w-8 rounded-full bg-green-600 flex items-center justify-center text-white">
//                   A
//                 </div>
//                 <span className="font-medium text-gray-700">Admin</span>
//               </div>
//             </div>
//           </div>
//         </header>
        
//         {/* Dashboard Content */}
//         <main className="flex-1 overflow-y-auto p-6">
//           <h2 className="text-2xl font-bold text-gray-800 mb-6">Dashboard Overview</h2>
          
//           {/* Summary Cards */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
//             <div className="bg-white rounded-lg shadow p-6 border-l-4 border-green-500">
//               <div className="flex items-center">
//                 <div className="p-3 rounded-full bg-green-100 mr-4">
//                   <Users className="h-6 w-6 text-green-600" />
//                 </div>
//                 <div>
//                   <p className="text-gray-500 text-sm">Total Users</p>
//                   <p className="text-2xl font-bold text-gray-800">1,254</p>
//                 </div>
//               </div>
//               <div className="flex items-center mt-4">
//                 <span className="text-green-500 text-sm font-medium">↑ 12%</span>
//                 <span className="text-gray-500 text-sm ml-2">from last month</span>
//               </div>
//             </div>
            
//             <div className="bg-white rounded-lg shadow p-6 border-l-4 border-blue-500">
//               <div className="flex items-center">
//                 <div className="p-3 rounded-full bg-blue-100 mr-4">
//                   <Coffee className="h-6 w-6 text-blue-600" />
//                 </div>
//                 <div>
//                   <p className="text-gray-500 text-sm">Meal Plans</p>
//                   <p className="text-2xl font-bold text-gray-800">87</p>
//                 </div>
//               </div>
//               <div className="flex items-center mt-4">
//                 <span className="text-blue-500 text-sm font-medium">↑ 7%</span>
//                 <span className="text-gray-500 text-sm ml-2">from last month</span>
//               </div>
//             </div>
            
//             <div className="bg-white rounded-lg shadow p-6 border-l-4 border-purple-500">
//               <div className="flex items-center">
//                 <div className="p-3 rounded-full bg-purple-100 mr-4">
//                   <Activity className="h-6 w-6 text-purple-600" />
//                 </div>
//                 <div>
//                   <p className="text-gray-500 text-sm">Workout Plans</p>
//                   <p className="text-2xl font-bold text-gray-800">129</p>
//                 </div>
//               </div>
//               <div className="flex items-center mt-4">
//                 <span className="text-purple-500 text-sm font-medium">↑ 14%</span>
//                 <span className="text-gray-500 text-sm ml-2">from last month</span>
//               </div>
//             </div>
            
//             <div className="bg-white rounded-lg shadow p-6 border-l-4 border-orange-500">
//               <div className="flex items-center">
//                 <div className="p-3 rounded-full bg-orange-100 mr-4">
//                   <UserCheck className="h-6 w-6 text-orange-600" />
//                 </div>
//                 <div>
//                   <p className="text-gray-500 text-sm">Consultants</p>
//                   <p className="text-2xl font-bold text-gray-800">32</p>
//                 </div>
//               </div>
//               <div className="flex items-center mt-4">
//                 <span className="text-orange-500 text-sm font-medium">↑ 4%</span>
//                 <span className="text-gray-500 text-sm ml-2">from last month</span>
//               </div>
//             </div>
//           </div>
          
//           {/* Tables Section */}
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//             {/* Recent Users */}
//             <div className="bg-white rounded-lg shadow">
//               <div className="p-4 border-b border-gray-200 flex justify-between items-center">
//                 <h3 className="text-lg font-medium text-gray-800">Recent Users</h3>
//                 <Link href="/admin/users" className="text-green-600 hover:text-green-800 text-sm font-medium">
//                   View All
//                 </Link>
//               </div>
//               <div className="p-4">
//                 <table className="min-w-full divide-y divide-gray-200">
//                   <thead>
//                     <tr>
//                       <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
//                       <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
//                       <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
//                     </tr>
//                   </thead>
//                   <tbody className="divide-y divide-gray-200">
//                     {[
//                       { name: 'John Smith', status: 'Active', date: 'Mar 21, 2025' },
//                       { name: 'Sarah Johnson', status: 'Active', date: 'Mar 20, 2025' },
//                       { name: 'Michael Brown', status: 'Inactive', date: 'Mar 19, 2025' },
//                       { name: 'Emily Davis', status: 'Active', date: 'Mar 18, 2025' },
//                     ].map((user, index) => (
//                       <tr key={index}>
//                         <td className="py-3 text-sm text-gray-800">{user.name}</td>
//                         <td className="py-3 text-sm">
//                           <span className={`px-2 py-1 text-xs rounded-full ${
//                             user.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
//                           }`}>
//                             {user.status}
//                           </span>
//                         </td>
//                         <td className="py-3 text-sm text-gray-500">{user.date}</td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>
            
//             {/* Recent Activities */}
//             <div className="bg-white rounded-lg shadow">
//               <div className="p-4 border-b border-gray-200 flex justify-between items-center">
//                 <h3 className="text-lg font-medium text-gray-800">Recent Activities</h3>
//                 <Link href="#" className="text-green-600 hover:text-green-800 text-sm font-medium">
//                   View All
//                 </Link>
//               </div>
//               <div className="p-4">
//                 <ul className="divide-y divide-gray-200">
//                   {[
//                     { title: 'New meal plan added', type: 'Meal', time: '2 hours ago' },
//                     { title: 'New consultant joined', type: 'Consultant', time: '5 hours ago' },
//                     { title: 'Workout plan updated', type: 'Workout', time: '6 hours ago' },
//                     { title: 'User subscription renewed', type: 'User', time: '1 day ago' },
//                   ].map((activity, index) => (
//                     <li key={index} className="py-3">
//                       <div className="flex items-center">
//                         <div className={`p-2 rounded-full mr-3 ${
//                           activity.type === 'Meal' ? 'bg-blue-100' :
//                           activity.type === 'Workout' ? 'bg-purple-100' :
//                           activity.type === 'Consultant' ? 'bg-orange-100' : 'bg-green-100'
//                         }`}>
//                           {activity.type === 'Meal' ? <Coffee className="h-4 w-4 text-blue-600" /> :
//                            activity.type === 'Workout' ? <Activity className="h-4 w-4 text-purple-600" /> :
//                            activity.type === 'Consultant' ? <UserCheck className="h-4 w-4 text-orange-600" /> :
//                            <Users className="h-4 w-4 text-green-600" />}
//                         </div>
//                         <div className="flex-1">
//                           <p className="text-sm text-gray-800">{activity.title}</p>
//                           <p className="text-xs text-gray-500">{activity.time}</p>
//                         </div>
//                       </div>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }

import Sidebar from '../../../components/AdminSidebar';
import TopNav from '../../../components/AdminTopNav';
import DashboardOverview from "../../../components/DashboardOverview";
    
    export default function AdminView() {
      return (
        <div className="flex h-screen bg-gray-50">
          <Sidebar />
          <div className="flex-1 flex flex-col overflow-hidden">
            <TopNav />
            <main className="flex-1 overflow-y-auto p-6">
              <DashboardOverview />
            </main>
          </div>
        </div>
      );
    }