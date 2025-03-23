// "use client";

// import { useState, useEffect } from 'react';
// import { Search, Phone, Mail, FileText } from 'lucide-react';

// export default function Consultants() {
//   const [consultants, setConsultants] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchConsultants();
//   }, []);

//   const fetchConsultants = async () => {
//     try {
//       const mockData = [
//         { 
//           Consultants_id: 1, 
//           first_name: 'John', 
//           last_name: 'Doe', 
//           designation: 'Senior Consultant',
//           phone_no: '123-456-7890',
//           email: 'john.doe@example.com',
//           notes: 'Specializes in digital transformation projects.'
//         },
//         { 
//           Consultants_id: 2, 
//           first_name: 'Jane', 
//           last_name: 'Smith', 
//           designation: 'Technical Consultant',
//           phone_no: '987-654-3210',
//           email: 'jane.smith@example.com',
//           notes: 'Expert in cloud migration strategies.'
//         },
//         { 
//           Consultants_id: 3, 
//           first_name: 'Robert', 
//           last_name: 'Johnson', 
//           designation: 'Business Analyst',
//           phone_no: '555-123-4567',
//           email: 'robert.johnson@example.com',
//           notes: 'Focuses on process optimization and workflow efficiency.'
//         },
//       ];
      
//       setConsultants(mockData);
//       setLoading(false);
//     } catch (error) {
//       console.error('Error fetching consultants:', error);
//       setLoading(false);
//     }
//   };

//   const filteredConsultants = consultants.filter(consultant => {
//     const fullName = `${consultant.first_name} ${consultant.last_name}`.toLowerCase();
//     const designation = consultant.designation.toLowerCase();
//     const email = consultant.email.toLowerCase();
//     const search = searchTerm.toLowerCase();
    
//     return fullName.includes(search) || designation.includes(search) || email.includes(search);
//   });

//   return (
//     <div className="container mx-auto px-4 py-8 bg-gradient-to-br from-green-100 to-white min-h-screen">
//       <h1 className="text-3xl font-semibold text-green-700 text-center mb-6">Consultants</h1>
      
//       <div className="relative mb-6 max-w-lg mx-auto">
//         <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//           <Search className="h-5 w-5 text-green-500" />
//         </div>
//         <input
//           type="text"
//           className="block w-full pl-10 pr-3 py-2 border border-green-300 rounded-lg bg-white placeholder-green-500 focus:outline-none focus:ring-green-500 focus:border-green-500 shadow-md"
//           placeholder="Search consultants by name, designation, or email"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//       </div>
      
//       {loading ? (
//         <div className="flex justify-center items-center py-8">
//           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
//         </div>
//       ) : (
//         <>
//           {filteredConsultants.length === 0 ? (
//             <div className="text-center py-8 text-gray-500">
//               {searchTerm ? 'No consultants match your search criteria' : 'No consultants found in the database'}
//             </div>
//           ) : (
//             <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
//               <table className="min-w-full divide-y divide-gray-200">
//                 <thead className="bg-green-100">
//                   <tr>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-green-700 uppercase tracking-wider">Name</th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-green-700 uppercase tracking-wider">Designation</th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-green-700 uppercase tracking-wider">Contact</th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-green-700 uppercase tracking-wider">Notes</th>
//                   </tr>
//                 </thead>
//                 <tbody className="bg-white divide-y divide-gray-200">
//                   {filteredConsultants.map((consultant) => (
//                     <tr key={consultant.Consultants_id} className="hover:bg-green-50 transition">
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         <div className="text-sm font-medium text-gray-900">{consultant.first_name} {consultant.last_name}</div>
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         <div className="text-sm text-gray-900">{consultant.designation}</div>
//                       </td>
//                       <td className="px-6 py-4">
//                         <div className="flex flex-col space-y-1">
//                           <div className="flex items-center text-sm text-gray-500">
//                             <Phone className="flex-shrink-0 mr-1.5 h-4 w-4 text-green-400" />
//                             {consultant.phone_no}
//                           </div>
//                           <div className="flex items-center text-sm text-gray-500">
//                             <Mail className="flex-shrink-0 mr-1.5 h-4 w-4 text-green-400" />
//                             {consultant.email}
//                           </div>
//                         </div>
//                       </td>
//                       <td className="px-6 py-4">
//                         <div className="flex items-start text-sm text-gray-500">
//                           <FileText className="flex-shrink-0 mr-1.5 h-4 w-4 text-green-400 mt-0.5" />
//                           <span className="line-clamp-2">{consultant.notes}</span>
//                         </div>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           )}
//         </>
//       )}
//     </div>
//   );
// }
"use client";

import { useState, useEffect } from "react";
import { Search, Phone, Mail, FileText } from "lucide-react";
import ConsultantTable from "@/components/ConsultantTable";
import SearchBar from "@/components/SearchBar";

export default function Consultants() {
  const [consultants, setConsultants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchConsultants();
  }, []);

  const fetchConsultants = async () => {
    try {
      const response = await fetch("http://localhost:9090/api/consultants");
      if (!response.ok) {
        throw new Error("Failed to fetch consultants");
      }
      const data = await response.json();
      setConsultants(data);
    } catch (error) {
      console.error("Error fetching consultants:", error);
    } finally {
      setLoading(false);
    }
  };

  const filteredConsultants = consultants.filter((consultant) => {
    const fullName = `${consultant.firstName} ${consultant.lastName}`.toLowerCase();
    const designation = consultant.designation.toLowerCase();
    const email = consultant.email.toLowerCase();
    const search = searchTerm.toLowerCase();
    return (
      fullName.includes(search) ||
      designation.includes(search) ||
      email.includes(search)
    );
  });

  return (
    <div className="container mx-auto px-4 py-8 bg-gradient-to-br from-green-100 to-white min-h-screen">
      <h1 className="text-3xl font-semibold text-green-700 text-center mb-6">
        Consultants
      </h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {loading ? (
        <div className="flex justify-center items-center py-8">
           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
        </div>
      ) : (
        <ConsultantTable consultants={filteredConsultants} searchTerm={searchTerm} />
      )}
    </div>
  );
}