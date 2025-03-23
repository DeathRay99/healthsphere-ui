// import React from "react";

// export default function ExerciseSelector({ exercises, onExerciseSelect }) {
//   return (
//     <div>
//       <label className="block text-sm font-medium text-gray-700">
//         Select an Exercise
//       </label>
//       <select
//         className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
//         onChange={(e) => {
//           const selectedExercise = exercises.find(
//             (exercise) => exercise.id === +e.target.value
//           );
//           onExerciseSelect(selectedExercise);
//         }}
//       >
//         <option value="">-- Choose an Exercise --</option>
//         {exercises.map((exercise) => (
//           <option key={exercise.id} value={exercise.id}>
//             {exercise.workout_name} ({exercise.exercise_type})
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// }
export default function ExerciseSelector({ exercises, onExerciseSelect }) {
    return (
      <div>
        <label className="block text-sm font-medium text-gray-700">Select an Exercise</label>
        <select
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
          onChange={(e) => {
            const selectedExercise = exercises.find((exercise) => exercise.workoutId === +e.target.value);
            onExerciseSelect(selectedExercise);
          }}
        >
          <option value="">-- Choose an Exercise --</option>
          {exercises.map((exercise) => (
            <option key={exercise.workoutId} value={exercise.workoutId}>
              {exercise.workoutName} ({exercise.exerciseType})
            </option>
          ))}
        </select>
      </div>
    );
  }
  