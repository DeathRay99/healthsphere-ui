import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MealCard from '../components/MealCard';

describe('MealCard Component', () => {
  const meal = {
    mealType: 'breakfast',
    caloriesPerDay: 500,
    proteinPercentage: 30,
    carbsPercentage: 40,
    fatPercentage: 30,
    dietName: 'Keto Diet',
    dietDescription: 'A low-carb, high-fat diet.',
    hydrationRecommendation: 'Drink 2 liters of water.',
    foodsToInclude: 'Eggs, Avocado, Cheese',
    foodsToAvoid: 'Sugar, Bread, Rice',
    supplementsRecommended: 'Omega 3, Vitamin D',
    createdAt: '2025-03-20T12:00:00Z',
    goalId: 101
  };

  it('renders without crashing', () => {
    const { container } = render(<MealCard meal={meal} />);
    expect(container).toBeInTheDocument();
  });

  it('displays the correct meal type and calories', () => {
    render(<MealCard meal={meal} />);
    expect(screen.getByText(/breakfast/i)).toBeInTheDocument();
    expect(screen.getByText(/500 calories/i)).toBeInTheDocument();
  });

  it('displays correct nutrient percentages', () => {
    render(<MealCard meal={meal} />);
    expect(screen.getByText(/P: 30%/i)).toBeInTheDocument();
    expect(screen.getByText(/C: 40%/i)).toBeInTheDocument();
    expect(screen.getByText(/F: 30%/i)).toBeInTheDocument();
  });

  it('displays the diet name and description', () => {
    render(<MealCard meal={meal} />);
    expect(screen.getByText(/Keto Diet/i)).toBeInTheDocument();
    expect(screen.getByText(/A low-carb, high-fat diet./i)).toBeInTheDocument();
  });

  it('displays hydration recommendation, foods to include and avoid', () => {
    render(<MealCard meal={meal} />);
    expect(screen.getByText(/Drink 2 liters of water./i)).toBeInTheDocument();
    expect(screen.getByText(/Eggs, Avocado, Cheese/i)).toBeInTheDocument();
    expect(screen.getByText(/Sugar, Bread, Rice/i)).toBeInTheDocument();
  });

  it('displays supplements if recommended', () => {
    render(<MealCard meal={meal} />);
    expect(screen.getByText(/Omega 3, Vitamin D/i)).toBeInTheDocument();
  });

  it('displays the correct formatted date and goal ID', () => {
    render(<MealCard meal={meal} />);
    expect(screen.getByText(/Added on Mar 20, 2025/i)).toBeInTheDocument();
    expect(screen.getByText(/Goal #101/i)).toBeInTheDocument();
  });
});
