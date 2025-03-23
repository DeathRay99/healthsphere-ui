// import React from "react";

// export default function MeasurementInputs({ healthLog, onChange }) {
//   return (
//     <div>
//       <label className="block text-sm font-medium text-gray-700">
//         Measurements
//       </label>
//       <div className="grid grid-cols-3 gap-4">
//         <input
//           type="number"
//           placeholder="Weight (kg)"
//           value={healthLog.weight}
//           onChange={(e) => onChange("weight", e.target.value)}
//           className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
//         />
//         <input
//           type="number"
//           placeholder="Sleep (hours)"
//           value={healthLog.sleep}
//           onChange={(e) => onChange("sleep", e.target.value)}
//           className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
//         />
//         <input
//           type="number"
//           placeholder="Water Intake (liters)"
//           value={healthLog.waterIntake}
//           onChange={(e) => onChange("waterIntake", e.target.value)}
//           className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
//         />
//       </div>
//     </div>
//   );
// }
import React from "react";

export default function MeasurementInputs({ healthLog, onChange }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">
        Measurements
      </label>
      <div className="grid grid-cols-3 gap-4">
        <input
          type="number"
          placeholder="Weight (kg)"
          value={healthLog.weight || ""}
          onChange={(e) => {
            const value = Math.max(0, Math.min(300, e.target.value)); // Restrict range
            onChange("weight", value);
          }}
          aria-label="Enter weight in kilograms"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
        />
        {healthLog.weight > 300 && (
          <p className="text-red-500 text-sm">Weight cannot exceed 300 kg.</p>
        )}
        <input
          type="number"
          placeholder="Sleep (hours)"
          value={healthLog.sleep || ""}
          onChange={(e) => {
            const value = Math.max(0, Math.min(24, e.target.value)); // Restrict range
            onChange("sleep", value);
          }}
          aria-label="Enter sleep hours"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
        />
        <input
          type="number"
          placeholder="Water Intake (liters)"
          value={healthLog.waterIntake || ""}
          onChange={(e) => {
            const value = Math.max(0, Math.min(10, e.target.value)); // Restrict range
            onChange("waterIntake", value);
          }}
          aria-label="Enter water intake in liters"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
        />
      </div>
    </div>
  );
}
