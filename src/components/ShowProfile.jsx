import React from 'react'

function ShowProfile({userData}) {

    const calculateBMICategory = (bmi) => {
        if (bmi < 18.5) return { category: "Underweight", color: "text-blue-500" };
        if (bmi < 25) return { category: "Healthy", color: "text-green-500" };
        if (bmi < 30) return { category: "Overweight", color: "text-yellow-500" };
        return { category: "Obese", color: "text-red-500" };
      };
    
      const bmiInfo = calculateBMICategory(userData.bmi);
  return (
    <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-medium text-gray-700 mb-3">Personal Information</h3>
              <div className="space-y-2">
                <p className="text-sm">
                  <span className="font-medium text-gray-500">Full Name:</span> {userData.firstName} {userData.lastName}
                </p>
                <p className="text-sm">
                  <span className="font-medium text-gray-500">Date of Birth:</span> {new Date(userData.dateOfBirth).toLocaleDateString()}
                </p>
                <p className="text-sm">
                  <span className="font-medium text-gray-500">Age:</span> {userData.age} years
                </p>
                <p className="text-sm">
                  <span className="font-medium text-gray-500">Gender:</span> {userData.gender}
                </p>
                <p className="text-sm">
                  <span className="font-medium text-gray-500">Phone:</span> {userData.phoneNumber}
                </p>
                <p className="text-sm">
                  <span className="font-medium text-gray-500">Address:</span> {userData.address}
                </p>
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-medium text-gray-700 mb-3">Health Information</h3>
              <div className="space-y-2">
                <p className="text-sm">
                  <span className="font-medium text-gray-500">Height:</span> {userData.height} cm
                </p>
                <p className="text-sm">
                  <span className="font-medium text-gray-500">Weight:</span> {userData.weight} kg
                </p>
                <p className="text-sm">
                  <span className="font-medium text-gray-500">BMI:</span> 
                  <span className={`ml-1 font-medium ${bmiInfo.color}`}>
                    {userData.bmi.toFixed(1)} ({bmiInfo.category})
                  </span>
                </p>
                <p className="text-sm">
                  <span className="font-medium text-gray-500">Blood Type:</span> {userData.bloodType}
                </p>
                <p className="text-sm">
                  <span className="font-medium text-gray-500">Dietary Preference:</span> {userData.dietaryPreference}
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-medium text-gray-700 mb-3">Medical Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <h4 className="text-sm font-medium text-gray-500 mb-1">Medical Conditions</h4>
                <p className="text-sm bg-white p-2 rounded min-h-12 border border-gray-100">
                  {userData.medicalConditions || "None reported"}
                </p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-500 mb-1">Allergies</h4>
                <p className="text-sm bg-white p-2 rounded min-h-12 border border-gray-100">
                  {userData.allergies || "None reported"}
                </p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-500 mb-1">Medications</h4>
                <p className="text-sm bg-white p-2 rounded min-h-12 border border-gray-100">
                  {userData.medications || "None reported"}
                </p>
              </div>
            </div>
          </div>
        </div>
  )
}

export default ShowProfile