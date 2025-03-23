import React from "react";
import { Users, Activity, Coffee, UserCheck } from "lucide-react";

const summaryData = [
  { icon: Users, title: "Total Users", value: "1,250" },
  { icon: Coffee, title: "Total Meals", value: "850" },
  { icon: Activity, title: "Total Workouts", value: "650" },
  { icon: UserCheck, title: "Active Consultants", value: "120" },
];

export default function SummaryCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {summaryData.map(({ icon: Icon, title, value }, index) => (
        <div key={index} className="bg-white shadow-md p-4 rounded-lg flex items-center">
          <Icon className="h-10 w-10 text-green-600 mr-4" />
          <div>
            <p className="text-gray-500">{title}</p>
            <h3 className="text-xl font-bold">{value}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}