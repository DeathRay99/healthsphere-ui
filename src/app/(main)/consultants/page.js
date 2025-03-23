"use client";

import { useState, useEffect } from "react";
import ConsultantTable from "@/components/ConsultantTable";
import SearchBar from "@/components/SearchBar";
import Loader from "@/components/Loader";
import useAuthRedirect from "@/hooks/useAuthRedirect";

export default function consultants() {
  const [consultants, setConsultants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  useAuthRedirect(localStorage.getItem("userId"));

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
    const fullName =
      `${consultant.firstName} ${consultant.lastName}`.toLowerCase();
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
        Meet Our Expert Consultants
      </h1>
      <p className="text-lg text-gray-600 text-center mb-6">
        We keep partnering with the world's best health consultants to bring you
        expert advice. Avail special discounts on personalized consultations!
      </p>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {loading ? (
        <Loader />
      ) : (
        <ConsultantTable
          consultants={filteredConsultants}
          searchTerm={searchTerm}
        />
      )}
    </div>
  );
}
