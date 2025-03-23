import React from "react";
const activities = [
    { id: 1, description: "User John Doe added a new workout plan.", time: "10 min ago" },
    { id: 2, description: "Jane Smith updated her diet plan.", time: "30 min ago" },
    { id: 3, description: "Mark Wilson booked a consultation.", time: "1 hour ago" },
  ];
  
  export default function RecentActivities() {
    return (
      <div className="bg-white shadow-md p-6 rounded-lg">
        <h3 className="text-lg font-semibold mb-4">Recent Activities</h3>
        <ul>
          {activities.map((activity) => (
            <li key={activity.id} className="p-2 border-b last:border-none">
              <p className="text-gray-700">{activity.description}</p>
              <p className="text-gray-500 text-sm">{activity.time}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }