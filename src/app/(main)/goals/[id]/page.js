"use client";
import FitnessGoalForm from "@/components/FitnessGoalForm";
import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import useAuthStore from "@/app/store/authStore";
import React from "react";
import GoalsTable from "@/components/GoalsTable";

function goals() {
  const router = useRouter();
  const { id } = useParams();
  const { isLoggedIn, initializeAuth } = useAuthStore();
  const [goals, setGoals] = useState(null);
  const [refreshTrigger, setRefreshTrigger] = useState(0);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    // Check if user is authenticated
    initializeAuth();
    if (!isLoggedIn && localStorage.getItem("userId") != id) {
      router.push("/login");
    }
  }, [id]);

  const onSubmit = async (formData, setFormData) => {
    try {
      const response = await fetch(
        `http://localhost:9090/api/fitnessGoals/${id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to add new fitness goal");
      }
      alert("goal added successfully! ");
      setFormData({
        goalType: "Weight Loss",
        targetWeight: "",
        targetBodyFat: "",
        startDate: "",
        targetDate: "",
      });
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    setLoading(true);
    const fetchGoals = async () => {
      if (isLoggedIn && localStorage.getItem("userId") == id) {
        try {
          const response = await fetch(
            `http://localhost:9090/api/fitnessGoals/${id}`
          );
          const data = await response.json();

          if (response.ok) {
            console.log(data);
            setGoals(data);
          } else {
            alert(data.err);
          }
        } catch (e) {
          console.log("something went wrong", e.message);
        }finally {
          setLoading(false); 
        }
      }
      return;
    };
    fetchGoals();
  }, [id, refreshTrigger]);

  const EmptyState = () => (
    <div className="text-center py-16 bg-gray-50 rounded-lg">
      <h3 className="text-2xl font-semibold text-gray-700 mb-2">No Fitness Goals Found</h3>
      <p className="text-gray-500 mb-8 max-w-md mx-auto">
        Start your fitness journey today by adding your first goal. Track your progress and stay motivated!
      </p>

    </div>
  );

  const LoadingState = () => (
    <div className="flex justify-center items-center py-20">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      <span className="ml-3 text-lg text-gray-700">Loading your fitness goals...</span>
    </div>
  );

  return (
    <div>
      <div id="fitness-form">
        <FitnessGoalForm userId={id} onSubmit={onSubmit} setRefreshTrigger={setRefreshTrigger} />
      </div>
      <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-6xl mx-auto mt-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          Your Fitness Goals
        </h2>
        
        {loading ? (
          <LoadingState />
        ) : goals && goals.length > 0 ? (
          <GoalsTable setGoals={setGoals} goals={goals} setRefreshTrigger={setRefreshTrigger} />
        ) : (
          <EmptyState />
        )}
      </div>
    </div>
  );
}

export default goals;
