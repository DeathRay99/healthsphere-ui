"use client";

import { useState, useEffect } from "react";
import SearchBar from "@/components/SearchBar";
import Loader from "@/components/Loader";
import ConsultantTableUser from "@/components/ConsultantTableUser"; // User-specific table

export default function UserConsultants() {
  const [consultants, setConsultants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  // Fetch consultants on component mount
  useEffect(() => {
    fetchConsultants();
  }, []);

  const fetchConsultants = async () => {
    try {
      const response = await fetch("http://localhost:9090/api/consultants", {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch consultants");
      }

      const data = await response.json();
      setConsultants(data);
    } catch (error) {
      console.error("Error fetching consultants:", error.message);
      alert("An error occurred while fetching consultants. Please try again later.");
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
      <h1 className="text-3xl font-semibold text-green-700 text-center mb-2">
        Explore Our Expert Consultants
      </h1>
      <p className="text-lg text-gray-600 text-center mb-6">
        Browse our list of expert consultants to find the perfect advice for your health journey.
      </p>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {loading ? (
        <Loader />
      ) : (
        <ConsultantTableUser consultants={filteredConsultants} />
      )}
    </div>
  );
}
