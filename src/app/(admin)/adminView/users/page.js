// // "use client";

// // import { useState, useEffect } from 'react';
// // import { Search, Phone, Mail, FileText } from 'lucide-react';

// // export default function Users() {
// //   const [users, setUsers] = useState([]);
// //   const [searchTerm, setSearchTerm] = useState('');
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     fetchUsers();
// //   }, []);

// //   const fetchUsers = async () => {
// //     try {
// //       const response = await fetch("http://localhost:9090/api/users"); // Adjust based on your backend URL
// //       const data = await response.json();
// //       setUsers(data);
// //       setLoading(false);
// //     } catch (error) {
// //       console.error("Error fetching users:", error);
// //       setLoading(false);
// //     }
// //   };

// //   const filteredUsers = users.filter(user => {
// //     const fullName = `${user.firstName} ${user.lastName}`.toLowerCase();
// //     const email = user.email.toLowerCase();
// //     const search = searchTerm.toLowerCase();
    
// //     return fullName.includes(search) || email.includes(search);
// //   });

// //   return (
// //     <div className="container mx-auto px-4 py-8 bg-gradient-to-br from-green-100 to-white min-h-screen">
// //       <h1 className="text-3xl font-semibold text-green-700 text-center mb-6">User Management</h1>
      
// //       <div className="relative mb-6 max-w-lg mx-auto">
// //         <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
// //           <Search className="h-5 w-5 text-green-500" />
// //         </div>
// //         <input
// //           type="text"
// //           className="block w-full pl-10 pr-3 py-2 border border-green-300 rounded-lg bg-white placeholder-green-500 focus:outline-none focus:ring-green-500 focus:border-green-500 shadow-md"
// //           placeholder="Search users by name or email"
// //           value={searchTerm}
// //           onChange={(e) => setSearchTerm(e.target.value)}
// //         />
// //       </div>
      
// //       {loading ? (
// //         <div className="flex justify-center items-center py-8">
// //           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
// //         </div>
// //       ) : (
// //         <>
// //           {filteredUsers.length === 0 ? (
// //             <div className="text-center py-8 text-gray-500">
// //               {searchTerm ? 'No users match your search criteria' : 'No users found in the database'}
// //             </div>
// //           ) : (
// //             <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
// //               <table className="min-w-full divide-y divide-gray-200">
// //                 <thead className="bg-green-100">
// //                   <tr>
// //                     <th className="px-6 py-3 text-left text-xs font-medium text-green-700 uppercase tracking-wider">Name</th>
// //                     <th className="px-6 py-3 text-left text-xs font-medium text-green-700 uppercase tracking-wider">Email</th>
// //                     <th className="px-6 py-3 text-left text-xs font-medium text-green-700 uppercase tracking-wider">Contact</th>
// //                   </tr>
// //                 </thead>
// //                 <tbody className="bg-white divide-y divide-gray-200">
// //                   {filteredUsers.map((user) => (
// //                     <tr key={user.userId} className="hover:bg-green-50 transition">
// //                       <td className="px-6 py-4 whitespace-nowrap">
// //                         <div className="text-sm font-medium text-gray-900">{user.firstName} {user.lastName}</div>
// //                       </td>
// //                       <td className="px-6 py-4 whitespace-nowrap">
// //                         <div className="text-sm text-gray-900">{user.email}</div>
// //                       </td>
// //                       <td className="px-6 py-4">
// //                         <div className="flex flex-col space-y-1">
// //                           <div className="flex items-center text-sm text-gray-500">
// //                             <Phone className="flex-shrink-0 mr-1.5 h-4 w-4 text-green-400" />
// //                             {user.phoneNumber}
// //                           </div>
// //                         </div>
// //                       </td>
// //                     </tr>
// //                   ))}
// //                 </tbody>
// //               </table>
// //             </div>
// //           )}
// //         </>
// //       )}
// //     </div>
// //   );
// // }
// "use client";

// import { useState, useEffect } from "react";
// import { Search, Trash2 } from "lucide-react";

// export default function Users() {
//   const [users, setUsers] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   const fetchUsers = async () => {
//     try {
//       const response = await fetch("http://localhost:9090/api/users", {
//         headers: { Role: localStorage.getItem("role") || "" }, // Role from localStorage
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.err || "Failed to fetch users.");
//       }

//       const data = await response.json();
//       setUsers(data.users); // Parse the `users` field from the response
//       setLoading(false);
//     } catch (error) {
//       console.error("Error fetching users:", error.message);
//       alert(error.message); // Display error if user isn't an admin
//       setLoading(false);
//     }
//   };

//   const handleDeleteUser = async (userId) => {
//     if (!window.confirm("Are you sure you want to delete this user?")) return;

//     try {
//       const response = await fetch(`http://localhost:9090/api/users/${userId}`, {
//         method: "DELETE",
//         headers: {
//           "Content-Type": "application/json",
//           Role: localStorage.getItem("role") || "", // Include Role header
//         },
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.err || "Failed to delete user.");
//       }

