"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddConsultant() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    designation: "",
    email: "",
    phoneNo: "",
    notes: "",
  });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("http://localhost:9090/api/consultants", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Role: localStorage.getItem("role") || "ADMIN",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Consultant added successfully!");
        router.push("/adminView/Consultant"); // Redirect to the consultants directory
      } else {
        const errorText = await response.text();
        console.error("Error Adding Consultant:", errorText);
        alert("Failed to add consultant. Please try again.");
      }
    } catch (error) {
      console.error("Error Adding Consultant:", error.message);
      alert("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 bg-gradient-to-br from-green-100 to-white min-h-screen">
      <h1 className="text-2xl font-bold text-green-700 mb-6">Add New Consultant</h1>
      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow-md">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-green-700">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              required
              className="block w-full mt-1 border-green-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-green-700">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              required
              className="block w-full mt-1 border-green-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
            />
          </div>
        </div>

        <div>
          <label htmlFor="designation" className="block text-sm font-medium text-green-700">
            Designation
          </label>
          <input
            type="text"
            id="designation"
            name="designation"
            value={formData.designation}
            onChange={handleInputChange}
            required
            className="block w-full mt-1 border-green-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-green-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="block w-full mt-1 border-green-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
          />
        </div>

        <div>
          <label htmlFor="phoneNo" className="block text-sm font-medium text-green-700">
            Phone Number
          </label>
          <input
            type="text"
            id="phoneNo"
            name="phoneNo"
            value={formData.phoneNo}
            onChange={handleInputChange}
            required
            className="block w-full mt-1 border-green-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
          />
        </div>

        <div>
          <label htmlFor="notes" className="block text-sm font-medium text-green-700">
            Notes
          </label>
          <textarea
            id="notes"
            name="notes"
            value={formData.notes}
            onChange={handleInputChange}
            rows="4"
            className="block w-full mt-1 border-green-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
          ></textarea>
        </div>

        <div className="text-right">
          <button
            type="submit"
            className={`bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition-colors ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={loading}
          >
            {loading ? "Adding..." : "Add Consultant"}
          </button>
        </div>
      </form>
    </div>
  );
}
