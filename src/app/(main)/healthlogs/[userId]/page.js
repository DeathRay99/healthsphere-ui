"use client";

import { useState } from "react";
import HealthLogForm from "@/components/HealthLogs/HealthLogForm";
import useAuthRedirect from "@/hooks/useAuthRedirect";
import { useParams, useRouter } from "next/navigation";

export default function HealthLogsPage() {
  const { userId } = useParams(); // Retrieve userId from the URL
  const router = useRouter(); 

  useAuthRedirect(userId); 

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


