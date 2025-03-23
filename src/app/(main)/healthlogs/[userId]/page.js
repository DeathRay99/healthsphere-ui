// // "use client";

// // import { useState, useEffect } from "react";
// // import HealthLogForm from "@/components/HealthLogs/HealthLogForm";
// // import Loader from "@/components/Loader";
// // import useAuthRedirect from "@/hooks/useAuthRedirect";
// // import { useParams } from "next/navigation";

// // export default function HealthLogsPage() {
// //  const { userId } = useParams();
// // //   const [userRole, setUserRole] = useState(null);
// // //   const [userId, setUserId] = useState(null);
// //   const [loading, setLoading] = useState(false);

// // //   useEffect(() => {
// // //     // if (typeof window !== "undefined") {
// // //       setUserRole(localStorage.getItem("role"));
// // //       setUserId(localStorage.getItem("userId"));
// // //    // }
// // //   }, [userId,userRole]);


// //   useAuthRedirect(userId);
// // //console.log(userId);
// //   const fetchHealthLogs = async () => {
// //     try {
// //       setLoading(true);
// //       const response = await fetch(`http://localhost:9090/healthLogs/${userId}`, {
// //         headers: {
// //          // Role: userRole,
// //           UserId: userId,
// //         },
// //       });
// //       if (!response.ok) {
// //         const errorData = await response.json();
// //         throw new Error(errorData.err || "Failed to fetch health logs.");
// //       }
// //       const data = await response.json();
// //       console.log("Health Logs:", data.healthLogs);
// //     } catch (error) {
// //       console.error("Error fetching health logs:", error.message);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// // //   useEffect(() => {
// // //     if (userRole === "USER") {
// // //       fetchHealthLogs();
// // //     }
// // //   }, [userRole]);

// //   return (
// //     <div className="container mx-auto px-4 py-8 bg-gradient-to-br from-green-100 to-white min-h-screen">
// //       <h1 className="text-3xl font-semibold text-green-700 text-center mb-6">
// //         Daily Health Logs
// //       </h1>
// //       <p className="text-lg text-gray-600 text-center mb-6">
// //         Track your meals, exercise routines, and measurements with ease.
// //       </p>
// //       {loading ? <Loader /> : <HealthLogForm userId={userId}/>}
// //     </div>
// //   );
// // }
// "use client";

// import { useState, useEffect } from "react";
// import HealthLogForm from "@/components/HealthLogs/HealthLogForm";
// import Loader from "@/components/Loader";
// import useAuthRedirect from "@/hooks/useAuthRedirect";
// import { useParams } from "next/navigation";

// export default function HealthLogsPage() {


    
//   const { userId } = useParams(); // Retrieve userId from the URL
//   const [loading, setLoading] = useState(false);

//   useAuthRedirect(userId); // Redirect if user is not authenticated

// //   const fetchHealthLogs = async () => {
// //     try {
// //       setLoading(true);
// //       const response = await fetch(`http://localhost:9090/healthLogs/${userId}`);

// //       if (!response.ok) {
// //         const errorData = await response.json();
// //         throw new Error(errorData.err || "Failed to fetch health logs.");
// //       }

// //       const data = await response.json();
// //       console.log("Health Logs:", data); // Log fetched health logs for debugging
// //     } catch (error) {
// //       console.error("Error fetching health logs:", error.message);
// //       alert("Unable to fetch health logs. Please try again later.");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };
// const fetchHealthLogs = async () => {
//     try {
//       setLoading(true);
//       const response = await fetch(`http://localhost:9090/healthLogs/${userId}`);
  
//       if (!response.ok) {
//         const data = await response.json(); // Attempt to parse JSON
//         throw new Error(data.message || "Failed to fetch health logs.");
//       }
  
//       const data = await response.json();
//       console.log("Health Logs:", data.healthLogs);
//     } catch (error) {
//       console.error("Error fetching health logs:", error.message);
//       alert(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };
  
//   //console.log("User ID:", userId);

//   useEffect(() => {
//     if (userId) {
//       fetchHealthLogs();
//     }
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
//         Daily Health Logs
//       </h1>
//       <p className="text-lg text-gray-600 text-center mb-6">
//         Track your meals, exercise routines, and measurements with ease.
//       </p>
//       {loading ? <Loader /> : <HealthLogForm userId={userId} />}
//     </div>
//   );
// }
"use client";

import { useState } from "react";
import HealthLogForm from "@/components/HealthLogs/HealthLogForm";
import useAuthRedirect from "@/hooks/useAuthRedirect";
import { useParams, useRouter } from "next/navigation";

export default function HealthLogsPage() {
  const { userId } = useParams(); // Retrieve userId from the URL
  const router = useRouter(); // Next.js router for navigation

  useAuthRedirect(userId); // Redirect if the user is not authenticated

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

  const handleDisplayLogs = () => {
    // Navigate to the health logs view page
    router.push(`/healthlogs/${userId}/view`);
  };

  const handleLogSubmitted = () => {
    alert("Health log submitted successfully!"); // Notify the user on submission
  };

  return (
    <div className="container mx-auto px-4 py-8 bg-gradient-to-br from-green-100 to-white min-h-screen">
      <h1 className="text-3xl font-semibold text-green-700 text-center mb-6">
        Daily Health Logs
      </h1>
      <p className="text-lg text-gray-600 text-center mb-6">
        Track your meals, exercise routines, and measurements with ease.
      </p>

      {/* Render the form and pass callback props */}
      <HealthLogForm
        userId={userId}
        onLogSubmitted={handleLogSubmitted}
        onDisplayLogs={handleDisplayLogs}
      />
    </div>
  );
}


