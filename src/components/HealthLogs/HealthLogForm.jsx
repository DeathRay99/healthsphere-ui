// "use client";

// import React, { useState, useEffect } from "react";
// import MealSelector from "@/components/HealthLogs/MealSelector";
// import ExerciseSelector from "@/components/HealthLogs/ExerciseSelector";
// import MeasurementInputs from "@/components/HealthLogs/MeasurementInputs";
// import OptionalInputs from "@/components/HealthLogs/OptionalInputs";

// export default function HealthLogForm({userId}) {
//   const [healthLog, setHealthLog] = useState({
//     mealId: null,
//     exerciseId: null,
//     weight: "",
//     sleep: "",
//     waterIntake: "",
//     bpSystolic: "",
//     bpDiastolic: "",
//     heartRate: "",
//     calories: 0,
//     protein: 0,
//     carbs: 0,
//     fats: 0,
//   });

//   const [recommendations, setRecommendations] = useState({
//     meals: [],
//     exercises: [],
//   });
//   const [userRole, setUserRole] = useState(null);

//   // Retrieve user role on the client side
//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       setUserRole(localStorage.getItem("role"));
//     }
//   }, []);

//   const fetchRecommendations = async () => {
//     try {
//       const mealResponse = await fetch(`http://localhost:9090/api/dietRecommendations/${userId}`, {
//         headers: { Role: userRole },
//       });
//       const exerciseResponse = await fetch(`http://localhost:9090/api/workoutRecommendations/${userId}`, {
//         headers: { Role: userRole },
//       });
  
//       const meals = mealResponse.ok ? await mealResponse.json() : [];
//       const exercises = exerciseResponse.ok ? await exerciseResponse.json() : [];
  
//       // Validate backend response and set recommendations
//       setRecommendations({
//         meals: Array.isArray(meals) ? meals : [],
//         exercises: Array.isArray(exercises) ? exercises : [],
//       });
  
//       // Show alert if meals or exercises are empty
//       if (!meals.length || !exercises.length) {
//         alert("No recommendations available. Please try again later.");
//       }
//     } catch (error) {
//       console.error("Error fetching recommendations:", error.message);
//       alert("An error occurred while fetching recommendations. Please try again later.");
//     }
//   };
  
  

//   useEffect(() => {
//     if (userRole) {
//       fetchRecommendations();
//     }
//   }, [userRole]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch("http://localhost:9090/healthLogs", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Role: "USER", // Replace with dynamic role management
//         },
//         body: JSON.stringify(healthLog),
//       });
//       const data = await response.json();
//       if (response.ok) {
//         alert(data.response);
//         setHealthLog({
//           mealId: null,
//           exerciseId: null,
//           weight: "",
//           sleep: "",
//           waterIntake: "",
//           bpSystolic: "",
//           bpDiastolic: "",
//           heartRate: "",
//           calories: 0,
//           protein: 0,
//           carbs: 0,
//           fats: 0,
//         });
//       } else {
//         alert(data.err);
//       }
//     } catch (error) {
//       console.error("Error submitting health log:", error.message);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="space-y-6">
//       <MealSelector
//         meals={recommendations.meals}
//         onMealSelect={(meal) => {
//           setHealthLog({
//             ...healthLog,
//             mealId: meal.dietId,
//             calories: meal.caloriesPerDay,
//             protein: meal.proteinPercentage,
//             carbs: meal.carbsPercentage,
//             fats: meal.fats,
//           });
//         }}
//       />
//       <ExerciseSelector
//         exercises={recommendations.exercises}
//         onExerciseSelect={(exercise) =>
//           setHealthLog({ ...healthLog, exerciseId: exercise.id })
//         }
//       />
//       <MeasurementInputs
//         healthLog={healthLog}
//         onChange={(field, value) =>
//           setHealthLog({ ...healthLog, [field]: value })
//         }
//       />
//       <OptionalInputs
//         healthLog={healthLog}
//         onChange={(field, value) =>
//           setHealthLog({ ...healthLog, [field]: value })
//         }
//       />
//       <button
//         type="submit"
//         className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition"
//       >
//         Submit Health Log
//       </button>
//     </form>
//   );
// }

// "use client";

