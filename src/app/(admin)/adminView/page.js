"use client";
import React, { useState, useEffect } from "react";
import Sidebar from "@/components/AdminSidebar";
import TopNav from "@/components/AdminTopNav";
import DashboardOverview from "@/components/DashboardOverview";
import useAdminRedirect from "@/hooks/useAdminRedirect";
import Loader from "@/components/Loader";

export default function AdminView() {
  const [loading, setLoading] = useState(true);
  const [workoutData, setWorkoutData] = useState(null);
  const [dietData, setDietData] = useState(null);

  useAdminRedirect();

  const fetchWorkoutRecommendations = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `http://localhost:9090/api/workoutRecommendations`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Role: localStorage.getItem("role"),
          },
        }
      );
      const data = await response.json();
      if (response.ok) {
        console.log(data);
        setWorkoutData(data.workoutRecommendations);
      } else alert(data.err);
    } catch (err) {
      console.log("some error !!", err.message);
    } finally {
      setLoading(false);
    }
  };
  const fetchDietRecommendations = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `http://localhost:9090/api/dietRecommendations`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Role: localStorage.getItem("role"),
          },
        }
      );
      const data = await response.json();
      if (response.ok) {
        console.log(data);
        setDietData(data.dietRecommendations);
      } else alert(data.err);
    } catch (err) {
      console.log("some error !!", err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWorkoutRecommendations();
    fetchDietRecommendations();
  }, []);

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopNav />
        <main className="flex-1 overflow-y-auto p-6">
          {loading ? <Loader /> : <DashboardOverview dietData={dietData} workoutData={workoutData} />}
        </main>
      </div>
    </div>
  );
}
