import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import WorkoutCard from '../components/WorkoutCard';

describe('WorkoutCard Component', () => {
  const workout = {
    workoutName: 'Morning Jog',
    workoutDescription: 'A light jog to start the day.',
    exerciseType: 'Cardio',
    difficultyLevel: 'Intermediate',
    durationMinutes: 30,
    caloriesBurned: 250,
    frequencyPerWeek: 4,
    goalId: 102,
    equipmentNeeded: 'Running Shoes',
    videoUrl: 'https://example.com/video',
    createdAt: '2025-03-20T12:00:00Z'
  };

  it('renders without crashing', () => {
    const { container } = render(<WorkoutCard workout={workout} />);
    expect(container).toBeInTheDocument();
  });

  it('displays correct workout name and description', () => {
    render(<WorkoutCard workout={workout} />);
    expect(screen.getByText(/Morning Jog/i)).toBeInTheDocument();
    expect(screen.getByText(/A light jog to start the day./i)).toBeInTheDocument();
  });

  it('displays correct exercise type and difficulty level', () => {
    render(<WorkoutCard workout={workout} />);
    expect(screen.getByText(/Cardio/i)).toBeInTheDocument();
    expect(screen.getByText(/Intermediate/i)).toBeInTheDocument();
  });

  it('displays correct workout duration, calories burned, and frequency', () => {
    render(<WorkoutCard workout={workout} />);
    expect(screen.getByText(/30 minutes/i)).toBeInTheDocument();
    expect(screen.getByText(/250 calories/i)).toBeInTheDocument();
    expect(screen.getByText(/4x per week/i)).toBeInTheDocument();
  });

  it('displays correct goal ID and equipment needed', () => {
    render(<WorkoutCard workout={workout} />);
    expect(screen.getByText(/Goal #102/i)).toBeInTheDocument();
    expect(screen.getByText(/Running Shoes/i)).toBeInTheDocument();
  });

  it('displays the correct formatted date', () => {
    render(<WorkoutCard workout={workout} />);
    expect(screen.getByText(/Added on Mar 20, 2025/i)).toBeInTheDocument();
  });
});
