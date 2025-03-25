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
// export default function MeasurementInputs({ healthLog, onChange, errors }) {
//   return (
//     <div>
//       <h3 className="text-lg font-medium text-gray-700 mb-4">Measurements</h3>

//       {/* Weight Input */}
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">
//           Weight (kg) <span className="text-red-500">*</span>
//         </label>
//         <input
//           type="number"
//           value={healthLog.weight}
//           onChange={(e) => onChange("weight", e.target.value)}
//           className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
//         />
//         {errors.weight && <p className="text-red-500 text-xs mt-1">{errors.weight}</p>}
//       </div>

//       {/* Sleep Input */}
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">
//           Sleep (hours) <span className="text-red-500">*</span>
//         </label>
//         <input
//           type="number"
//           value={healthLog.sleep}
//           onChange={(e) => onChange("sleep", e.target.value)}
//           className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
//         />
//         {errors.sleep && <p className="text-red-500 text-xs mt-1">{errors.sleep}</p>}
//       </div>

//       {/* Water Intake Input */}
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">
//           Water Intake (liters) <span className="text-red-500">*</span>
//         </label>
//         <input
//           type="number"
//           value={healthLog.waterIntake}
//           onChange={(e) => onChange("waterIntake", e.target.value)}
//           className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
//         />
//         {errors.waterIntake && <p className="text-red-500 text-xs mt-1">{errors.waterIntake}</p>}
//       </div>

//       {/* Blood Pressure Inputs */}
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">
//           Blood Pressure (Systolic / Diastolic) <span className="text-red-500">*</span>
//         </label>
//         <div className="flex gap-4">
//           <input
//             type="number"
//             placeholder="Systolic"
//             value={healthLog.bpSystolic}
//             onChange={(e) => onChange("bpSystolic", e.target.value)}
//             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
//           />
//           <input
//             type="number"
//             placeholder="Diastolic"
//             value={healthLog.bpDiastolic}
//             onChange={(e) => onChange("bpDiastolic", e.target.value)}
//             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
//           />
//         </div>
//         {errors.bpSystolic && <p className="text-red-500 text-xs mt-1">{errors.bpSystolic}</p>}
//         {errors.bpDiastolic && <p className="text-red-500 text-xs mt-1">{errors.bpDiastolic}</p>}
//       </div>

//       {/* Heart Rate Input */}
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">
//           Heart Rate (bpm) <span className="text-red-500">*</span>
//         </label>
//         <input
//           type="number"
//           value={healthLog.heartRate}
//           onChange={(e) => onChange("heartRate", e.target.value)}
//           className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
//         />
//         {errors.heartRate && <p className="text-red-500 text-xs mt-1">{errors.heartRate}</p>}
//       </div>
//     </div>
//   );
// }
import React from "react";

export default function MeasurementInputs({ healthLog, onChange, errors }) {
  return (
    <div>
      <h3 className="text-lg font-medium text-gray-700 mb-4">Measurements</h3>

      {/* Weight Input */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Weight (kg) <span className="text-red-500">*</span>
        </label>
        <input
          type="number"
          placeholder="Weight (kg)"
          value={healthLog.weight}
          onChange={(e) => onChange("weight", e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
        {errors.weight && <p className="text-red-500 text-xs mt-1">{errors.weight}</p>}
      </div>

      {/* Sleep Input */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Sleep (hours) <span className="text-red-500">*</span>
        </label>
        <input
          type="number"
          placeholder="Sleep (hours)"
          value={healthLog.sleep}
          onChange={(e) => onChange("sleep", e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
        {errors.sleep && <p className="text-red-500 text-xs mt-1">{errors.sleep}</p>}
      </div>

      {/* Water Intake Input */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Water Intake (liters) <span className="text-red-500">*</span>
        </label>
        <input
          type="number"
          placeholder="Water Intake (liters)"
          value={healthLog.waterIntake}
          onChange={(e) => onChange("waterIntake", e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
        {errors.waterIntake && <p className="text-red-500 text-xs mt-1">{errors.waterIntake}</p>}
      </div>
    </div>
  );
}
