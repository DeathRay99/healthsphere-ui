// import React from "react";

// export default function OptionalInputs({ healthLog, onChange }) {
//   return (
//     <div>
//       <label className="block text-sm font-medium text-gray-700">
//         Optional Inputs
//       </label>
//       <div className="grid grid-cols-3 gap-4">
//         <input
//           type="number"
//           placeholder="BP (Systolic)"
//           value={healthLog.bpSystolic || ""}
//           onChange={(e) => onChange("bpSystolic", e.target.value)}
//           className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
//         />
//         <input
//           type="number"
//           placeholder="BP (Diastolic)"
//           value={healthLog.bpDiastolic || ""}
//           onChange={(e) => onChange("bpDiastolic", e.target.value)}
//           className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
//         />
//         <input
//           type="number"
//           placeholder="Heart Rate (bpm)"
//           value={healthLog.heartRate || ""}
//           onChange={(e) => onChange("heartRate", e.target.value)}
//           className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
//         />
//         <input
//           type="number"
//           placeholder="Body Fat (%)"
//           value={healthLog.bodyFat || ""}
//           onChange={(e) => onChange("bodyFat", e.target.value)}
//           className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
//         />
//         <input
//           type="number"
//           placeholder="Sleep (hours)"
//           value={healthLog.sleep || ""}
//           onChange={(e) => onChange("sleep", e.target.value)}
//           className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
//         />
//         <input
//           type="number"
//           placeholder="Water Intake (liters)"
//           value={healthLog.waterIntake || ""}
//           onChange={(e) => onChange("waterIntake", e.target.value)}
//           className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
//         />
//       </div>
//     </div>
//   );
// }
import React from "react";

export default function OptionalInputs({ healthLog, onChange }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">
        Optional Inputs
      </label>
      <div className="grid grid-cols-3 gap-4">
        <input
          type="number"
          placeholder="BP (Systolic)"
          value={healthLog.bpSystolic || ""}
          onChange={(e) => {
            const value = Math.max(50, Math.min(200, e.target.value)); // Restrict range
            onChange("bpSystolic", value);
          }}
          aria-label="Enter systolic blood pressure in mmHg"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
        />
        {healthLog.bpSystolic < 50 && (
          <p className="text-red-500 text-sm">Systolic BP cannot be lower than 50 mmHg.</p>
        )}
        <input
          type="number"
          placeholder="BP (Diastolic)"
          value={healthLog.bpDiastolic || ""}
          onChange={(e) => {
            const value = Math.max(30, Math.min(120, e.target.value)); // Restrict range
            onChange("bpDiastolic", value);
          }}
          aria-label="Enter diastolic blood pressure in mmHg"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
        />
        <input
          type="number"
          placeholder="Heart Rate (bpm)"
          value={healthLog.heartRate || ""}
          onChange={(e) => {
            const value = Math.max(40, Math.min(220, e.target.value)); // Restrict range
            onChange("heartRate", value);
          }}
          aria-label="Enter heart rate in beats per minute"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
        />
        <input
          type="number"
          placeholder="Body Fat (%)"
          value={healthLog.bodyFat || ""}
          onChange={(e) => {
            const value = Math.max(0, Math.min(100, e.target.value)); // Restrict range
            onChange("bodyFat", value);
          }}
          aria-label="Enter body fat percentage"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
        />
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
