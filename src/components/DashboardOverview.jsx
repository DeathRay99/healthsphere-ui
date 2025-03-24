import React from "react";
import SummaryCards from "./SummaryCards"; // Retain only if used
import { DietRecommendationsChart } from "./charts/DietRecommendationsChart";
import WorkoutRecommendationsChart from "./charts/WorkoutRecommendationsChart";
import { GenderPieChart } from "./charts/GenderPieChart";
import { DietPreferenceChart } from "./charts/DietPreferenceChart";

export default function DashboardOverview({
  dietData,
  workoutData,
  consultantData,
  userData,
}) {
  const dietCount = dietData.length;
  const workoutCount = workoutData.length;
  const consultantCount = consultantData.length;
  const userCount = userData.length;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-green-800 mb-6">
        Dashboard Overview
      </h2>
      <SummaryCards
        dietCount={dietCount}
        workoutCount={workoutCount}
        consultantCount={consultantCount}
        userCount={userCount}
      />{" "}
      {/* Summary Cards could show meal/workout/user statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <GenderPieChart userData={userData} />
        <DietRecommendationsChart dietData={dietData} />
        <WorkoutRecommendationsChart workoutData={workoutData} />
        <DietPreferenceChart userData={userData}/>
      </div>
    </div>
  );
}
