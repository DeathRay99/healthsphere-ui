// "use client";
// import { useState, useEffect } from 'react';
// import { Search, Edit, Trash2, Plus, Phone, Mail, FileText } from 'lucide-react';
// import Link from 'next/link';

// export default function Consultants() {
//   const [consultants, setConsultants] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // In a real application, you would fetch data from your API endpoint
//     fetchConsultants();
//   }, []);

//   const fetchConsultants = async () => {
//     try {
//       // This would be replaced with your actual API call
//       // Example: const response = await fetch('/api/consultants');
      
//       // For demonstration, using mock data that matches your database schema
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

//   // Filter consultants based on search term
//   const filteredConsultants = consultants.filter(consultant => {
//     const fullName = `${consultant.first_name} ${consultant.last_name}`.toLowerCase();
//     const designation = consultant.designation.toLowerCase();
//     const email = consultant.email.toLowerCase();
//     const search = searchTerm.toLowerCase();
    
//     return fullName.includes(search) || 
//            designation.includes(search) || 
//            email.includes(search);
//   });

//   const handleDelete = async (id) => {
//     if (window.confirm('Are you sure you want to delete this consultant?')) {
//       try {
//         // This would be replaced with your actual API call
//         // Example: await fetch(`/api/consultants/${id}`, { method: 'DELETE' });
        
//         // For demonstration, filter out the deleted consultant
//         setConsultants(consultants.filter(c => c.Consultants_id !== id));
//       } catch (error) {
//         console.error('Error deleting consultant:', error);
//       }
//     }
//   };

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-2xl font-bold text-gray-800">Consultants Directory</h1>
//         <Link href="/consultants/new" className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors">
//           <Plus className="w-4 h-4 mr-2" />
//           Add New Consultant
//         </Link>
//       </div>
      
//       <div className="relative mb-6">
//         <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//           <Search className="h-5 w-5 text-gray-400" />
//         </div>
//         <input
//           type="text"
//           className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//           placeholder="Search consultants by name, designation, or email"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//       </div>
      
//       {loading ? (
//         <div className="flex justify-center items-center py-8">
//           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
//         </div>
//       ) : (
//         <>
//           {filteredConsultants.length === 0 ? (
//             <div className="text-center py-8 text-gray-500">
//               {searchTerm ? 'No consultants match your search criteria' : 'No consultants found in the database'}
//             </div>
//           ) : (
//             <div className="overflow-x-auto bg-white shadow-md rounded-lg">
//               <table className="min-w-full divide-y divide-gray-200">
//                 <thead className="bg-gray-50">
//                   <tr>
//                     <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
//                     <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Designation</th>
//                     <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
//                     <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Notes</th>
//                     <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
//                   </tr>
//                 </thead>
//                 <tbody className="bg-white divide-y divide-gray-200">
//                   {filteredConsultants.map((consultant) => (
//                     <tr key={consultant.Consultants_id} className="hover:bg-gray-50">
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         <div className="text-sm font-medium text-gray-900">{consultant.first_name} {consultant.last_name}</div>
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         <div className="text-sm text-gray-900">{consultant.designation}</div>
//                       </td>
//                       <td className="px-6 py-4">
//                         <div className="flex flex-col space-y-1">
//                           <div className="flex items-center text-sm text-gray-500">
//                             <Phone className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
//                             {consultant.phone_no}
//                           </div>
//                           <div className="flex items-center text-sm text-gray-500">
//                             <Mail className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
//                             {consultant.email}
//                           </div>
//                         </div>
//                       </td>
//                       <td className="px-6 py-4">
//                         <div className="flex items-start text-sm text-gray-500">
//                           <FileText className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400 mt-0.5" />
//                           <span className="line-clamp-2">{consultant.notes}</span>
//                         </div>
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
//                         <div className="flex justify-end space-x-2">
//                           <Link 
//                             href={`/consultants/edit/${consultant.Consultants_id}`}
//                             className="text-indigo-600 hover:text-indigo-900 p-1"
//                           >
//                             <Edit className="h-5 w-5" />
//                           </Link>
//                           <button
//                             onClick={() => handleDelete(consultant.Consultants_id)}
//                             className="text-red-600 hover:text-red-900 p-1"
//                           >
//                             <Trash2 className="h-5 w-5" />
//                           </button>
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

