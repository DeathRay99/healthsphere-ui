// import React from "react";
// import SummaryCards from "./SummaryCards";
// import RecentUsers from "./RecentUsers";
// import RecentActivities from "./RecentActivities";

// export default function DashboardOverview() {
//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold text-green-800 mb-6">Dashboard Overview</h2>
//       <SummaryCards />
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
//         <RecentUsers />
//         <RecentActivities />
//       </div>
//     </div>
//   );
// }

import React from "react";
import SummaryCards from "./SummaryCards"; // Retain only if used
import RecentUsers from "./RecentUsers"; // Retain based on relevance
import { DietRecommendationsChart } from "./DietRecommendationsChart";
import WorkoutRecommendationsChart from "./WorkoutRecommendationsChart";

export default function DashboardOverview({dietData, workoutData}) {

  const dietCount=dietData.length;
  const workoutCount=workoutData.length;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-green-800 mb-6">Dashboard Overview</h2>
      <SummaryCards dietCount={dietCount} workoutCount={workoutCount}/> {/* Summary Cards could show meal/workout/user statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <RecentUsers /> {/* List of recently added users */}
        <DietRecommendationsChart dietData={dietData}/>
        <WorkoutRecommendationsChart workoutData={workoutData}/>
        
      </div>
    </div>
  );
}