// import React, { useState, useEffect } from "react";
// import MealSelector from "@/components/HealthLogs/MealSelector";
// import ExerciseSelector from "@/components/HealthLogs/ExerciseSelector";
// import MeasurementInputs from "@/components/HealthLogs/MeasurementInputs";
// import OptionalInputs from "@/components/HealthLogs/OptionalInputs";

// export default function HealthLogForm({ userId }) {
//   const [healthLog, setHealthLog] = useState({
//     mealId: null,
//     exerciseId: null,
//     weight: "",
//     sleep: "",
//     waterIntake: "",
//     bpSystolic: "",
//     bpDiastolic: "",
//     heartRate: "",
//     calories: 0,
//     protein: 0,
//     carbs: 0,
//     fats: 0,
//   });

//   const [recommendations, setRecommendations] = useState({
//     meals: [],
//     exercises: [],
//   });

//   // Fetch AI-generated recommendations
//   const fetchRecommendations = async () => {
//     try {
//       const mealResponse = await fetch(`http://localhost:9090/api/dietRecommendations/${userId}`);
//       const exerciseResponse = await fetch(`http://localhost:9090/api/workoutRecommendations/${userId}`);

//       const meals = mealResponse.ok ? await mealResponse.json() : [];
//       const exercises = exerciseResponse.ok ? await exerciseResponse.json() : [];

//       // Update state with fetched recommendations
//       setRecommendations({
//         meals: Array.isArray(meals) ? meals : [],
//         exercises: Array.isArray(exercises) ? exercises : [],
//       });

//       // Show alert if recommendations are empty
//       if (!meals.length || !exercises.length) {
//         alert("No recommendations available. Please try again later.");
//       }
//     } catch (error) {
//       console.error("Error fetching recommendations:", error.message);
//       alert("An error occurred while fetching recommendations. Please try again later.");
//     }
//   };

//   useEffect(() => {
//     fetchRecommendations();
//   }, []);

//   // Handle form submission
// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const response = await fetch("http://localhost:9090/healthLogs", {
// //         method: "POST",
// //         headers: {
// //           "Content-Type": "application/json",
// //         },
// //         body: JSON.stringify(healthLog),
// //       });
// //       const data = await response.json();

// //       if (response.ok) {
// //         alert(data.response);
// //         // Reset health log state after successful submission
// //         setHealthLog({
// //           mealId: null,
// //           exerciseId: null,
// //           weight: "",
// //           sleep: "",
// //           waterIntake: "",
// //           bpSystolic: "",
// //           bpDiastolic: "",
// //           heartRate: "",
// //           calories: 0,
// //           protein: 0,
// //           carbs: 0,
// //           fats: 0,
// //         });
// //       } else {
// //         alert(data.err);
// //       }
// //     } catch (error) {
// //       console.error("Error submitting health log:", error.message);
// //     }
// //   };

// const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch("http://localhost:9090/healthLogs", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           ...healthLog,
//           userId, // Include userId in the healthLog payload
//         }),
//       });
//       const data = await response.json();
  
//       if (response.ok) {
//         alert(data.response);
//         setHealthLog({
//           mealId: null,
//           exerciseId: null,
//           weight: "",
//           sleep: "",
//           waterIntake: "",
//           bpSystolic: "",
//           bpDiastolic: "",
//           heartRate: "",
//           calories: 0,
//           protein: 0,
//           carbs: 0,
//           fats: 0,
//         });
//       } else {
//         alert(data.err);
//       }
//     } catch (error) {
//       console.error("Error submitting health log:", error.message);
//     }
//   };
  

//   return (
//     <form onSubmit={handleSubmit} className="space-y-6">
//       <MealSelector
//         meals={recommendations.meals}
//         onMealSelect={(meal) => {
//           setHealthLog({
//             ...healthLog,
//             mealId: meal.dietId,
//             calories: meal.caloriesPerDay,
//             protein: meal.proteinPercentage,
//             carbs: meal.carbsPercentage,
//             fats: meal.fatPercentage,
//           });
//         }}
//       />
//       <ExerciseSelector
//         exercises={recommendations.exercises}
//         onExerciseSelect={(exercise) =>
//           setHealthLog({
//             ...healthLog,
//             exerciseId: exercise.workoutId,
//             calories: exercise.caloriesBurned,
//           })
//         }
//       />
//       <MeasurementInputs
//         healthLog={healthLog}
//         onChange={(field, value) =>
//           setHealthLog({ ...healthLog, [field]: value })
//         }
//       />
//       <OptionalInputs
//         healthLog={healthLog}
//         onChange={(field, value) =>
//           setHealthLog({ ...healthLog, [field]: value })
//         }
//       />
//       <button
//         type="submit"
//         className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition"
//       >
//         Submit Health Log
//       </button>
//     </form>
//   );
// }

// "use client";

// import React, { useState, useEffect } from "react";
// import MealSelector from "@/components/HealthLogs/MealSelector";
// import ExerciseSelector from "@/components/HealthLogs/ExerciseSelector";
// import MeasurementInputs from "@/components/HealthLogs/MeasurementInputs";
// import OptionalInputs from "@/components/HealthLogs/OptionalInputs";

// export default function HealthLogForm({ userId }) {
//   const [healthLog, setHealthLog] = useState({
//     breakfast: null,
//     lunch: null,
//     dinner: null,
//     exerciseId: null,
//     weight: "",
//     sleep: "",
//     waterIntake: "",
//     bpSystolic: "",
//     bpDiastolic: "",
//     heartRate: "",
//     calories: 0,
//     protein: 0,
//     carbs: 0,
//     fats: 0,
//   });

//   const [recommendations, setRecommendations] = useState({
//     meals: [],
//     exercises: [],
//   });

//   // Fetch recommendations
//   const fetchRecommendations = async () => {
//     try {
//       const mealResponse = await fetch(`http://localhost:9090/api/dietRecommendations/${userId}`);
//       const exerciseResponse = await fetch(`http://localhost:9090/api/workoutRecommendations/${userId}`);

//       const meals = mealResponse.ok ? await mealResponse.json() : [];
//       const exercises = exerciseResponse.ok ? await exerciseResponse.json() : [];

//       setRecommendations({
//         meals: Array.isArray(meals) ? meals : [],
//         exercises: Array.isArray(exercises) ? exercises : [],
//       });
//     } catch (error) {
//       console.error("Error fetching recommendations:", error.message);
//       alert("An error occurred while fetching recommendations. Please try again later.");
//     }
//   };

