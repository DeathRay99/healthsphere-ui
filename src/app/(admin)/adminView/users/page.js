"use client";

import { useState, useEffect } from "react";
import { Search, Trash2 } from "lucide-react";
import useAdminRedirect from "@/hooks/useAdminRedirect";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  useAdminRedirect();

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch("http://localhost:9090/api/users", {
        headers: { Role: localStorage.getItem("role") || "" },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.err || "Failed to fetch users.");
      }

      const data = await response.json();
      setUsers(data.users);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching users:", error.message);
      alert(error.message);
      setLoading(false);
    }
  };

  const handleRevokeUser = async (userId) => {
    if (!window.confirm("Are you sure you want to revoke this user? This action is irreversible.")) return;

    try {
      const response = await fetch(`http://localhost:9090/api/users/${userId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Role: localStorage.getItem("role") || "",
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.err || "Failed to revoke user.");
      }

      const data = await response.json();
      alert(data.response || "User revoked successfully.");

      // Update UI to remove the revoked user
      setUsers((prevUsers) => prevUsers.filter((user) => user.userId !== userId));
    } catch (error) {
      console.error("Error revoking user:", error.message);
      alert(error.message);
    }
  };

  const filteredUsers = users.filter((user) => {
    const fullName = `${user?.firstName || ""} ${user?.lastName || ""}`.toLowerCase();
    const search = searchTerm.toLowerCase();
    return fullName.includes(search);
  });

  return (
    <div className="container mx-auto px-4 py-8 bg-gradient-to-br from-green-100 to-white min-h-screen">
      <h1 className="text-3xl font-semibold text-green-700 text-center mb-6">User Management</h1>

      <div className="relative mb-6 max-w-lg mx-auto">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-green-500" />
        </div>
        <input
          type="text"
          className="block w-full pl-10 pr-3 py-2 border border-green-300 rounded-lg bg-white placeholder-green-500 focus:outline-none focus:ring-green-500 focus:border-green-500 shadow-md"
          placeholder="Search users by name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {loading ? (
        <div className="flex justify-center items-center py-8">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
        </div>
      ) : (
        filteredUsers.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            {searchTerm ? "No users match your search criteria" : "No users found in the database"}
          </div>
        ) : (
          <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-green-100">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-green-700 uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-green-700 uppercase tracking-wider">Contact</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-green-700 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredUsers.map((user) => (
                  <tr key={user.userId} className="hover:bg-green-50 transition">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        {user.firstName} {user.lastName}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-500">
                        {user.phoneNumber || "N/A"}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button
                        className="text-yellow-500 hover:text-yellow-700 transition"
                        onClick={() => handleRevokeUser(user.userId)}
                      >
                        Revoke
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )
      )}
    </div>
  );
}
