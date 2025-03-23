// import React from "react";
// import { Bell, Search } from 'lucide-react';

// export default function TopNav() {
//   return (
//     <header className="bg-white border-b border-gray-200 shadow-sm">
//       <div className="flex items-center justify-between p-4">
//         <div className="flex items-center rounded-md bg-gray-100 p-2 w-1/3">
//           <Search className="h-5 w-5 text-gray-500 mr-2" />
//           <input
//             type="text"
//             placeholder="Search..."
//             className="bg-transparent outline-none w-full text-gray-700"
//           />
//         </div>
//         <div className="flex items-center gap-4">
         
//           <div className="flex items-center gap-2">
//             <div className="h-8 w-8 rounded-full bg-green-600 flex items-center justify-center text-white">
//               A
//             </div>
//             <span className="font-medium text-gray-700">Admin</span>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }
import React from "react";

export default function TopNav() {
  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-green-600 flex items-center justify-center text-white">
              A
            </div>
            <span className="font-medium text-gray-700">Admin</span>
          </div>
        </div>
      </div>
    </header>
  );
}