//       const data = await response.json();
//       alert(data.response); // Notify success

//       // Refresh user list after deletion
//       setUsers((prevUsers) => prevUsers.filter((user) => user.userId !== userId));
//     } catch (error) {
//       console.error("Error deleting user:", error.message);
//       alert(error.message);
//     }
//   };

  

//   return (
//     <div className="container mx-auto px-4 py-8 bg-gradient-to-br from-green-100 to-white min-h-screen">
//       <h1 className="text-3xl font-semibold text-green-700 text-center mb-6">
//         User Management
//       </h1>

//       <div className="relative mb-6 max-w-lg mx-auto">
//         <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//           <Search className="h-5 w-5 text-green-500" />
//         </div>
//         <input
//           type="text"
//           className="block w-full pl-10 pr-3 py-2 border border-green-300 rounded-lg bg-white placeholder-green-500 focus:outline-none focus:ring-green-500 focus:border-green-500 shadow-md"
//           placeholder="Search users by name or email"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//       </div>

//       {loading ? (
//         <div className="flex justify-center items-center py-8">
//           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
//         </div>
//       ) : (
//         <>
//           {filteredUsers.length === 0 ? (
//             <div className="text-center py-8 text-gray-500">
//               {searchTerm
//                 ? "No users match your search criteria"
//                 : "No users found in the database"}
//             </div>
//           ) : (
//             <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
//               <table className="min-w-full divide-y divide-gray-200">
//                 <thead className="bg-green-100">
//                   <tr>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-green-700 uppercase tracking-wider">
//                       Name
//                     </th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-green-700 uppercase tracking-wider">
//                       Email
//                     </th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-green-700 uppercase tracking-wider">
//                       Contact
//                     </th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-green-700 uppercase tracking-wider">
//                       Actions
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody className="bg-white divide-y divide-gray-200">
//                   {filteredUsers.map((user) => (
//                     <tr
//                       key={user.userId}
//                       className="hover:bg-green-50 transition"
//                     >
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         <div className="text-sm font-medium text-gray-900">
//                           {user.firstName} {user.lastName}
//                         </div>
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         <div className="text-sm text-gray-900">{user.email}</div>
//                       </td>
//                       <td className="px-6 py-4">
//                         <div className="flex items-center text-sm text-gray-500">
//                           {user.phoneNumber || "N/A"}
//                         </div>
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         <button
//                           className="text-red-500 hover:text-red-700 transition"
//                           onClick={() => handleDeleteUser(user.userId)}
//                         >
//                           <Trash2 className="h-5 w-5" />
//                         </button>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           )}
//         </>
//       )}
//     </div>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import { Search, Trash2 } from "lucide-react";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch("http://localhost:9090/api/users", {
        headers: { Role: localStorage.getItem("role") || "" }, // Role from localStorage
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.err || "Failed to fetch users.");
      }

      const data = await response.json();
      setUsers(data.users); // Parse the `users` field from the response
      setLoading(false);
    } catch (error) {
      console.error("Error fetching users:", error.message);
      alert(error.message); // Display error if user isn't an admin
      setLoading(false);
    }
  };

  const handleDeleteUser = async (userId) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;

    try {
      const response = await fetch(`http://localhost:9090/api/users/${userId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Role: localStorage.getItem("role") || "", // Include Role header
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.err || "Failed to delete user.");
      }

      const data = await response.json();
      alert(data.response); // Notify success

      // Refresh user list after deletion
      setUsers((prevUsers) => prevUsers.filter((user) => user.userId !== userId));
    } catch (error) {
      console.error("Error deleting user:", error.message);
      alert(error.message);
    }
  };

  const filteredUsers = users.filter((user) => {
    const fullName = `${user?.firstName || ""} ${user?.lastName || ""}`.toLowerCase(); // Handle undefined or null values
    const search = searchTerm.toLowerCase();

    return fullName.includes(search); // Search by full name only
  });

  return (
    <div className="container mx-auto px-4 py-8 bg-gradient-to-br from-green-100 to-white min-h-screen">
      <h1 className="text-3xl font-semibold text-green-700 text-center mb-6">
        User Management
      </h1>

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
        <>
          {filteredUsers.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              {searchTerm
                ? "No users match your search criteria"
                : "No users found in the database"}
            </div>
          ) : (
            <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-green-100">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-green-700 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-green-700 uppercase tracking-wider">
                      Contact
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-green-700 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredUsers.map((user) => (
                    <tr
                      key={user.userId}
                      className="hover:bg-green-50 transition"
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">
                          {user.firstName} {user.lastName}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center text-sm text-gray-500">
                          {user.phoneNumber || "N/A"}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <button
                          className="text-red-500 hover:text-red-700 transition"
                          onClick={() => handleDeleteUser(user.userId)}
                        >
                          <Trash2 className="h-5 w-5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </>
      )}
    </div>
  );
}

