// import React from "react";

// export default function MealSelector({ meals, onMealSelect }) {
//   return (
//     <div>
//       <label className="block text-sm font-medium text-gray-700">
//         Select a Meal
//       </label>
//       <select
//         className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
//         onChange={(e) => {
//           const selectedMeal = meals.find((meal) => meal.id === +e.target.value);
//           onMealSelect(selectedMeal);
//         }}
//       >
//         <option value="">-- Choose a Meal --</option>
//         {meals.map((meal) => (
//           <option key={meal.id} value={meal.id}>
//             {meal.diet_name} ({meal.meal_type})
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// }
// import React from "react";

// export default function MealSelector({ meals, onMealSelect }) {
//   const breakfastOptions = meals.filter((meal) => meal.mealType === "breakfast");
//   const lunchOptions = meals.filter((meal) => meal.mealType === "lunch");
//   const dinnerOptions = meals.filter((meal) => meal.mealType === "dinner");

//   return (
//     <div>
//       <label className="block text-sm font-medium text-gray-700">
//         Select Meals
//       </label>
//       <div className="grid grid-cols-3 gap-4">
//         {/* Breakfast Selector */}
//         <div>
//           <label className="block text-sm font-medium text-gray-700">Breakfast</label>
//           <select
//             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
//             onChange={(e) => {
//               const selectedMeal = breakfastOptions.find(
//                 (meal) => meal.dietId === +e.target.value
//               );
//               onMealSelect("breakfast", selectedMeal);
//             }}
//           >
//             <option value="">-- Choose Breakfast --</option>
//             {breakfastOptions.map((meal) => (
//               <option key={meal.dietId} value={meal.dietId}>
//                 {meal.dietName}
//               </option>
//             ))}
//           </select>
//         </div>

//         {/* Lunch Selector */}
//         <div>
//           <label className="block text-sm font-medium text-gray-700">Lunch</label>
//           <select
//             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
//             onChange={(e) => {
//               const selectedMeal = lunchOptions.find(
//                 (meal) => meal.dietId === +e.target.value
//               );
//               onMealSelect("lunch", selectedMeal);
//             }}
//           >
//             <option value="">-- Choose Lunch --</option>
//             {lunchOptions.map((meal) => (
//               <option key={meal.dietId} value={meal.dietId}>
//                 {meal.dietName}
//               </option>
//             ))}
//           </select>
//         </div>

//         {/* Dinner Selector */}
//         <div>
//           <label className="block text-sm font-medium text-gray-700">Dinner</label>
//           <select
//             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
//             onChange={(e) => {
//               const selectedMeal = dinnerOptions.find(
//                 (meal) => meal.dietId === +e.target.value
//               );
//               onMealSelect("dinner", selectedMeal);
//             }}
//           >
//             <option value="">-- Choose Dinner --</option>
//             {dinnerOptions.map((meal) => (
//               <option key={meal.dietId} value={meal.dietId}>
//                 {meal.dietName}
//               </option>
//             ))}
//           </select>
//         </div>
//       </div>
//     </div>
//   );
// }
// import React from "react";

// export default function MealSelector({ meals, onMealSelect }) {
//   // Filter meal options based on type
//   const breakfastOptions = meals.filter((meal) => meal.mealType === "breakfast");
//   const lunchOptions = meals.filter((meal) => meal.mealType === "lunch");
//   const dinnerOptions = meals.filter((meal) => meal.mealType === "dinner");

//   return (
//     <div>
//       <label className="block text-sm font-medium text-gray-700">
//         Select Meals
//       </label>
//       <div className="grid grid-cols-3 gap-4">
//         {/* Breakfast Selector */}
//         <div>
//           <label className="block text-sm font-medium text-gray-700">Breakfast</label>
//           <select
//             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
//             onChange={(e) => {
//               const selectedMeal = breakfastOptions.find(
//                 (meal) => meal.dietId === +e.target.value
//               );
//               onMealSelect("breakfast", selectedMeal || null); // Pass null if no selection
//             }}
//           >
//             <option value="">-- Choose Breakfast --</option>
//             {breakfastOptions.map((meal) => (
//               <option key={meal.dietId} value={meal.dietId}>
//                 {meal.dietName} - {meal.caloriesPerDay} kcal
//               </option>
//             ))}
//           </select>
//         </div>

