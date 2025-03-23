// pages/admin/index.js
"use client";
import React from 'react';
import Link from 'next/link';
import { Users, Coffee, Activity, UserCheck, Home, Bell, Settings, Search, LogOut } from 'lucide-react';

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