import React from 'react'
import Link from 'next/link';
import { Phone, Mail, FileText } from "lucide-react";

function ConsultantTable({ consultants, searchTerm }) {
    return (
      <>
        {consultants.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            {searchTerm ? "No consultants match your search criteria" : "No consultants found in the database"}
          </div>
        ) : (
          <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-green-100">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-green-700 uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-green-700 uppercase tracking-wider">Designation</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-green-700 uppercase tracking-wider">Contact</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-green-700 uppercase tracking-wider">Notes</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {consultants.map((consultant) => (
                  <tr key={consultant.consultantId} className="hover:bg-green-50 transition">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{consultant.firstName} {consultant.lastName}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{consultant.designation}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-col space-y-1">
                        <div className="flex items-center text-sm text-gray-500">
                          <Phone className="flex-shrink-0 mr-1.5 h-4 w-4 text-green-400" />
                          {consultant.phoneNo}
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <Mail className="flex-shrink-0 mr-1.5 h-4 w-4 text-green-400" />
                          {consultant.email}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-start text-sm text-gray-500">
                        <FileText className="flex-shrink-0 mr-1.5 h-4 w-4 text-green-400 mt-0.5" />
                        <span className="line-clamp-2">{consultant.notes}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </>
    );
  }
export default ConsultantTable;



// export default function ConsultantTable({
//   consultants,
//   searchTerm,
//   onEdit,
//   onDelete,
//   userRole
// }) {
//   const isAdmin = userRole === "admin";

//   if (!consultants.length) {
//     return (
//       <div className="text-center py-10">
//         <p className="text-xl text-gray-600">
//           {searchTerm
//             ? "No consultants match your search criteria."
//             : "No consultants available at the moment."}
//         </p>
//       </div>
//     );
//   }

//   return (
//     <div className="overflow-x-auto shadow-md rounded-lg">
//       <table className="min-w-full bg-white">
//         <thead className="bg-gray-50">
//           <tr>
//             <th className="py-3 px-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
//               Name
//             </th>
//             <th className="py-3 px-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
//               Designation
//             </th>
//             <th className="py-3 px-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
//               Specialization
//             </th>
//             <th className="py-3 px-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
//               Experience
//             </th>
//             <th className="py-3 px-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
//               Contact
//             </th>
//             {isAdmin && (
//               <th className="py-3 px-4 text-center text-sm font-medium text-gray-500 uppercase tracking-wider">
//                 Actions
//               </th>
//             )}
//           </tr>
//         </thead>
//         <tbody className="divide-y divide-gray-200">
//           {consultants.map((consultant) => (
//             <tr key={consultant._id} className="hover:bg-gray-50">
//               <td className="py-4 px-4 whitespace-nowrap">
//                 <div className="font-medium text-gray-900">
//                   {consultant.firstName} {consultant.lastName}
//                 </div>
//               </td>
//               <td className="py-4 px-4 whitespace-nowrap text-gray-700">
//                 {consultant.designation}
//               </td>
//               <td className="py-4 px-4 whitespace-nowrap text-gray-700">
//                 {consultant.specialization || "-"}
//               </td>
//               <td className="py-4 px-4 whitespace-nowrap text-gray-700">
//                 {consultant.experience ? `${consultant.experience} years` : "-"}
//               </td>
//               <td className="py-4 px-4 whitespace-nowrap">
//                 <div className="text-gray-700">{consultant.email}</div>
//                 {consultant.phone && (
//                   <div className="text-gray-500 text-sm">{consultant.phone}</div>
//                 )}
//               </td>
//               {isAdmin && (
//                 <td className="py-4 px-4 whitespace-nowrap text-center">
//                   <div className="flex justify-center space-x-2">
//                     <button
//                       onClick={() => onEdit(consultant)}
//                       className="text-blue-600 hover:text-blue-800 font-medium"
//                     >
//                       Edit
//                     </button>
//                     <span className="text-gray-400">|</span>
//                     <button
//                       onClick={() => onDelete(consultant._id)}
//                       className="text-red-600 hover:text-red-800 font-medium"
//                     >
//                       Delete
//                     </button>
//                   </div>
//                 </td>
//               )}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }