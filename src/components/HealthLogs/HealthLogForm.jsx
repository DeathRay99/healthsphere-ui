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
// "use client";

// import React, { useState, useEffect } from "react";
// import MealSelector from "@/components/HealthLogs/MealSelector";
// import ExerciseSelector from "@/components/HealthLogs/ExerciseSelector";
// import MeasurementInputs from "@/components/HealthLogs/MeasurementInputs";

// export default function HealthLogForm({ userId, onDisplayLogs, onLogSubmitted }) {
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

//   const [errors, setErrors] = useState({});

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

//   const validateForm = () => {
//     const { breakfast, lunch, dinner, exerciseId, weight, sleep, waterIntake, bpSystolic, bpDiastolic, heartRate } = healthLog;
//     const newErrors = {};

//     if (!breakfast && !lunch && !dinner) {
//       newErrors.meals = "Please select at least one meal (breakfast, lunch, or dinner).";
//     }
//     if (!exerciseId) {
//       newErrors.exerciseId = "Please select an exercise.";
//     }

//     const requiredMeasurements = ["weight", "sleep", "waterIntake", "bpSystolic", "bpDiastolic", "heartRate"];
//     requiredMeasurements.forEach((field) => {
//       if (!healthLog[field] || healthLog[field].trim() === "") {
//         newErrors[field] = `${field} is required.`;
//       }
//     });

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0; // Return true if no errors
//   };

//   const handleMealSelect = (mealType, meal) => {
//     setHealthLog((prevHealthLog) => ({
//       ...prevHealthLog,
//       [mealType]: meal ? meal.dietId : null,
//       calories: meal ? prevHealthLog.calories + meal.caloriesPerDay : prevHealthLog.calories,
//       protein: meal ? prevHealthLog.protein + meal.proteinPercentage : prevHealthLog.protein,
//       carbs: meal ? prevHealthLog.carbs + meal.carbsPercentage : prevHealthLog.carbs,
//       fats: meal ? prevHealthLog.fats + meal.fatPercentage : prevHealthLog.fats,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!validateForm()) return;

//     try {
//       const response = await fetch("http://localhost:9090/healthLogs", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           ...healthLog,
//           userId,
//         }),
//       });

//       const contentType = response.headers.get("Content-Type");
//       if (!response.ok) {
//         let errorMessage = "An unexpected error occurred.";
//         if (contentType && contentType.includes("application/json")) {
//           const errorData = await response.json();
//           errorMessage = errorData.err || errorMessage;
//         } else {
//           errorMessage = await response.text();
//         }
//         throw new Error(errorMessage);
//       }

//       const data = await response.json();
//       alert(data.response || "Health log submitted successfully!");
//       setHealthLog({
//         breakfast: null,
//         lunch: null,
//         dinner: null,
//         exerciseId: null,
//         weight: "",
//         sleep: "",
//         waterIntake: "",
//         bpSystolic: "",
//         bpDiastolic: "",
//         heartRate: "",
//         calories: 0,
//         protein: 0,
//         carbs: 0,
//         fats: 0,
//       });
//       onLogSubmitted();
//     } catch (error) {
//       console.error("Error submitting health log:", error.message);
//       alert(error.message);
//     }
//   };

//   return (
//     <form className="space-y-6">
//       <MealSelector meals={recommendations.meals} onMealSelect={handleMealSelect} error={errors.meals} />
//       <ExerciseSelector
//         exercises={recommendations.exercises}
//         onExerciseSelect={(exercise) =>
//           setHealthLog((prevHealthLog) => ({
//             ...prevHealthLog,
//             exerciseId: exercise?.workoutId || null,
//           }))
//         }
//         error={errors.exerciseId}
//       />
//       <MeasurementInputs
//         healthLog={healthLog}
//         onChange={(field, value) =>
//           setHealthLog((prevHealthLog) => ({ ...prevHealthLog, [field]: value }))
//         }
//         errors={errors}
//       />
//       <div className="flex justify-center gap-4 mt-4">
//         <button
//           type="submit"
//           className="bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600 transition"
//           onClick={handleSubmit}
//         >
//           Submit Health Log
//         </button>
//         <button
//           type="button"
//           className="bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600 transition"
//           onClick={onDisplayLogs}
//         >
//           Display All Health Logs
//         </button>
//       </div>
//     </form>
//   );
// }
// "use client";

