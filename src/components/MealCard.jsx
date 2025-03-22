import React from 'react';
import { Clock, Utensils, Droplets, PieChart, Apple, Coffee, Ban } from 'lucide-react';

const MealCard = ({ meal }) => {
  const formattedDate = new Date(meal.createdAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });

  return (
    <div className="max-w-md rounded-lg overflow-hidden shadow-lg bg-white">
      {/* Image Area */}
      <div className="relative">
        <div className="h-48 bg-gray-200 flex items-center justify-center">
          <img 
            src={`/assets/meal1.jpg`}
            alt={`${meal.mealType} meal`}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-0 right-0 m-4">
            <span className="bg-green-500 text-white text-xs font-bold px-2.5 py-1.5 rounded">
              {meal.caloriesPerDay} calories
            </span>
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="px-6 py-4">
        <div className="flex justify-between items-center mb-2">
          <span className="bg-amber-100 text-amber-800 text-xs font-semibold px-2.5 py-0.5 rounded capitalize">
            {meal.mealType}
          </span>
          <div className="flex space-x-1">
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-0.5 rounded">
              P: {meal.proteinPercentage}%
            </span>
            <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-0.5 rounded">
              C: {meal.carbsPercentage}%
            </span>
            <span className="bg-red-100 text-red-800 text-xs font-semibold px-2 py-0.5 rounded">
              F: {meal.fatPercentage}%
            </span>
          </div>
        </div>
        
        <h2 className="font-bold text-xl mb-2">{meal.dietName}</h2>
        <p className="text-gray-700 text-sm mb-4">
          {meal.dietDescription}
        </p>
        
        <div className="mb-4">
          <div className="flex items-start mb-2">
            <Droplets size={16} className="mr-2 mt-1 flex-shrink-0 text-blue-500" />
            <span className="text-sm text-gray-600">{meal.hydrationRecommendation}</span>
          </div>
        </div>
        
        <div className="mb-4">
          <div className="flex items-start mb-2">
            <Apple size={16} className="mr-2 mt-1 flex-shrink-0 text-green-500" />
            <div>
              <p className="text-sm font-medium text-gray-700 mb-1">Foods to Include:</p>
              <p className="text-sm text-gray-600">{meal.foodsToInclude}</p>
            </div>
          </div>
        </div>
        
        <div className="mb-4">
          <div className="flex items-start mb-2">
            <Ban size={16} className="mr-2 mt-1 flex-shrink-0 text-red-500" />
            <div>
              <p className="text-sm font-medium text-gray-700 mb-1">Foods to Avoid:</p>
              <p className="text-sm text-gray-600">{meal.foodsToAvoid}</p>
            </div>
          </div>
        </div>

        {meal.supplementsRecommended && (
          <div className="mb-4">
            <div className="flex items-start">
              <Coffee size={16} className="mr-2 mt-1 flex-shrink-0 text-purple-500" />
              <div>
                <p className="text-sm font-medium text-gray-700 mb-1">Supplements:</p>
                <p className="text-sm text-gray-600">{meal.supplementsRecommended}</p>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Footer */}
      <div className="px-6 py-2 bg-gray-50 text-xs text-gray-500 flex justify-between">
        <span>Added on {formattedDate}</span>
        <span>Goal #{meal.goalId}</span>
      </div>
    </div>
  );
};

export default MealCard;