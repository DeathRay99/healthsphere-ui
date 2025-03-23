"use client"
import React from 'react'
import WorkoutCard from '@/components/WorkoutCard'
import { useState, useEffect } from 'react';
import { useSearchParams } from "next/navigation";
import useAuthRedirect from '@/hooks/useAuthRedirect';

function generateWorkouts() {
  const [workouts, setWorkouts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [canGenerate, setCanGenerate] = useState(true);
  const [timeUntilNextGeneration, setTimeUntilNextGeneration] = useState('');
  const [lastGenerationDate, setLastGenerationDate] = useState(null);

  const searchParams = useSearchParams();
  const userId = searchParams.get("userId");
  const goalId = searchParams.get("goalId");

  useAuthRedirect(userId);

  // Load existing workouts and check generation eligibility on component mount
  useEffect(() => {
    
    const fetchUserWorkouts = async () => {
      try {
        const response = await fetch(
          `http://localhost:9090/api/workoutRecommendations/get?userId=${userId}&goalId=${goalId}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        
        const data = await response.json();
        if (response.ok) {
          if (data && data.length > 0) {
            // Find the latest generation date
            const creationDates = data.map(workout => new Date(workout.createdAt));
            const mostRecentDate = new Date(Math.max(...creationDates));
            setLastGenerationDate(mostRecentDate);
            
            // Filter to only show workouts from the latest generation date
            const latestWorkouts = data.filter(workout => {
              const workoutDate = new Date(workout.createdAt);
              // Compare dates but ignore time differences (just compare the day)
              return workoutDate.setHours(0,0,0,0) === mostRecentDate.setHours(0,0,0,0);
            });
            
            setWorkouts(latestWorkouts);
            checkGenerationEligibilityFromWorkouts(data);
          } else {
            setCanGenerate(true);
          }
        } else {
          console.log(data.err);
          setCanGenerate(true);
        }
      } catch (error) {
        console.error('Error fetching workouts:', error);
        setCanGenerate(true);
      }
    };
    
    if (userId && goalId) {
      fetchUserWorkouts();
    } else {
      setWorkouts([]);
      setCanGenerate(true);
    }
  }, [userId, goalId]);

  // Update the countdown timer every minute if we can't generate yet
  useEffect(() => {
    if (!canGenerate && lastGenerationDate) {
      const timer = setInterval(() => {
        updateTimeUntilNextGeneration(lastGenerationDate);
      }, 60000); // Update every minute
      
      return () => clearInterval(timer);
    }
  }, [canGenerate, lastGenerationDate]);

  // Check if user can generate new workouts based on workout timestamp data
  const checkGenerationEligibilityFromWorkouts = (workoutData) => {
    if (!workoutData || workoutData.length === 0) {
      setCanGenerate(true);
      return;
    }
    
    // Find the most recent workout creation timestamp
    const creationDates = workoutData.map(workout => new Date(workout.createdAt));
    const mostRecentDate = new Date(Math.max(...creationDates));
    setLastGenerationDate(mostRecentDate);
    
    // Calculate if a week has passed since the most recent workout was created
    const now = new Date();
    const oneWeek = 7 * 24 * 60 * 60 * 1000; // 7 days in milliseconds
    
    // For testing, you can use a shorter duration
    // const oneWeek = 5 * 60 * 1000; // 5 minutes in milliseconds
    
    const timeDiff = now - mostRecentDate;
    const canGen = timeDiff >= oneWeek;
    
    setCanGenerate(canGen);
    
    if (!canGen) {
      updateTimeUntilNextGeneration(mostRecentDate);
    }
    
    return canGen;
  };
  
  // Calculate time until next generation is allowed
  const updateTimeUntilNextGeneration = (generationDate) => {
    const now = new Date();
    const oneWeek = 7 * 24 * 60 * 60 * 1000; // 7 days in milliseconds
    
    // For testing purposes
    // const oneWeek = 5 * 60 * 1000; // 5 minutes in milliseconds
    
    const nextGenerationDate = new Date(generationDate.getTime() + oneWeek);
    
    const timeRemaining = nextGenerationDate - now;
    
    if (timeRemaining <= 0) {
      setCanGenerate(true);
      setTimeUntilNextGeneration('');
      return;
    }
    
    // Calculate days, hours, minutes
    const days = Math.floor(timeRemaining / (24 * 60 * 60 * 1000));
    const hours = Math.floor((timeRemaining % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
    const minutes = Math.floor((timeRemaining % (60 * 60 * 1000)) / (60 * 1000));
    
    setTimeUntilNextGeneration(`${days}d ${hours}h ${minutes}m`);
  };

  const generateNewWorkouts = async () => {
    // If they can't generate yet, show message and return
    if (!canGenerate) {
      alert(`Please complete this week's workouts first! New workouts will be available in ${timeUntilNextGeneration}.`);
      return;
    }
    
    setIsLoading(true);
    
    try {
      const response = await fetch(
        `http://localhost:9090/api/workoutRecommendations/generate?userId=${userId}&goalId=${goalId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error("Failed to generate workouts");
      }
      
      // Set workouts with newly generated data
      setWorkouts(data);
      
      // Get most recent creation date from the new workouts
      checkGenerationEligibilityFromWorkouts(data);
      
      alert("Workouts generated successfully!");
      console.log(data);
      
    } catch (error) {
      console.error('Error generating workouts:', error);
      alert("Error generating workouts. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // Format date in a user-friendly way
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Hero Section with Catchy Heading */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          Your Weekly AI-Powered Fitness Revolution
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
          Come back every week to generate personalized workouts based on your goals, 
          progress, and preferences — crafted by AI to evolve as you do.
        </p>
        
        {!canGenerate && lastGenerationDate && (
          <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-md mb-6 max-w-2xl mx-auto">
            <p className="text-amber-700 font-medium">Your next workout refresh will be available in {timeUntilNextGeneration}</p>
            <p className="mt-2 text-gray-700">Focus on completing this week's workouts first!</p>
          </div>
        )}
        
        <button
          onClick={generateNewWorkouts}
          disabled={isLoading}
          className={`bg-gradient-to-r ${canGenerate ? 'from-blue-500 to-purple-600' : 'from-gray-400 to-gray-500'} text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed`}
        >
          {isLoading ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Generating...
            </span>
          ) : (
            canGenerate ? "Generate Your Weekly Workouts" : "Complete Current Workouts First"
          )}
        </button>
      </div>
      
      {workouts.length > 0 && (
        <div className="mt-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-gray-800">Your Personalized Workout Plan</h2>
            {lastGenerationDate && (
              <p className="text-gray-600">
                Generated on {formatDate(lastGenerationDate)}
              </p>
            )}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 w-fit mx-auto">
            {workouts.map((workout, index) => (
              <div key={index} className="flex">
                <WorkoutCard workout={workout} />
              </div>
            ))}
          </div>
        </div>
      )}

      {workouts.length === 0 && !isLoading && (
        <div className="text-center mt-16 p-8 border-2 border-dashed border-gray-300 rounded-lg">
          <h3 className="text-xl font-medium text-gray-700 mb-2">No Workouts Generated for this week Yet</h3>
          <p className="text-gray-500 mb-4">Click the button above to generate your personalized weekly workout plan</p>
        </div>
      )}
    </div>
  )
}

export default generateWorkouts