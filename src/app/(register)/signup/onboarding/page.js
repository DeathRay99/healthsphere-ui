// pages/onboarding.js
"use client"
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import useAuthStore from "@/app/store/authStore";
import Image from "next/image";


export default function OnboardingForm() {
  const { isLoggedIn, initializeAuth } = useAuthStore();
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    gender: "",
    height: "",
    weight: "",
    phoneNumber: "",
    address: "",
    profilePictureUrl: "",
    bloodType: "",
    medicalConditions: "",
    allergies: "",
    medications: "",
    dietaryPreference: "",
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    // Check if user is authenticated
    initializeAuth()
    if (!isLoggedIn) {
      router.push("/login");
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };


  const requiredFields = {
    1: ["firstName", "lastName", "dateOfBirth", "gender", "height", "weight"],
    2: ["bloodType", "medicalConditions"],
    3: ["dietaryPreference", "allergies", "medications"],
  };

  const validateStep = () => {
    const fieldsToCheck = requiredFields[currentStep];
    for (let field of fieldsToCheck) {
      if (!formData[field].trim()) {
        setErrorMessage("Please fill all required fields before proceeding.");
        return false;
      }
    }
    setErrorMessage("");
    return true;
  };

  const nextStep = () => {
    if (validateStep()) {
      setCurrentStep(currentStep + 1);
    }
  };


  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const userId = localStorage.getItem("userId");
      console.log(formData)

      const response = await fetch(`http://localhost:9090/api/users/${userId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          user_id: userId,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to save profile data");
      }
      alert("profile created successfully");
      router.push("/");
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">

      <div className="flex flex-col md:flex-row min-h-screen">
        {/* Left side - Image and text */}
        <div className="bg-blue-600 text-white w-full md:w-1/3 p-8 flex flex-col justify-center items-center">
          <div className="mb-6">
            <Image src="/assets/meal1.jpg" width={300} height={100} alt="meal_image" className="  rounded-2xl object-contain "/>
          </div>
          <h1 className="text-3xl font-bold mb-4 text-center">
            Your Journey to Better Health Starts Here
          </h1>
          <p className="text-lg text-center mb-6">
            Complete your profile to get personalized health recommendations
            tailored just for you.
          </p>
          <div className="bg-white text-black bg-opacity-20 p-4 rounded-lg">
            <p className="text-sm">Your information helps us:</p>
            <ul className="list-disc ml-5 mt-2 text-sm">
              <li>Suggest meals that match your dietary needs</li>
              <li>Create safe and effective workout plans</li>
              <li>Track your health progress accurately</li>
              <li>Provide relevant health insights</li>
            </ul>
          </div>
        </div>

        {/* Right side - Form */}
        <div className="w-full md:w-2/3 p-8">
          <div className="max-w-2xl mx-auto">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800">
                Complete Your Health Profile
              </h2>
              <p className="text-gray-600">Step {currentStep} of 3</p>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mt-3">
                <div
                  className="bg-blue-600 h-2.5 rounded-full"
                  style={{ width: `${(currentStep / 3) * 100}%` }}
                ></div>
              </div>
            </div>

            {errorMessage && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                {errorMessage}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              {/* Step 1 - Basic Information */}
              {currentStep === 1 && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 mb-1">
                        First Name *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-1">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-1">
                      Date of Birth *
                    </label>
                    <input
                      type="date"
                      name="dateOfBirth"
                      value={formData.dateOfBirth}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-1">Gender *</label>
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    >
                      <option value="">Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 mb-1">
                        Height (cm) *
                      </label>
                      <input
                        type="number"
                        name="height"
                        value={formData.height}
                        onChange={handleChange}
                        step="0.01"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-1">
                        Weight (kg) *
                      </label>
                      <input
                        type="number"
                        name="weight"
                        value={formData.weight}
                        onChange={handleChange}
                        step="0.01"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              )}

              {/* Step 2 - Additional Information */}
              {currentStep === 2 && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-700 mb-1">Address</label>
                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      rows="3"
                    ></textarea>
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-1">
                      Blood Type *
                    </label>
                    <select
                      name="bloodType"
                      value={formData.bloodType}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    >
                      <option value="">Select Blood Type</option>
                      <option value="A+">A+</option>
                      <option value="A-">A-</option>
                      <option value="B+">B+</option>
                      <option value="B-">B-</option>
                      <option value="AB+">AB+</option>
                      <option value="AB-">AB-</option>
                      <option value="O+">O+</option>
                      <option value="O-">O-</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-1">
                      Medical Conditions *
                    </label>
                    <textarea
                      name="medicalConditions"
                      value={formData.medicalConditions}
                      onChange={handleChange}
                      placeholder="E.g., asthma, heart condition, knee problems, discomfort in any body part, write none if not applicable"
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      rows="3"
                      required
                    ></textarea>
                  </div>
                </div>
              )}

              {/* Step 3 - Health Information */}
              {currentStep === 3 && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-700 mb-1">
                      Allergies *
                    </label>
                    <textarea
                      name="allergies"
                      value={formData.allergies}
                      onChange={handleChange}
                      placeholder="List any food or medication allergies, write none if not applicable"
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      rows="3"
                      required
                    ></textarea>
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-1">
                      Medications *
                    </label>
                    <textarea
                      name="medications"
                      value={formData.medications}
                      onChange={handleChange}
                      placeholder="List any medications you are currently taking, , write none if not applicable"
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      rows="3"
                      required
                    ></textarea>
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-1">
                      Dietary Preference *
                    </label>
                    <select
                      name="dietaryPreference"
                      value={formData.dietaryPreference}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    >
                      <option value="">Select Dietary Preference</option>
                      <option value="Vegetarian">Vegetarian</option>
                      <option value="Non-Vegetarian">Non-Vegetarian</option>
                      <option value="Vegan">Vegan</option>
                    </select>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <h3 className="text-blue-800 font-semibold mb-2">
                      Your Privacy Matters
                    </h3>
                    <p className="text-sm text-blue-700">
                      Your health information is protected and will only be used
                      to provide you with personalized recommendations. We never
                      share your personal data with third parties.
                    </p>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="mt-8 flex justify-between">
                {currentStep > 1 && (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="px-6 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 transition"
                  >
                    Previous
                  </button>
                )}

                {currentStep < 3 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="ml-auto px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  >
                    Next
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="ml-auto px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 transition flex items-center"
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Processing...
                      </>
                    ) : (
                      "Complete Profile"
                    )}
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