// "use client";

// import { useState, useEffect } from "react";
// import ConsultantTable from "@/components/ConsultantTable";
// import SearchBar from "@/components/SearchBar";
// import Loader from "@/components/Loader";
// import useAuthRedirect from "@/hooks/useAuthRedirect";

// export default function adminViewConsultants() {
//   const [consultants, setConsultants] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [loading, setLoading] = useState(true);
//   const [userRole] = useState(localStorage.getItem("role"));

//   useAuthRedirect(localStorage.getItem("userId"));

//   useEffect(() => {
//     fetchConsultants();
//   }, []);

//   const fetchConsultants = async () => {
//     try {
//       const response = await fetch("http://localhost:9090/api/consultants", {
//         headers: { Role: userRole },
//       });
//       if (!response.ok) {
//         throw new Error("Failed to fetch consultants. Please check permissions.");
//       }
//       const data = await response.json();
//       setConsultants(data);
//     } catch (error) {
//       console.error("Error fetching consultants:", error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleAddConsultant = async (consultant) => {
//     try {
//       const response = await fetch("http://localhost:9090/api/consultants", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Role: userRole,
//         },
//         body: JSON.stringify(consultant),
//       });
//       const data = await response.json();
//       response.ok ? alert(data.response) : alert(data.err);
//       fetchConsultants();
//     } catch (error) {
//       console.error("Error adding consultant:", error.message);
//     }
//   };

//   const handleUpdateConsultant = async (consultantId, updatedConsultant) => {
//     try {
//       const response = await fetch(`http://localhost:9090/api/consultants/${consultantId}`, {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//           Role: userRole,
//         },
//         body: JSON.stringify(updatedConsultant),
//       });
//       const data = await response.json();
//       response.ok ? alert(data.response) : alert(data.err);
//       fetchConsultants();
//     } catch (error) {
//       console.error("Error updating consultant:", error.message);
//     }
//   };

//   const handleDeleteConsultant = async (consultantId) => {
//     try {
//       const response = await fetch(`http://localhost:9090/api/consultants/${consultantId}`, {
//         method: "DELETE",
//         headers: { Role: userRole },
//       });
//       const data = await response.json();
//       response.ok ? alert(data.response) : alert(data.err);
//       fetchConsultants();
//     } catch (error) {
//       console.error("Error deleting consultant:", error.message);
//     }
//   };

//   const filteredConsultants = consultants.filter((consultant) => {
//     const fullName = `${consultant.firstName} ${consultant.lastName}`.toLowerCase();
//     const designation = consultant.designation.toLowerCase();
//     const email = consultant.email.toLowerCase();
//     const search = searchTerm.toLowerCase();
//     return fullName.includes(search) || designation.includes(search) || email.includes(search);
//   });

//   return (
//     <div className="container mx-auto px-4 py-8 bg-gradient-to-br from-green-100 to-white min-h-screen">
//       <h1 className="text-3xl font-semibold text-green-700 text-center mb-2">
//         Meet Our Expert Consultants
//       </h1>
//       <p className="text-lg text-gray-600 text-center mb-6">
//         We keep partnering with the world's best health consultants to bring you
//         expert advice. Avail special discounts on personalized consultations!
//       </p>
//       <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
//       {loading ? (
//         <Loader />
//       ) : (
//         <ConsultantTable
//           consultants={filteredConsultants}
//           searchTerm={searchTerm}
//           onAdd={handleAddConsultant}
//           onUpdate={handleUpdateConsultant}
//           onDelete={handleDeleteConsultant}
//           userRole={userRole}
//         />
//       )}
//     </div>
//   );
// }





// "use client";

// import { useState, useEffect } from "react";
// import { Search, Edit, Trash2, Plus, Phone, Mail, FileText } from "lucide-react";
// import Link from "next/link";

// export default function Consultants() {
//   const [consultants, setConsultants] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchConsultants();
//   }, []);

//   const fetchConsultants = async () => {
//     try {
//       setLoading(true);
//       console.log("Fetching consultants...");
  
//       const response = await fetch("http://localhost:9090/api/consultants", {
//         headers: {
//           "Content-Type": "application/json",
//           Role: localStorage.getItem("role") || "USER", // Set default role if not present
//         },
//       });
  
//       console.log("Response Status:", response.status);
  
//       if (!response.ok) {
//         const errorText = await response.text(); // Log the error response for debugging
//         console.error("Error Response:", errorText);
//         throw new Error("Failed to fetch consultants. Please check the API.");
//       }
  
//       const data = await response.json();
//       console.log("Fetched Consultants:", data);
//       setConsultants(data);
//     } catch (error) {
//       console.error("Error fetching consultants:", error.message);
//     } finally {
//       setLoading(false);
//     }
//   };
  
//   const filteredConsultants = consultants.filter((consultant) => {
//     const fullName = `${consultant.first_name} ${consultant.last_name}`.toLowerCase();
//     const designation = consultant.designation.toLowerCase();
//     const email = consultant.email.toLowerCase();
//     const search = searchTerm.toLowerCase();

//     return (
//       fullName.includes(search) ||
//       designation.includes(search) ||
//       email.includes(search)
//     );
//   });

//   const handleDelete = async (id) => {
//     console.log("Deleting Consultant ID:", id); // Debugging log
//     if (window.confirm("Are you sure you want to delete this consultant?")) {
//       try {
//         const response = await fetch(`http://localhost:9090/api/consultants/${id}`, {
//           method: "DELETE",
//           headers: {
//             "Content-Type": "application/json",
//             Role: localStorage.getItem("role") || "ADMIN", // Include Role header
//           },
//         });
  
//         if (response.ok) {
//           setConsultants(consultants.filter((c) => c.Consultants_id !== id));
//           alert("Consultant deleted successfully.");
//         } else {
//           const errorText = await response.text(); // Log backend error details
//           console.error("Error Deleting:", errorText);
//           alert("Failed to delete consultant.");
//         }
//       } catch (error) {
//         console.error("Error deleting consultant:", error.message);
//       }
//     }
//   };
  
//   return (
//     <div className="container mx-auto px-4 py-8 bg-gradient-to-br from-green-100 to-white">
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-2xl font-bold text-green-700">Consultants Directory</h1>
//         <Link
//           href="/consultants/new"
//           className="flex items-center bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition-colors"
//         >
//           <Plus className="w-4 h-4 mr-2" />
//           Add New Consultant
//         </Link>
//       </div>

//       <div className="relative mb-6">
//         <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//           <Search className="h-5 w-5 text-green-500" />
//         </div>
//         <input
//           type="text"
//           className="block w-full pl-10 pr-3 py-2 border border-green-300 rounded-md leading-5 bg-white placeholder-green-500 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
//           placeholder="Search consultants by name, designation, or email"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//       </div>

//       {loading ? (
//         <div className="flex justify-center items-center py-8">
//           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500"></div>
//         </div>
//       ) : (
//         <>
//           {filteredConsultants.length === 0 ? (
//             <div className="text-center py-8 text-gray-500">
//               {searchTerm
//                 ? "No consultants match your search criteria"
//                 : "No consultants found in the database"}
//             </div>
//           ) : (
//             <div className="overflow-x-auto bg-white shadow-md rounded-lg">
//               <table className="min-w-full divide-y divide-green-200">
//                 <thead className="bg-green-100">
//                   <tr>
//                     <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-green-700 uppercase tracking-wider">
//                       Name
//                     </th>
//                     <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-green-700 uppercase tracking-wider">
//                       Designation
//                     </th>
//                     <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-green-700 uppercase tracking-wider">
//                       Contact
//                     </th>
//                     <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-green-700 uppercase tracking-wider">
//                       Notes
//                     </th>
//                     <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-green-700 uppercase tracking-wider">
//                       Actions
//                     </th>
//                   </tr>
//                 </thead>
//                 {/* <tbody className="bg-white divide-y divide-green-200">
//                   {filteredConsultants.map((consultant) => (
//                     <tr key={consultant.Consultants_id} className="hover:bg-green-50">
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         <div className="text-sm font-medium text-green-900">
//                           {consultant.first_name} {consultant.last_name}
//                         </div>
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         <div className="text-sm text-green-900">{consultant.designation}</div>
//                       </td>
//                       <td className="px-6 py-4">
//                         <div className="flex flex-col space-y-1">
//                           <div className="flex items-center text-sm text-green-500">
//                             <Phone className="flex-shrink-0 mr-1.5 h-4 w-4 text-green-400" />
//                             {consultant.phone_no}
//                           </div>
//                           <div className="flex items-center text-sm text-green-500">
//                             <Mail className="flex-shrink-0 mr-1.5 h-4 w-4 text-green-400" />
//                             {consultant.email}
//                           </div>
//                         </div>
//                       </td>
//                       <td className="px-6 py-4">
//                         <div className="flex items-start text-sm text-green-500">
//                           <FileText className="flex-shrink-0 mr-1.5 h-4 w-4 text-green-400 mt-0.5" />
//                           <span className="line-clamp-2">{consultant.notes}</span>
//                         </div>
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
//                         <div className="flex justify-end space-x-2">
//                           <Link
//                             href={`/consultants/edit/${consultant.Consultants_id}`}
//                             className="text-green-600 hover:text-green-800 p-1"
//                           >
//                             <Edit className="h-5 w-5" />
//                           </Link>
//                           <button
//                             onClick={() => handleDelete(consultant.Consultants_id)}
//                             className="text-red-600 hover:text-red-800 p-1"
//                           >
//                             <Trash2 className="h-5 w-5" />
//                           </button>
//                         </div>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody> */
//                 <tbody className="bg-white divide-y divide-green-200">
//   {filteredConsultants.map((consultant) => (
//     <tr key={consultant.Consultants_id} className="hover:bg-green-50">
//       <td className="px-6 py-4 whitespace-nowrap">
//         <div className="text-sm font-medium text-green-900">
//           {consultant.firstName} {consultant.lastName}
//         </div>
//       </td>
//       <td className="px-6 py-4 whitespace-nowrap">
//         <div className="text-sm text-green-900">{consultant.designation}</div>
//       </td>
//       <td className="px-6 py-4">
//         <div className="flex flex-col space-y-1">
//           <div className="flex items-center text-sm text-green-500">
//             <Phone className="flex-shrink-0 mr-1.5 h-4 w-4 text-green-400" />
//             {consultant.phone_no}
//           </div>
//           <div className="flex items-center text-sm text-green-500">
//             <Mail className="flex-shrink-0 mr-1.5 h-4 w-4 text-green-400" />
//             {consultant.email}
//           </div>
//         </div>
//       </td>
//       <td className="px-6 py-4">
//         <div className="flex items-start text-sm text-green-500">
//           <FileText className="flex-shrink-0 mr-1.5 h-4 w-4 text-green-400 mt-0.5" />
//           <span className="line-clamp-2">{consultant.notes}</span>
//         </div>
//       </td>
//       <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
//         <div className="flex justify-end space-x-2">
//           <Link
//             href={`/consultants/edit/${consultant.Consultants_id}`}
//             className="text-green-600 hover:text-green-800 p-1"
//           >
//             <Edit className="h-5 w-5" />
//           </Link>
//           <button
//             onClick={() => handleDelete(consultant.Consultants_id)}
//             className="text-red-600 hover:text-red-800 p-1"
//           >
//             <Trash2 className="h-5 w-5" />
//           </button>
//         </div>
//       </td>
//     </tr>
//   ))}
// </tbody>
// }

//               </table>
//             </div>
//           )}
//         </>
//       )}
//     </div>
//   );
// }


// "use client";
// import { useState, useEffect } from "react";
// import ConsultantTable from "@/components/ConsultantTable";
// import { Plus, Search } from "lucide-react";
// import Link from "next/link";

// export default function Consultants() {
//   const [consultants, setConsultants] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchConsultants();
//   }, []);

//   const fetchConsultants = async () => {
//     try {
//       setLoading(true);
//       const response = await fetch("http://localhost:9090/api/consultants", {
//         headers: {
//           "Content-Type": "application/json",
//           Role: localStorage.getItem("role") || "USER",
//         },
//       });

//       if (!response.ok) {
//         throw new Error("Failed to fetch consultants. Please check the API.");
//       }

//       const data = await response.json();
//       setConsultants(data);
//     } catch (error) {
//       console.error("Error fetching consultants:", error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleDelete = async (id) => {
//     console.log("Deleting Consultant ID:", id);
//     if (window.confirm("Are you sure you want to delete this consultant?")) {
//       try {
//         const response = await fetch(`http://localhost:9090/api/consultants/${id}`, {
//           method: "DELETE",
//           headers: {
//             "Content-Type": "application/json",
//             Role: localStorage.getItem("role") || "ADMIN",
//           },
//         });

