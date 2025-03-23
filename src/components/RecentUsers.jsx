import React from "react";
const recentUsers = [
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" },
    { id: 3, name: "Mark Wilson", email: "mark@example.com" },
  ];
  
  export default function RecentUsers() {
    return (
      <div className="bg-white shadow-md p-6 rounded-lg">
        <h3 className="text-lg font-semibold mb-4">Recent Users</h3>
        <ul>
          {recentUsers.map((user) => (
            <li key={user.id} className="flex justify-between p-2 border-b last:border-none">
              <span>{user.name}</span>
              <span className="text-gray-500 text-sm">{user.email}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }