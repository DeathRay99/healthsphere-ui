import React from "react";
import { Phone, Mail } from "lucide-react";

export default function ConsultantTableUser({ consultants }) {
  return (
    <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-green-100">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-green-700 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-green-700 uppercase tracking-wider">
              Designation
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-green-700 uppercase tracking-wider">
              Contact
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {consultants.map((consultant, index) => (
            <tr key={index} className="hover:bg-green-50 transition">
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">
                  {consultant.firstName} {consultant.lastName}
                </div>
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
