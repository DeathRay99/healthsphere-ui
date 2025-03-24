"use client";

import { useState, useEffect } from "react";
import { Activity, Filter, Search, RefreshCw, AlertCircle } from "lucide-react";
import Head from "next/head";

export default function AdminMealsPage() {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");

  // Fetch meals on initial render
  useEffect(() => {
    fetchMeals();
  }, []);

  // Fetch meals from API
  const fetchMeals = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:9090/api/dietRecommendations", {
        headers: {
          "Content-Type": "application/json",
          Role: "ADMIN", // Send Role for admin access
        },
      });

      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();
      console.log("Fetched Meals Data:", data); // Log the response data
      setMeals(data.dietRecommendations || []); // Ensure proper structure
      setError(null);
    } catch (err) {
      console.error("Error fetching meals:", err.message);
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  // Get filtered and searched meals
  const getFilteredMeals = () => {
    let filteredMeals = [...meals];

    // Apply search filter
    if (searchTerm) {
      filteredMeals = filteredMeals.filter((meal) =>
        meal.dietName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        meal.mealType?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply type filter
    if (filterType !== "all") {
      filteredMeals = filteredMeals.filter(
        (meal) => meal.mealType?.toLowerCase() === filterType.toLowerCase()
      );
    }

    return filteredMeals;
  };

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Diet Recommendations | Admin Dashboard</title>
      </Head>

      {/* Header */}
      <header className="bg-green-600 text-white shadow-md">
        <div className="container mx-auto py-6 px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Activity className="w-8 h-8" />
              <h1 className="text-2xl font-bold">Diet Recommendations</h1>
            </div>
            <button
              onClick={fetchMeals}
              className="flex items-center space-x-2 bg-white text-green-600 px-4 py-2 rounded-md hover:bg-gray-100"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Refresh</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-8 px-4">
        {/* Filters */}
        <div className="mb-6 flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2 bg-gray-100 rounded-md px-3 py-2 w-full md:w-auto">
            <Search className="w-5 h-5 text-gray-500" />
            <input
              type="text"
              placeholder="Search meals..."
              className="bg-transparent border-none focus:outline-none w-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-500" />
              <select
                className="bg-gray-100 border-none rounded-md px-3 py-2 focus:outline-none"
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
              >
                <option value="all">All Types</option>
                <option value="breakfast">Breakfast</option>
                <option value="lunch">Lunch</option>
                <option value="dinner">Dinner</option>
              </select>
            </div>
          </div>
        </div>

        {/* Error State */}
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-6 flex items-center">
            <AlertCircle className="w-5 h-5 mr-2" />
            <p>{error}</p>
          </div>
        )}

        {/* Loading State */}
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
          </div>
        ) : meals.length > 0 ? (
          // Table Content
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Calories
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Type
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Water Intake
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {getFilteredMeals().map((meal, index) => (
                    <tr key={meal.dietId || `meal-${index}`}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {meal.dietName || "No Name"}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {meal.caloriesPerDay !== undefined ? meal.caloriesPerDay : "No Data"}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {meal.mealType || "No Type"}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {meal.hydrationRecommendation || "No Recommendation"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-500">No meal recommendations available.</p>
        )}
      </main>
    </div>
  );
}