//         if (response.ok) {
//           setConsultants(consultants.filter((c) => c.consultantId !== id));
//           alert("Consultant deleted successfully.");
//         } else {
//           const errorText = await response.text();
//           console.error("Error Deleting:", errorText);
//           alert("Failed to delete consultant.");
//         }
//       } catch (error) {
//         console.error("Error deleting consultant:", error.message);
//       }
//     }
//   };

//   const filteredConsultants = consultants.filter((consultant) => {
//     const fullName = `${consultant.firstName} ${consultant.lastName}`.toLowerCase();
//     const designation = consultant.designation.toLowerCase();
//     const email = consultant.email.toLowerCase();
//     const search = searchTerm.toLowerCase();

//     return (
//       fullName.includes(search) ||
//       designation.includes(search) ||
//       email.includes(search)
//     );
//   });

//   return (
//     <div className="container mx-auto px-4 py-8 bg-gradient-to-br from-green-100 to-white">
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-2xl font-bold text-green-700">Consultants Directory</h1>
//         <Link
//           href="/consultants/new"
//           className="flex items-center bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition-colors"
//         >
//           <Plus className="w-4 h-4 mr-2" />
//           Add New Consultant
//         </Link>
//       </div>

//       <div className="relative mb-6">
//         <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//           <Search className="h-5 w-5 text-green-500" />
//         </div>
//         <input
//           type="text"
//           className="block w-full pl-10 pr-3 py-2 border border-green-300 rounded-md leading-5 bg-white placeholder-green-500 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
//           placeholder="Search consultants by name, designation, or email"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//       </div>

//       {loading ? (
//         <div className="flex justify-center items-center py-8">
//           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500"></div>
//         </div>
//       ) : (
//         <ConsultantTable
//           consultants={filteredConsultants}
//           searchTerm={searchTerm}
//           onDelete={handleDelete}
//         />
//       )}
//     </div>
//   );
// }
"use client";
import { useState, useEffect } from "react";
import ConsultantTable from "@/components/ConsultantTable";
import { Plus, Search } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import useAdminRedirect from "@/hooks/useAdminRedirect";

export default function Consultants() {
  const [consultants, setConsultants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const router = useRouter(); // Use router for navigation

  useAdminRedirect();

  useEffect(() => {
    fetchConsultants();
  }, []);

  const fetchConsultants = async () => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:9090/api/consultants", {
        headers: {
          "Content-Type": "application/json",
          Role: localStorage.getItem("role") || "USER",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch consultants. Please check the API.");
      }

      const data = await response.json();
      setConsultants(data);
    } catch (error) {
      console.error("Error fetching consultants:", error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    console.log("Deleting Consultant ID:", id);
    if (window.confirm("Are you sure you want to delete this consultant?")) {
      try {
        const response = await fetch(`http://localhost:9090/api/consultants/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Role: localStorage.getItem("role") || "ADMIN",
          },
        });

        if (response.ok) {
          setConsultants(consultants.filter((c) => c.consultantId !== id));
          alert("Consultant deleted successfully.");
        } else {
          const errorText = await response.text();
          console.error("Error Deleting:", errorText);
          alert("Failed to delete consultant.");
        }
      } catch (error) {
        console.error("Error deleting consultant:", error.message);
      }
    }
  };

  const handleEdit = (id) => {
    console.log("Editing Consultant ID:", id);
    router.push(`/adminView/Consultant/edit/${id}`); // Navigate to the edit page
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
    <div className="container mx-auto px-4 py-8 bg-gradient-to-br from-green-100 to-white">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-green-700">Consultants Directory</h1>
        <Link
          href="/adminView/Consultant/new"
          className="flex items-center bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition-colors"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add New Consultant
        </Link>
      </div>

      <div className="relative mb-6">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-green-500" />
        </div>
        <input
          type="text"
          className="block w-full pl-10 pr-3 py-2 border border-green-300 rounded-md leading-5 bg-white placeholder-green-500 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
          placeholder="Search consultants by name, designation, or email"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {loading ? (
        <div className="flex justify-center items-center py-8">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500"></div>
        </div>
      ) : (
        <ConsultantTable
          consultants={filteredConsultants}
          searchTerm={searchTerm}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      )}
    </div>
  );
}
