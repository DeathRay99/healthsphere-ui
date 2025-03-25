
// export default function ExerciseSelector({ exercises, onExerciseSelect }) {
//     return (
//       <div>
//         <label className="block text-sm font-medium text-gray-700">Select an Exercise</label>
//         <select
//           className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
//           onChange={(e) => {
//             const selectedExercise = exercises.find((exercise) => exercise.workoutId === +e.target.value);
//             onExerciseSelect(selectedExercise);
//           }}
//         >
//           <option value="">-- Choose an Exercise --</option>
//           {exercises.map((exercise) => (
//             <option key={exercise.workoutId} value={exercise.workoutId}>
//               {exercise.workoutName} ({exercise.exerciseType})
//             </option>
//           ))}
//         </select>
//       </div>
//     );
//   }
export default function ExerciseSelector({ exercises, onExerciseSelect, error }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">
        Select an Exercise <span className="text-red-500">*</span>
      </label>
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
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}