//   useEffect(() => {
//     fetchRecommendations();
//   }, []);

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch("http://localhost:9090/healthLogs", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           ...healthLog,
//           userId, // Include userId in the healthLog payload
//         }),
//       });

//       const data = await response.json();
//       if (response.ok) {
//         alert(data.response);
//         setHealthLog({
//           breakfast: null,
//           lunch: null,
//           dinner: null,
//           exerciseId: null,
//           weight: "",
//           sleep: "",
//           waterIntake: "",
//           bpSystolic: "",
//           bpDiastolic: "",
//           heartRate: "",
//           calories: 0,
//           protein: 0,
//           carbs: 0,
//           fats: 0,
//         });
//       } else {
//         alert(data.err);
//       }
//     } catch (error) {
//       console.error("Error submitting health log:", error.message);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="space-y-6">
//       <MealSelector
//         meals={recommendations.meals}
//         onMealSelect={(mealType, meal) => {
//           setHealthLog({
//             ...healthLog,
//             [mealType]: meal,
//           });
//         }}
//       />
//       <ExerciseSelector
//         exercises={recommendations.exercises}
//         onExerciseSelect={(exercise) =>
//           setHealthLog({ ...healthLog, exerciseId: exercise.workoutId })
//         }
//       />
//       <MeasurementInputs
//         healthLog={healthLog}
//         onChange={(field, value) =>
//           setHealthLog({ ...healthLog, [field]: value })
//         }
//       />
//       <OptionalInputs
//         healthLog={healthLog}
//         onChange={(field, value) =>
//           setHealthLog({ ...healthLog, [field]: value })
//         }
//       />
//       <button
//         type="submit"
//         className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition"
//       >
//         Submit Health Log
//       </button>
//     </form>
//   );
// }

// "use client";

// import React, { useState, useEffect } from "react";
// import MealSelector from "@/components/HealthLogs/MealSelector";
// import ExerciseSelector from "@/components/HealthLogs/ExerciseSelector";
// import MeasurementInputs from "@/components/HealthLogs/MeasurementInputs";
// import OptionalInputs from "@/components/HealthLogs/OptionalInputs";

// export default function HealthLogForm({ userId }) {
//   const [healthLog, setHealthLog] = useState({
//     breakfast: null,
//     lunch: null,
//     dinner: null,
//     exerciseId: null,
//     weight: "",
//     sleep: "",
//     waterIntake: "",
//     bpSystolic: "",
//     bpDiastolic: "",
//     heartRate: "",
//     calories: 0,
//     protein: 0,
//     carbs: 0,
//     fats: 0,
//   });

//   const [recommendations, setRecommendations] = useState({
//     meals: [],
//     exercises: [],
//   });

//   // Fetch recommendations
//   const fetchRecommendations = async () => {
//     try {
//       const mealResponse = await fetch(`http://localhost:9090/api/dietRecommendations/${userId}`);
//       const exerciseResponse = await fetch(`http://localhost:9090/api/workoutRecommendations/${userId}`);

//       const meals = mealResponse.ok ? await mealResponse.json() : [];
//       const exercises = exerciseResponse.ok ? await exerciseResponse.json() : [];

//       setRecommendations({
//         meals: Array.isArray(meals) ? meals : [],
//         exercises: Array.isArray(exercises) ? exercises : [],
//       });
//     } catch (error) {
//       console.error("Error fetching recommendations:", error.message);
//       alert("An error occurred while fetching recommendations. Please try again later.");
//     }
//   };

//   useEffect(() => {
//     fetchRecommendations();
//   }, []);

//   // Handle meal selection
//   const handleMealSelect = (mealType, meal) => {
//     if (meal) {
//       // Add the nutritional values of the selected meal to the healthLog
//       setHealthLog((prevHealthLog) => ({
//         ...prevHealthLog,
//         [mealType]: meal.dietId, // Store meal ID for the selected meal type
//         calories: prevHealthLog.calories + meal.caloriesPerDay, // Accumulate total calories
//         protein: prevHealthLog.protein + meal.proteinPercentage, // Accumulate total protein
//         carbs: prevHealthLog.carbs + meal.carbsPercentage, // Accumulate total carbs
//         fats: prevHealthLog.fats + meal.fatPercentage, // Accumulate total fats
//       }));
//     } else {
//       // If the meal is unselected, reset macros for that type
//       setHealthLog((prevHealthLog) => ({
//         ...prevHealthLog,
//         [mealType]: null,
//       }));
//     }
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch("http://localhost:9090/healthLogs", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           ...healthLog,
//           userId, // Include userId in the healthLog payload
//         }),
//       });

//       const data = await response.json();
//       if (response.ok) {
//         alert(data.response);
//         setHealthLog({
//           breakfast: null,
//           lunch: null,
//           dinner: null,
//           exerciseId: null,
//           weight: "",
//           sleep: "",
//           waterIntake: "",
//           bpSystolic: "",
//           bpDiastolic: "",
//           heartRate: "",
//           calories: 0,
//           protein: 0,
//           carbs: 0,
//           fats: 0,
//         });
//       } else {
//         alert(data.err);
//       }
//     } catch (error) {
//       console.error("Error submitting health log:", error.message);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="space-y-6">
//       <MealSelector
//         meals={recommendations.meals}
//         onMealSelect={handleMealSelect} // Pass the updated meal selection handler
//       />
//       <ExerciseSelector
//         exercises={recommendations.exercises}
//         onExerciseSelect={(exercise) =>
//           setHealthLog((prevHealthLog) => ({
//             ...prevHealthLog,
//             exerciseId: exercise.workoutId,
//           }))
//         }
//       />
//       <MeasurementInputs
//         healthLog={healthLog}
//         onChange={(field, value) =>
//           setHealthLog((prevHealthLog) => ({ ...prevHealthLog, [field]: value }))
//         }
//       />
//       <OptionalInputs
//         healthLog={healthLog}
//         onChange={(field, value) =>
//           setHealthLog((prevHealthLog) => ({ ...prevHealthLog, [field]: value }))
//         }
//       />
//       <button
//         type="submit"
//         className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition"
//       >
//         Submit Health Log
//       </button>
//     </form>
//   );
// }
"use client";

import React, { useState, useEffect } from "react";
import MealSelector from "@/components/HealthLogs/MealSelector";
import ExerciseSelector from "@/components/HealthLogs/ExerciseSelector";
import MeasurementInputs from "@/components/HealthLogs/MeasurementInputs";
import OptionalInputs from "@/components/HealthLogs/OptionalInputs";

export default function HealthLogForm({ userId, onDisplayLogs, onLogSubmitted }) {
  const [healthLog, setHealthLog] = useState({
    breakfast: null,
    lunch: null,
    dinner: null,
    exerciseId: null,
    weight: "",
    sleep: "",
    waterIntake: "",
    bpSystolic: "",
    bpDiastolic: "",
    heartRate: "",
    calories: 0,
    protein: 0,
    carbs: 0,
    fats: 0,
  });

  const [recommendations, setRecommendations] = useState({
    meals: [],
    exercises: [],
  });

  // Fetch meal and exercise recommendations
  const fetchRecommendations = async () => {
    try {
      const mealResponse = await fetch(`http://localhost:9090/api/dietRecommendations/${userId}`);
      const exerciseResponse = await fetch(`http://localhost:9090/api/workoutRecommendations/${userId}`);

      const meals = mealResponse.ok ? await mealResponse.json() : [];
      const exercises = exerciseResponse.ok ? await exerciseResponse.json() : [];

      setRecommendations({
        meals: Array.isArray(meals) ? meals : [],
        exercises: Array.isArray(exercises) ? exercises : [],
      });
    } catch (error) {
      console.error("Error fetching recommendations:", error.message);
      alert("An error occurred while fetching recommendations. Please try again later.");
    }
  };

  useEffect(() => {
    fetchRecommendations();
  }, []);

  // Handle meal selection
  const handleMealSelect = (mealType, meal) => {
    if (meal) {
      setHealthLog((prevHealthLog) => ({
        ...prevHealthLog,
        [mealType]: meal.dietId,
        calories: prevHealthLog.calories + meal.caloriesPerDay,
        protein: prevHealthLog.protein + meal.proteinPercentage,
        carbs: prevHealthLog.carbs + meal.carbsPercentage,
        fats: prevHealthLog.fats + meal.fatPercentage,
      }));
    } else {
      setHealthLog((prevHealthLog) => ({
        ...prevHealthLog,
        [mealType]: null,
      }));
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:9090/healthLogs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...healthLog,
          userId, // Include userId in the payload
        }),
      });

      const data = await response.json();
      if (response.ok) {
        alert(data.response);
        setHealthLog({
          breakfast: null,
          lunch: null,
          dinner: null,
          exerciseId: null,
          weight: "",
          sleep: "",
          waterIntake: "",
          bpSystolic: "",
          bpDiastolic: "",
          heartRate: "",
          calories: 0,
          protein: 0,
          carbs: 0,
          fats: 0,
        });
        onLogSubmitted(); // Refresh logs after submission
      } else {
        alert(data.err);
      }
    } catch (error) {
      console.error("Error submitting health log:", error.message);
    }
  };

  return (
    <form className="space-y-6">
      <MealSelector meals={recommendations.meals} onMealSelect={handleMealSelect} />
      <ExerciseSelector
        exercises={recommendations.exercises}
        onExerciseSelect={(exercise) =>
          setHealthLog((prevHealthLog) => ({
            ...prevHealthLog,
            exerciseId: exercise.workoutId,
          }))
        }
      />
      <MeasurementInputs
        healthLog={healthLog}
        onChange={(field, value) =>
          setHealthLog((prevHealthLog) => ({ ...prevHealthLog, [field]: value }))
        }
      />
      <OptionalInputs
        healthLog={healthLog}
        onChange={(field, value) =>
          setHealthLog((prevHealthLog) => ({ ...prevHealthLog, [field]: value }))
        }
      />
      <div className="flex justify-center gap-4 mt-4">
  <button
    type="submit"
    className="bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600 transition"
    onClick={handleSubmit}
  >
    Submit Health Log
  </button>
  <button
    type="button"
    className="bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600 transition"
    onClick={onDisplayLogs}
  >
    Display All Health Logs
  </button>
</div>

    </form>
  );
}

