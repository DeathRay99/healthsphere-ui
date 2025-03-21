import React from 'react';
import { render, screen } from '@testing-library/react';
import ShowProfile from '@/components/ShowProfile';
import '@testing-library/jest-dom';

describe('ShowProfile Component', () => {
  const mockUserData = {
    firstName: 'John',
    lastName: 'Doe',
    dateOfBirth: '1990-05-15',
    age: 34,
    gender: 'Male',
    phoneNumber: '123-456-7890',
    address: '123 Main St, Springfield',
    height: 180,
    weight: 75,
    bmi: 23.1,
    bloodType: 'O+',
    dietaryPreference: 'Vegetarian',
    medicalConditions: '',
    allergies: '',
    medications: '',
  };

  it('renders personal information correctly', () => {
    render(<ShowProfile userData={mockUserData} />);

    expect(screen.getByText(/Full Name:/).parentElement).toHaveTextContent('John Doe');
    expect(screen.getByText(/Date of Birth:/).parentElement).toHaveTextContent('15/5/1990');
    expect(screen.getByText(/Age:/).parentElement).toHaveTextContent('34 years');
    expect(screen.getByText(/Gender:/).parentElement).toHaveTextContent('Male');
    expect(screen.getByText(/Phone:/).parentElement).toHaveTextContent('123-456-7890');
    expect(screen.getByText(/Address:/).parentElement).toHaveTextContent('123 Main St, Springfield');
  });

  it('renders health information correctly', () => {
    render(<ShowProfile userData={mockUserData} />);
    
    expect(screen.getByText(/Height:/).parentElement).toHaveTextContent('180 cm');
    expect(screen.getByText(/Weight:/).parentElement).toHaveTextContent('75 kg');
    expect(screen.getByText(/BMI:/).parentElement).toHaveTextContent('23.1 (Healthy)');
    expect(screen.getByText(/Blood Type:/).parentElement).toHaveTextContent('O+');
    expect(screen.getByText(/Dietary Preference:/).parentElement).toHaveTextContent('Vegetarian');
  });

  it('renders default values when medical information is missing', () => {
    render(<ShowProfile userData={mockUserData} />);
    
    const noneReportedElements = screen.getAllByText('None reported');
    expect(noneReportedElements).toHaveLength(3); // Medical Conditions, Allergies, Medications
  });

  it('renders medical information when provided', () => {
    const updatedUserData = {
      ...mockUserData,
      medicalConditions: 'Asthma',
      allergies: 'Peanuts',
      medications: 'Ibuprofen',
    };

    render(<ShowProfile userData={updatedUserData} />);
    
    expect(screen.getByText('Asthma')).toBeInTheDocument();
    expect(screen.getByText('Peanuts')).toBeInTheDocument();
    expect(screen.getByText('Ibuprofen')).toBeInTheDocument();
  });

  it('calculates and displays correct BMI category with appropriate color', () => {
    const underweightUser = { ...mockUserData, bmi: 17.5 };
    const healthyUser = { ...mockUserData, bmi: 22.0 };
    const overweightUser = { ...mockUserData, bmi: 27.5 };
    const obeseUser = { ...mockUserData, bmi: 32.0 };

    const { rerender } = render(<ShowProfile userData={underweightUser} />);
    expect(screen.getByText(/17.5 \(Underweight\)/)).toHaveClass('text-blue-500');

    rerender(<ShowProfile userData={healthyUser} />);
    expect(screen.getByText(/22.0 \(Healthy\)/)).toHaveClass('text-green-500');

    rerender(<ShowProfile userData={overweightUser} />);
    expect(screen.getByText(/27.5 \(Overweight\)/)).toHaveClass('text-yellow-500');

    rerender(<ShowProfile userData={obeseUser} />);
    expect(screen.getByText(/32.0 \(Obese\)/)).toHaveClass('text-red-500');
  });
});
