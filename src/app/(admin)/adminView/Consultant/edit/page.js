"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function EditConsultant() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    designation: "",
    email: "",
    phoneNo: "",
    notes: "",
  });
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const consultantId = searchParams.get("id"); // Fetch the consultant ID from the URL

  useEffect(() => {
    if (consultantId) {
      fetchConsultantDetails();
    }
  }, [consultantId]);

  const fetchConsultantDetails = async () => {
    try {
      const response = await fetch(`http://localhost:9090/api/consultants/${consultantId}`, {
        headers: {
          "Content-Type": "application/json",
          Role: localStorage.getItem("role") || "ADMIN",
        },
      });

      if (response.ok) {
        const data = await response.json();
        setFormData(data); // Populate form with consultant details
      } else {
        const errorText = await response.text();
        console.error("Error Fetching Consultant:", errorText);
        alert("Failed to fetch consultant details.");
      }
    } catch (error) {
      console.error("Error Fetching Consultant:", error.message);
      alert("An error occurred while fetching consultant details.");
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUpdating(true);

    try {
      const response = await fetch(`http://localhost:9090/api/consultants/${consultantId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Role: localStorage.getItem("role") || "ADMIN",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Consultant updated successfully!");
        router.push("/consultants"); // Redirect back to the consultants directory
      } else {
        const errorText = await response.text();
        console.error("Error Updating Consultant:", errorText);
        alert("Failed to update consultant. Please try again.");
      }
    } catch (error) {
      console.error("Error Updating Consultant:", error.message);
      alert("An error occurred. Please try again.");
    } finally {
      setUpdating(false);
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center text-green-700">Loading consultant details...</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 bg-gradient-to-br from-green-100 to-white min-h-screen">
      <h1 className="text-2xl font-bold text-green-700 mb-6">Edit Consultant</h1>
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
              updating ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={updating}
          >
            {updating ? "Updating..." : "Update Consultant"}
          </button>
        </div>
      </form>
    </div>
  );
}
