import React from "react";
import SummaryCards from "./SummaryCards";
import RecentUsers from "./RecentUsers";
import RecentActivities from "./RecentActivities";

export default function DashboardOverview() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-green-800 mb-6">Dashboard Overview</h2>
      <SummaryCards />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <RecentUsers />
        <RecentActivities />
      </div>
    </div>
  );
}