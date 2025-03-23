"use client";

import React, { useState } from "react";

function FitnessGoalForm({ userId, onSubmit, setRefreshTrigger }) {
  const [formData, setFormData] = useState({
    goalType: "Weight Loss",
    targetWeight: "",
    targetBodyFat: "",
    startDate: "",
    targetDate: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.startDate && formData.targetDate && formData.startDate >= formData.targetDate) {
      alert("Target date must be greater than the start date.");
      return;
    }

    if (formData.targetWeight <= 0) {
      alert("Target weight cannot be zero or negative.");
      return;
    }

    if (formData.targetBodyFat <= 0) {
      alert("Body fat percentage cannot be zero or negative.");
      return;
    }

    const fitnessGoal = { ...formData, userId };
    if (onSubmit) {
      await onSubmit(fitnessGoal, setFormData);
      setRefreshTrigger(prev => prev + 1);
    } else {
      alert("Some error occurred. Please try again later.");
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-7xl mx-auto mt-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Add a new Fitness Goal</h2>
      <form onSubmit={handleSubmit} className="w-[95%] mx-auto grid grid-cols-2 md:grid-cols-6 gap-2 items-center">
        <div>
          <label className="block text-sm font-medium text-gray-700">Goal Type</label>
          <select
            name="goalType"
            value={formData.goalType}
            onChange={handleChange}
            className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500"
          >
            <option value="Weight Loss">Weight Loss</option>
            <option value="Muscle Gain">Muscle Gain</option>
            <option value="Maintain Weight">Maintain Weight</option>
            <option value="Endurance">Endurance</option>
            <option value="Flexibility">Flexibility</option>
            <option value="Strength">Strength</option>
            <option value="Speed">Speed</option>
            <option value="Balance">Balance</option>
            <option value="Cardio Fitness">Cardio Fitness</option>
            <option value="Sports Performance">Sports Performance</option>
            <option value="Mental Wellness">Mental Wellness</option>
            <option value="Nutrition">Nutrition</option>
            <option value="Habit Formation">Habit Formation</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Target Weight (kg)</label>
          <input
            type="number"
            name="targetWeight"
            value={formData.targetWeight}
            onChange={handleChange}
            className="w-40 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="targetBodyFat" >Target Body Fat (%)</label>
          <input
            id="targetBodyFat"
            type="number"
            name="targetBodyFat"
            value={formData.targetBodyFat}
            onChange={handleChange}
            className="w-40 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Start Date</label>
          <input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Target Date</label>
          <input
            type="date"
            name="targetDate"
            value={formData.targetDate}
            onChange={handleChange}
            className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div className="self-end">
          <button
            type="submit"
            className="px-6 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default FitnessGoalForm;