//         {/* Lunch Selector */}
//         <div>
//           <label className="block text-sm font-medium text-gray-700">Lunch</label>
//           <select
//             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
//             onChange={(e) => {
//               const selectedMeal = lunchOptions.find(
//                 (meal) => meal.dietId === +e.target.value
//               );
//               onMealSelect("lunch", selectedMeal || null); // Pass null if no selection
//             }}
//           >
//             <option value="">-- Choose Lunch --</option>
//             {lunchOptions.map((meal) => (
//               <option key={meal.dietId} value={meal.dietId}>
//                 {meal.dietName} - {meal.caloriesPerDay} kcal
//               </option>
//             ))}
//           </select>
//         </div>

//         {/* Dinner Selector */}
//         <div>
//           <label className="block text-sm font-medium text-gray-700">Dinner</label>
//           <select
//             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
//             onChange={(e) => {
//               const selectedMeal = dinnerOptions.find(
//                 (meal) => meal.dietId === +e.target.value
//               );
//               onMealSelect("dinner", selectedMeal || null); // Pass null if no selection
//             }}
//           >
//             <option value="">-- Choose Dinner --</option>
//             {dinnerOptions.map((meal) => (
//               <option key={meal.dietId} value={meal.dietId}>
//                 {meal.dietName} - {meal.caloriesPerDay} kcal
//               </option>
//             ))}
//           </select>
//         </div>
//       </div>
//     </div>
//   );
// }
export default function MealSelector({ meals, onMealSelect, error }) {
  // Filter meal options based on type
  const breakfastOptions = meals.filter((meal) => meal.mealType === "breakfast");
  const lunchOptions = meals.filter((meal) => meal.mealType === "lunch");
  const dinnerOptions = meals.filter((meal) => meal.mealType === "dinner");

  return (
    <div>
      {/* Label with mandatory indicator */}
      <label className="block text-sm font-medium text-gray-700">
        Select Meals <span className="text-red-500">*</span>
      </label>

      {/* Error message for meals */}
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}

      {/* Breakfast Selector */}
      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700">
          Breakfast
        </label>
        <select
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
          onChange={(e) => {
            const selectedMeal = breakfastOptions.find(
              (meal) => meal.dietId === +e.target.value
            );
            onMealSelect("breakfast", selectedMeal || null); // Pass null if no selection
          }}
        >
          <option value="">-- Choose Breakfast --</option>
          {breakfastOptions.map((meal) => (
            <option key={meal.dietId} value={meal.dietId}>
              {meal.dietName} - {meal.caloriesPerDay} kcal
            </option>
          ))}
        </select>
      </div>

      {/* Lunch Selector */}
      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700">
          Lunch
        </label>
        <select
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
          onChange={(e) => {
            const selectedMeal = lunchOptions.find(
              (meal) => meal.dietId === +e.target.value
            );
            onMealSelect("lunch", selectedMeal || null); // Pass null if no selection
          }}
        >
          <option value="">-- Choose Lunch --</option>
          {lunchOptions.map((meal) => (
            <option key={meal.dietId} value={meal.dietId}>
              {meal.dietName} - {meal.caloriesPerDay} kcal
            </option>
          ))}
        </select>
      </div>

      {/* Dinner Selector */}
      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700">
          Dinner
        </label>
        <select
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
          onChange={(e) => {
            const selectedMeal = dinnerOptions.find(
              (meal) => meal.dietId === +e.target.value
            );
            onMealSelect("dinner", selectedMeal || null); // Pass null if no selection
          }}
        >
          <option value="">-- Choose Dinner --</option>
          {dinnerOptions.map((meal) => (
            <option key={meal.dietId} value={meal.dietId}>
              {meal.dietName} - {meal.caloriesPerDay} kcal
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
