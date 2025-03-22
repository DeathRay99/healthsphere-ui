import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import GoalsTable from '@/components/GoalsTable';
import "@testing-library/jest-dom";

describe('GoalsTable Component', () => {
  const mockGoals = [
    {
      goalId: 1,
      goalType: 'Weight Loss',
      targetWeight: 70,
      targetBodyFat: 15,
      startDate: '2025-01-01',
      targetDate: '2025-06-01',
    },
    {
      goalId: 2,
      goalType: 'Muscle Gain',
      targetWeight: 85,
      targetBodyFat: 18,
      startDate: '2025-02-01',
      targetDate: '2025-08-01',
    },
  ];

  const mockSetGoals = jest.fn();

  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks();
    
    // Set up the alert and confirm mocks
    window.alert = jest.fn();
    window.confirm = jest.fn();
  });

  it('renders table headers correctly', () => {
    render(<GoalsTable goals={mockGoals} setGoals={mockSetGoals} />);

    expect(screen.getByText('Goal ID')).toBeInTheDocument();
    expect(screen.getByText('Goal Type')).toBeInTheDocument();
    expect(screen.getByText('Target Weight')).toBeInTheDocument();
    expect(screen.getByText('Target Body Fat')).toBeInTheDocument();
    expect(screen.getByText('Start Date')).toBeInTheDocument();
    expect(screen.getByText('Target Date')).toBeInTheDocument();
    expect(screen.getByText('Actions')).toBeInTheDocument();
  });

  it('renders goal data correctly', () => {
    render(<GoalsTable goals={mockGoals} setGoals={mockSetGoals} />);

    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('Weight Loss')).toBeInTheDocument();
    expect(screen.getByText('70 kg')).toBeInTheDocument();
    expect(screen.getByText('15%')).toBeInTheDocument();
    expect(screen.getByText('2025-01-01')).toBeInTheDocument();
    expect(screen.getByText('2025-06-01')).toBeInTheDocument();

    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('Muscle Gain')).toBeInTheDocument();
    expect(screen.getByText('85 kg')).toBeInTheDocument();
    expect(screen.getByText('18%')).toBeInTheDocument();
    expect(screen.getByText('2025-02-01')).toBeInTheDocument();
    expect(screen.getByText('2025-08-01')).toBeInTheDocument();
  });

  it('calls handleDelete and removes goal on confirmation', async () => {
    // Mock confirm to return true
    window.confirm.mockReturnValue(true);
    
    // Mock successful fetch
    global.fetch = jest.fn().mockResolvedValue({
      ok: true
    });

    render(<GoalsTable goals={mockGoals} setGoals={mockSetGoals} />);

    const deleteButton = screen.getAllByText('Delete')[0];
    fireEvent.click(deleteButton);

    expect(window.confirm).toHaveBeenCalledWith('Are you sure you want to delete this goal?');
    
    // Wait for the promise to resolve
    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledWith('http://localhost:9090/api/fitnessGoals/1', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      });
    });

    // Wait for the alert to be called after the async operation completes
    await waitFor(() => {
      expect(window.alert).toHaveBeenCalledWith('Fitness goal deleted successfully');
    });
    
    // Check if setGoals was called with the filtered goals
    expect(mockSetGoals).toHaveBeenCalledWith(
      expect.arrayContaining([
        expect.objectContaining({ goalId: 2 })
      ])
    );
  });

  it('does not delete if user cancels confirmation', async () => {
    // Mock confirm to return false
    window.confirm.mockReturnValue(false);
    
    // Mock fetch (should not be called)
    global.fetch = jest.fn();

    render(<GoalsTable goals={mockGoals} setGoals={mockSetGoals} />);

    const deleteButton = screen.getAllByText('Delete')[0];
    fireEvent.click(deleteButton);

    expect(window.confirm).toHaveBeenCalledWith('Are you sure you want to delete this goal?');
    
    // Neither fetch nor setGoals should be called
    expect(global.fetch).not.toHaveBeenCalled();
    
    // Wait a moment to ensure no async operations are happening
    await waitFor(() => {});
    
    expect(mockSetGoals).not.toHaveBeenCalled();
  });

  it('shows error on failed delete request', async () => {
    // Mock confirm to return true
    window.confirm.mockReturnValue(true);
    
    // Mock failed fetch
    global.fetch = jest.fn().mockResolvedValue({
      ok: false,
      statusText: 'Internal Server Error'
    });

    render(<GoalsTable goals={mockGoals} setGoals={mockSetGoals} />);

    const deleteButton = screen.getAllByText('Delete')[0];
    fireEvent.click(deleteButton);

    expect(window.confirm).toHaveBeenCalledWith('Are you sure you want to delete this goal?');
    
    // Wait for the fetch to be called
    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalled();
    });

    // Wait for the error alert to be shown
    await waitFor(() => {
      expect(window.alert).toHaveBeenCalledWith('Error deleting goal: Failed to delete goal: Internal Server Error');
    });
    
    // setGoals should not be called on error
    expect(mockSetGoals).not.toHaveBeenCalled();
  });

  it('renders Meal and Workout links correctly', () => {
    render(<GoalsTable goals={mockGoals} setGoals={mockSetGoals} />);

    const mealLinks = screen.getAllByText('Meals');
    const workoutLinks = screen.getAllByText('Workout');

    expect(mealLinks).toHaveLength(mockGoals.length);
    expect(workoutLinks).toHaveLength(mockGoals.length);
  });
});