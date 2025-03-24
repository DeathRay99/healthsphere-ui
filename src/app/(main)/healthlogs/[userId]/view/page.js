// "use client";

// import { useState, useEffect } from "react";
// import { useParams } from "next/navigation";
// import Loader from "@/components/Loader";

// export default function ViewHealthLogs() {
//   const { userId } = useParams(); // Retrieve userId from the URL
//   const [healthLogs, setHealthLogs] = useState([]);
//   const [loading, setLoading] = useState(false);

//   // Fetch health logs for the user
//   const fetchHealthLogs = async () => {
//     try {
//       setLoading(true);
//       const response = await fetch(`http://localhost:9090/healthLogs/user/${userId}`, {
//         headers: {
//           Role: localStorage.getItem("role") || "", // Include Role header
//           UserId: userId, // Include UserId header
//         },
//       });

//       if (!response.ok) {
//         const data = await response.json();
//         throw new Error(data.message || "Failed to fetch health logs.");
//       }

//       const data = await response.json();
//       setHealthLogs(data.healthLogs); // Store fetched logs in state
//     } catch (error) {
//       console.error("Error fetching health logs:", error.message);
//       alert(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchHealthLogs(); // Fetch logs on component mount
//   }, [userId]);

//   if (!userId) {
//     return (
//       <div className="container mx-auto px-4 py-8 bg-gradient-to-br from-green-100 to-white min-h-screen">
//         <h1 className="text-3xl font-semibold text-red-500 text-center mb-6">
//           User Not Found
//         </h1>
//         <p className="text-lg text-gray-600 text-center mb-6">
//           Please log in to access your health logs.
//         </p>
//       </div>
//     );
//   }

//   return (
//     <div className="container mx-auto px-4 py-8 bg-gradient-to-br from-green-100 to-white min-h-screen">
//       <h1 className="text-3xl font-semibold text-green-700 text-center mb-6">
//         Your Health Logs
//       </h1>
//       {loading ? (
//         <Loader />
//       ) : healthLogs.length === 0 ? (
//         <div className="text-center py-8 text-gray-500">
//           No health logs found.
//         </div>
//       ) : (
//         <div className="overflow-x-auto bg-white shadow-lg rounded-lg mt-6">
//           <table className="min-w-full divide-y divide-gray-200">
//             <thead className="bg-green-100">
//               <tr>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-green-700 uppercase tracking-wider">
//                   Date
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-green-700 uppercase tracking-wider">
//                   Calories
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-green-700 uppercase tracking-wider">
//                   Protein (g)
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-green-700 uppercase tracking-wider">
//                   Carbs (g)
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-green-700 uppercase tracking-wider">
//                   Fats (g)
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-green-700 uppercase tracking-wider">
//                   Water (L)
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-green-700 uppercase tracking-wider">
//                   Sleep (hrs)
//                 </th>
//               </tr>
//             </thead>
//             <tbody className="bg-white divide-y divide-gray-200">
//               {healthLogs.map((log) => (
//                 <tr key={log.logId} className="hover:bg-green-50 transition">
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
//                     {new Date(log.logDate).toLocaleDateString()}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{log.calories}</td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{log.protein}</td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{log.carbs}</td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{log.fats}</td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{log.waterIntake}</td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{log.sleep}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Loader from "@/components/Loader";
import useAuthRedirect from "@/hooks/useAuthRedirect";

export default function ViewHealthLogs() {
  const { userId } = useParams(); // Retrieve userId from the URL
  const [healthLogs, setHealthLogs] = useState([]);
  const [loading, setLoading] = useState(false);


  useAuthRedirect(userId);
  const fetchHealthLogs = async () => {
    try {
      setLoading(true);
      const response = await fetch(`http://localhost:9090/healthLogs/user/${userId}`, {
        headers: {
          Role: localStorage.getItem("role") || "", // Include Role header
          UserId: userId, // Include UserId header
        },
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || "Failed to fetch health logs.");
      }

      const data = await response.json();
      setHealthLogs(data.healthLogs); // Store fetched logs in state
    } catch (error) {
      console.error("Error fetching health logs:", error.message);
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHealthLogs(); // Fetch logs on component mount
  }, [userId]);

  if (!userId) {
    return (
      <div className="container mx-auto px-4 py-8 bg-gradient-to-br from-green-100 to-white min-h-screen">
        <h1 className="text-3xl font-semibold text-red-500 text-center mb-6">
          User Not Found
        </h1>
        <p className="text-lg text-gray-600 text-center mb-6">
          Please log in to access your health logs.
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 bg-gradient-to-br from-green-100 to-white min-h-screen">
      <h1 className="text-3xl font-semibold text-green-700 text-center mb-6">
        Your Health Logs
      </h1>
      {loading ? (
        <Loader />
      ) : healthLogs.length === 0 ? (
        <div className="text-center py-8 text-gray-500">
          No health logs found.
        </div>
      ) : (
        <div className="overflow-x-auto bg-white shadow-lg rounded-lg mt-6">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-green-100">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-green-700 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-green-700 uppercase tracking-wider">
                  Calories
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-green-700 uppercase tracking-wider">
                  Water Intake (L)
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-green-700 uppercase tracking-wider">
                  Sleep (hrs)
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-green-700 uppercase tracking-wider">
                  Weight (kg)
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {healthLogs.map((log) => (
                <tr key={log.logId} className="hover:bg-green-50 transition">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {new Date(log.logDate).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {log.calories}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {log.waterIntake}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {log.sleep}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {log.weight !== undefined ? log.weight : "No Data"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

