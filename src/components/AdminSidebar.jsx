import React from "react";
import Link from 'next/link';
import { Users, Coffee, Activity, UserCheck, Home, Settings, LogOut } from 'lucide-react';

export default function Sidebar() {
  return (
    <div className="w-64 bg-green-700 text-white">
      <div className="p-4">
        <h1 className="text-2xl font-bold">HealthSphere</h1>
        <p className="text-green-200 text-sm">Admin Dashboard</p>
      </div>
      <nav className="mt-6">
        {[{ href: '/adminView', icon: Home, label: 'Dashboard' },
          { href: '/adminView/users', icon: Users, label: 'Users' },
          { href: '/admin/meals', icon: Coffee, label: 'Meals' },
          { href: '/admin/workouts', icon: Activity, label: 'Workouts' },
          { href: '/admin/consultants', icon: UserCheck, label: 'Consultants' },
         ].map(({ href, icon: Icon, label }) => (
            <div key={label} className="px-4 py-2 hover:bg-green-800 transition-colors duration-200">
              <Link href={href} className="flex items-center text-white">
                <Icon className="h-5 w-5 mr-3" />
                <span>{label}</span>
              </Link>
            </div>
          ))}
      </nav>
      <div className="absolute bottom-0 w-64 p-4">
        <div className="flex items-center p-2 text-white hover:bg-green-800 rounded transition-colors duration-200">
          <LogOut className="h-5 w-5 mr-3" />
          <span>Logout</span>
        </div>
      </div>
    </div>
  );
}