// import React, { useState, useEffect } from "react";
// import MealSelector from "@/components/HealthLogs/MealSelector";
// import ExerciseSelector from "@/components/HealthLogs/ExerciseSelector";
// import MeasurementInputs from "@/components/HealthLogs/MeasurementInputs";

// export default function HealthLogForm({ userId, onDisplayLogs, onLogSubmitted }) {
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

//   const [errors, setErrors] = useState({});

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

//   const validateForm = () => {
//     const { breakfast, lunch, dinner, exerciseId, weight, sleep, waterIntake, bpSystolic, bpDiastolic, heartRate } = healthLog;
//     const newErrors = {};

//     if (!breakfast && !lunch && !dinner) {
//       newErrors.meals = "Please select at least one meal (breakfast, lunch, or dinner).";
//     }
//     if (!exerciseId) {
//       newErrors.exerciseId = "Please select an exercise.";
//     }

//     const requiredMeasurements = ["weight", "sleep", "waterIntake", "bpSystolic", "bpDiastolic", "heartRate"];
//     requiredMeasurements.forEach((field) => {
//       if (!healthLog[field] || healthLog[field].trim() === "") {
//         newErrors[field] = `${field} is required.`;
//       }
//     });

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0; // Return true if no errors
//   };

//   const handleMealSelect = (mealType, meal) => {
//     setHealthLog((prevHealthLog) => ({
//       ...prevHealthLog,
//       [mealType]: meal ? meal.dietId : null,
//       calories: meal ? prevHealthLog.calories + meal.caloriesPerDay : prevHealthLog.calories,
//       protein: meal ? prevHealthLog.protein + meal.proteinPercentage : prevHealthLog.protein,
//       carbs: meal ? prevHealthLog.carbs + meal.carbsPercentage : prevHealthLog.carbs,
//       fats: meal ? prevHealthLog.fats + meal.fatPercentage : prevHealthLog.fats,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!validateForm()) return;

//     try {
//       const response = await fetch("http://localhost:9090/healthLogs", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           ...healthLog,
//           userId,
//         }),
//       });

//       const contentType = response.headers.get("Content-Type");
//       if (!response.ok) {
//         let errorMessage = "An unexpected error occurred.";
//         if (contentType && contentType.includes("application/json")) {
//           const errorData = await response.json();
//           errorMessage = errorData.err || errorMessage;
//         } else {
//           errorMessage = await response.text();
//         }
//         throw new Error(errorMessage);
//       }

//       const data = await response.json();
//       alert(data.response || "Health log submitted successfully!");
//       setHealthLog({
//         breakfast: null,
//         lunch: null,
//         dinner: null,
//         exerciseId: null,
//         weight: "",
//         sleep: "",
//         waterIntake: "",
//         bpSystolic: "",
//         bpDiastolic: "",
//         heartRate: "",
//         calories: 0,
//         protein: 0,
//         carbs: 0,
//         fats: 0,
//       });
//       onLogSubmitted();
//     } catch (error) {
//       console.error("Error submitting health log:", error.message);
//       alert(error.message);
//     }
//   };

//   return (
//     <form className="space-y-6">
//       <MealSelector meals={recommendations.meals} onMealSelect={handleMealSelect} error={errors.meals} />
//       <ExerciseSelector
//         exercises={recommendations.exercises}
//         onExerciseSelect={(exercise) =>
//           setHealthLog((prevHealthLog) => ({
//             ...prevHealthLog,
//             exerciseId: exercise?.workoutId || null,
//           }))
//         }
//         error={errors.exerciseId}
//       />
//       <MeasurementInputs
//         healthLog={healthLog}
//         onChange={(field, value) =>
//           setHealthLog((prevHealthLog) => ({ ...prevHealthLog, [field]: value }))
//         }
//         errors={errors}
//       />
//       <div className="flex justify-center gap-4 mt-4">
//         <button
//           type="submit"
//           className="bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600 transition"
//           onClick={handleSubmit}
//         >
//           Submit Health Log
//         </button>
//         <button
//           type="button"
//           className="bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600 transition"
//           onClick={onDisplayLogs}
//         >
//           Display All Health Logs
//         </button>
//       </div>
//     </form>
//   );
// }


