"use client"

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import WorkoutCard from '@/components/WorkoutCard';
import Loader from '@/components/Loader';
import useAuthRedirect from '@/hooks/useAuthRedirect';

const userWorkouts = () => {
  const [workouts, setWorkouts] = useState([]);
  const [groupedWorkouts, setGroupedWorkouts] = useState({});
  const [loading, setLoading] = useState(true);
  const { userId } = useParams();

  useAuthRedirect(userId);

  useEffect(() => {
    // Fetch workouts for the specific user
    const fetchWorkouts = async () => {
      try {
       
        const response = await fetch(`http://localhost:9090/api/workoutRecommendations/${userId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch workouts');
        }
        const data = await response.json();
        
        // Sort workouts by date (newest first)
        const sortedWorkouts = data.sort((a, b) => 
          new Date(b.createdAt) - new Date(a.createdAt)
        );
        
        setWorkouts(sortedWorkouts);
        
        // Group workouts by date
        const grouped = groupWorkoutsByDate(sortedWorkouts);
        setGroupedWorkouts(grouped);
        
        setLoading(false);
      } catch (error) {
        console.error('Error fetching workouts:', error);
        setLoading(false);
      }
    };

    fetchWorkouts();
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

  // Function to check if date is in current week
  const isThisWeek = (dateString) => {
    const date = new Date(dateString);
    const today = new Date();
    
    // Get the first day of the week (Sunday)
    const firstDayOfWeek = new Date(today);
    const day = today.getDay();
    firstDayOfWeek.setDate(today.getDate() - day);
    
    // Get the last day of the week (Saturday)
    const lastDayOfWeek = new Date(firstDayOfWeek);
    lastDayOfWeek.setDate(firstDayOfWeek.getDate() + 6);
    
    // Check if the date is between first and last day of the week
    return date >= firstDayOfWeek && date <= lastDayOfWeek;
  };

  // Function to group workouts by date
  const groupWorkoutsByDate = (workouts) => {
    const grouped = {};
    
    workouts.forEach(workout => {
      const date = new Date(workout.createdAt);
      // Use YYYY-MM-DD format as a key
      const dateKey = date.toISOString().split('T')[0];
      
      if (!grouped[dateKey]) {
        const formattedDate = formatDate(date);
        const currentWeek = isThisWeek(date);
        
        grouped[dateKey] = {
          displayDate: currentWeek ? `${formattedDate} (Current Week)` : formattedDate,
          workouts: [],
          isCurrentWeek: currentWeek
        };
      }
      
      grouped[dateKey].workouts.push(workout);
    });
    
    return grouped;
  };

  if (loading) {
    return (
      <Loader/>
    );
  }

  if (workouts.length === 0) {
    return (
      <div className="text-center p-8">
        <h2 className="text-2xl font-bold mb-4">No Workouts Found</h2>
        <p>No workouts have been generated for this user yet.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8">Your Generated Workouts' history</h1>
      
      {Object.keys(groupedWorkouts).sort().reverse().map(dateKey => {
        const dateGroup = groupedWorkouts[dateKey];
        return (
          <div key={dateKey} className="mb-8">
            <h2 className={`text-xl font-semibold mb-4 pb-2 border-b ${dateGroup.isCurrentWeek ? 'text-blue-600' : 'text-gray-700'}`}>
              {dateGroup.displayDate}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-fit mx-auto">
              {dateGroup.workouts.map((workout, index) => (
                <WorkoutCard key={`${dateKey}-${index}`} workout={workout} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default userWorkouts;