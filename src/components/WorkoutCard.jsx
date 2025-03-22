import React from 'react';
import { Clock, Dumbbell, Flame, BarChart, Calendar, Play } from 'lucide-react';

const WorkoutCard = ({workout}) => {
  const formattedDate = new Date(workout.createdAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });

  // Function to determine difficulty badge color
  const getDifficultyBadgeClasses = (level) => {
    switch(level.toLowerCase()) {
      case 'beginner':
      case 'easy':
        return 'bg-green-100 text-green-800';
      case 'intermediate':
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'advanced':
      case 'hard':
      case 'expert':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="max-w-md rounded-lg overflow-hidden shadow-lg bg-white">
      {/* Video Thumbnail Area */}
      <div className="relative">
        <div className="h-48 bg-gray-200 flex items-center justify-center">
          <img 
            src="/assets/jogging_man.avif" 
            alt="Workout thumbnail" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <a 
              href={workout.videoUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-red-600 rounded-full p-3 text-white hover:bg-red-700 transition"
            >
              <Play size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="px-6 py-4">
        <div className="flex justify-between items-center mb-2">
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
            {workout.exerciseType}
          </span>
          <span className={`text-xs font-semibold px-2.5 py-0.5 rounded ${getDifficultyBadgeClasses(workout.difficultyLevel)}`}>
            {workout.difficultyLevel}
          </span>
        </div>
        
        <h2 className="font-bold text-xl mb-2">{workout.workoutName}</h2>
        <p className="text-gray-700 text-sm mb-4">
          {workout.workoutDescription}
        </p>
        
        <div className="grid grid-cols-2 gap-2 mb-4">
          <div className="flex items-center text-sm text-gray-600">
            <Clock size={16} className="mr-1" />
            <span>{workout.durationMinutes} minutes</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Flame size={16} className="mr-1" />
            <span>{workout.caloriesBurned} calories</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Calendar size={16} className="mr-1" />
            <span>{workout.frequencyPerWeek}x per week</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <BarChart size={16} className="mr-1" />
            <span>Goal #{workout.goalId}</span>
          </div>
        </div>
        
        <div className="flex items-start mb-4">
          <Dumbbell size={16} className="mr-1 mt-1 flex-shrink-0" />
          <span className="text-sm text-gray-600">{workout.equipmentNeeded}</span>
        </div>
      </div>
      
      {/* Footer */}
      <div className="px-6 py-2 bg-gray-50 text-xs text-gray-500">
        Added on {formattedDate}
      </div>
    </div>
  );
};

export default WorkoutCard;