"use client";

import React, { useState, useEffect } from "react";
import MealSelector from "@/components/HealthLogs/MealSelector";
import ExerciseSelector from "@/components/HealthLogs/ExerciseSelector";
import MeasurementInputs from "@/components/HealthLogs/MeasurementInputs";
import OptionalInputs from "@/components/HealthLogs/OptionalInputs"; // Imported OptionalInputs component

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
    bodyFat: "",
    calories: 0,
    protein: 0,
    carbs: 0,
    fats: 0,
  });

  const [recommendations, setRecommendations] = useState({
    meals: [],
    exercises: [],
  });

  const [errors, setErrors] = useState({});

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

  const validateForm = () => {
    const { breakfast, lunch, dinner, exerciseId, weight, sleep, waterIntake } = healthLog;
    const newErrors = {};

    // Ensure at least one meal is selected
    if (!breakfast && !lunch && !dinner) {
      newErrors.meals = "Please select at least one meal (breakfast, lunch, or dinner).";
    }

    // Ensure an exercise is selected
    if (!exerciseId) {
      newErrors.exerciseId = "Please select an exercise.";
    }

    // Ensure all required measurements are filled out
    const requiredFields = ["weight", "sleep", "waterIntake"];
    requiredFields.forEach((field) => {
      if (!healthLog[field] || healthLog[field].trim() === "") {
        newErrors[field] = `${field} is required.`;
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleMealSelect = (mealType, meal) => {
    setHealthLog((prevHealthLog) => ({
      ...prevHealthLog,
      [mealType]: meal ? meal.dietId : null,
      calories: meal ? prevHealthLog.calories + meal.caloriesPerDay : prevHealthLog.calories,
      protein: meal ? prevHealthLog.protein + meal.proteinPercentage : prevHealthLog.protein,
      carbs: meal ? prevHealthLog.carbs + meal.carbsPercentage : prevHealthLog.carbs,
      fats: meal ? prevHealthLog.fats + meal.fatPercentage : prevHealthLog.fats,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const response = await fetch("http://localhost:9090/healthLogs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...healthLog,
          userId,
        }),
      });

      const contentType = response.headers.get("Content-Type");
      if (!response.ok) {
        let errorMessage = "An unexpected error occurred.";
        if (contentType && contentType.includes("application/json")) {
          const errorData = await response.json();
          errorMessage = errorData.err || errorMessage;
        } else {
          errorMessage = await response.text();
        }
        throw new Error(errorMessage);
      }

      const data = await response.json();
      alert(data.response || "Health log submitted successfully!");
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
        bodyFat: "",
        calories: 0,
        protein: 0,
        carbs: 0,
        fats: 0,
      });
      onLogSubmitted();
    } catch (error) {
      console.error("Error submitting health log:", error.message);
      alert(error.message);
    }
  };

  return (
    <form className="space-y-6">
      {/* Meal Selector */}
      <MealSelector meals={recommendations.meals} onMealSelect={handleMealSelect} error={errors.meals} />

      {/* Exercise Selector */}
      <ExerciseSelector
        exercises={recommendations.exercises}
        onExerciseSelect={(exercise) =>
          setHealthLog((prevHealthLog) => ({
            ...prevHealthLog,
            exerciseId: exercise?.workoutId || null,
          }))
        }
        error={errors.exerciseId}
      />

      {/* Measurement Inputs */}
      <MeasurementInputs
        healthLog={healthLog}
        onChange={(field, value) =>
          setHealthLog((prevHealthLog) => ({ ...prevHealthLog, [field]: value }))
        }
        errors={errors}
      />

      {/* Optional Inputs */}
      <OptionalInputs
        healthLog={healthLog}
        onChange={(field, value) =>
          setHealthLog((prevHealthLog) => ({ ...prevHealthLog, [field]: value }))
        }
      />

      {/* Buttons */}
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
