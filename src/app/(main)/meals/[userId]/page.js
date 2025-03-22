"use client"

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import MealCard from '@/components/MealCard';
import useAuthRedirect from '@/hooks/useAuthRedirect';
import Loader from '@/components/Loader';

const UserMeals = () => {
  const [meals, setMeals] = useState([]);
  const [groupedMeals, setGroupedMeals] = useState({});
  const [loading, setLoading] = useState(true);
  const { userId } = useParams();

 useAuthRedirect(userId);

  useEffect(() => {
    // Fetch meals for the specific user
    const fetchMeals = async () => {
      try {
        const response = await fetch(`http://localhost:9090/api/dietRecommendations/${userId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch meals');
        }
        const data = await response.json();
        
        // Sort meals by date (newest first)
        const sortedMeals = data.sort((a, b) => 
          new Date(b.createdAt) - new Date(a.createdAt)
        );
        
        setMeals(sortedMeals);
        
        // Group meals by date
        const grouped = groupMealsByDate(sortedMeals);
        setGroupedMeals(grouped);
        
        setLoading(false);
      } catch (error) {
        console.error('Error fetching meals:', error);
        setLoading(false);
      }
    };

    fetchMeals();
  }, [userId]);

  // Function to format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Function to check if date is today
  const isToday = (dateString) => {
    const date = new Date(dateString);
    const today = new Date();
    
    return date.getDate() === today.getDate() &&
           date.getMonth() === today.getMonth() &&
           date.getFullYear() === today.getFullYear();
  };

  // Function to group meals by date
  const groupMealsByDate = (meals) => {
    const grouped = {};
    
    meals.forEach(meal => {
      const date = new Date(meal.createdAt);
      // Use YYYY-MM-DD format as a key
      const dateKey = date.toISOString().split('T')[0];
      
      if (!grouped[dateKey]) {
        const formattedDate = formatDate(date);
        const isCurrentDay = isToday(date);
        
        grouped[dateKey] = {
          displayDate: isCurrentDay ? `${formattedDate} (Today)` : formattedDate,
          meals: [],
          isCurrentDay: isCurrentDay
        };
      }
      
      grouped[dateKey].meals.push(meal);
    });
    
    return grouped;
  };

  if (loading) {
    return (
      <Loader/>
    );
  }

  if (meals.length === 0) {
    return (
      <div className="text-center p-8">
        <h2 className="text-2xl font-bold mb-4">No Meals Found</h2>
        <p>No meal recommendations have been generated for this user yet.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8">Your Meal Recommendations History</h1>
      
      {Object.keys(groupedMeals).sort().reverse().map(dateKey => {
        const dateGroup = groupedMeals[dateKey];
        return (
          <div key={dateKey} className="mb-8">
            <h2 className={`text-xl font-semibold mb-4 pb-2 border-b ${dateGroup.isCurrentDay ? 'text-green-600' : 'text-gray-700'}`}>
              {dateGroup.displayDate}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-fit mx-auto">
              {dateGroup.meals.map((meal, index) => (
                <MealCard key={`${dateKey}-${index}`} meal={meal} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default UserMeals;