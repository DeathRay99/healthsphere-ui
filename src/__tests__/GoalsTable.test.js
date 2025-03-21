// import React from 'react';
// import { render, screen, fireEvent } from '@testing-library/react';
// import GoalsTable from '@/components/GoalsTable';
// import "@testing-library/jest-dom";

// describe('GoalsTable Component', () => {
//   const mockGoals = [
//     {
//       goalId: 1,
//       goalType: 'Weight Loss',
//       targetWeight: 70,
//       targetBodyFat: 15,
//       startDate: '2025-01-01',
//       targetDate: '2025-06-01',
//     },
//     {
//       goalId: 2,
//       goalType: 'Muscle Gain',
//       targetWeight: 85,
//       targetBodyFat: 18,
//       startDate: '2025-02-01',
//       targetDate: '2025-08-01',
//     },
//   ];

//   const mockSetGoals = jest.fn();

//   it('renders table headers correctly', () => {
//     render(<GoalsTable goals={mockGoals} setGoals={mockSetGoals} />);
    
//     expect(screen.getByText('Goal ID')).toBeInTheDocument();
//     expect(screen.getByText('Goal Type')).toBeInTheDocument();
//     expect(screen.getByText('Target Weight')).toBeInTheDocument();
//     expect(screen.getByText('Target Body Fat')).toBeInTheDocument();
//     expect(screen.getByText('Start Date')).toBeInTheDocument();
//     expect(screen.getByText('Target Date')).toBeInTheDocument();
//     expect(screen.getByText('Actions')).toBeInTheDocument();
//   });

//   it('renders goal data correctly', () => {
//     render(<GoalsTable goals={mockGoals} setGoals={mockSetGoals} />);
    
//     expect(screen.getByText('1')).toBeInTheDocument();
//     expect(screen.getByText('Weight Loss')).toBeInTheDocument();
//     expect(screen.getByText('70 kg')).toBeInTheDocument();
//     expect(screen.getByText('15%')).toBeInTheDocument();
//     expect(screen.getByText('2025-01-01')).toBeInTheDocument();
//     expect(screen.getByText('2025-06-01')).toBeInTheDocument();

//     expect(screen.getByText('2')).toBeInTheDocument();
//     expect(screen.getByText('Muscle Gain')).toBeInTheDocument();
//     expect(screen.getByText('85 kg')).toBeInTheDocument();
//     expect(screen.getByText('18%')).toBeInTheDocument();
//     expect(screen.getByText('2025-02-01')).toBeInTheDocument();
//     expect(screen.getByText('2025-08-01')).toBeInTheDocument();
//   });

//   it('calls handleDelete and removes goal on confirmation', async () => {
//     global.fetch = jest.fn(() =>
//       Promise.resolve({ ok: true })
//     );

//     const confirmSpy = jest.spyOn(window, 'confirm').mockImplementation(() => true);
//     render(<GoalsTable goals={mockGoals} setGoals={mockSetGoals} />);

//     const deleteButton = screen.getAllByText('Delete')[0];
//     fireEvent.click(deleteButton);

//     expect(confirmSpy).toHaveBeenCalledWith('Are you sure you want to delete this goal?');
//     expect(global.fetch).toHaveBeenCalledWith('http://localhost:9090/api/fitnessGoals/1', {
//       method: 'DELETE',
//       headers: { 'Content-Type': 'application/json' },
//     });

//     expect(mockSetGoals).toHaveBeenCalledWith(expect.any(Array));

//     confirmSpy.mockRestore();
//     global.fetch.mockRestore();
//   });

//   it('does not delete if user cancels confirmation', () => {
//     const confirmSpy = jest.spyOn(window, 'confirm').mockImplementation(() => false);
//     render(<GoalsTable goals={mockGoals} setGoals={mockSetGoals} />);

//     const deleteButton = screen.getAllByText('Delete')[0];
//     fireEvent.click(deleteButton);

//     expect(confirmSpy).toHaveBeenCalledWith('Are you sure you want to delete this goal?');
//     expect(global.fetch).not.toHaveBeenCalled();
//     expect(mockSetGoals).not.toHaveBeenCalled();

//     confirmSpy.mockRestore();
//   });

//   it('shows error on failed delete request', async () => {
//     global.fetch = jest.fn(() =>
//       Promise.resolve({ ok: false, statusText: 'Internal Server Error' })
//     );

//     const confirmSpy = jest.spyOn(window, 'confirm').mockImplementation(() => true);
//     const errorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

//     render(<GoalsTable goals={mockGoals} setGoals={mockSetGoals} />);

//     const deleteButton = screen.getAllByText('Delete')[0];
//     fireEvent.click(deleteButton);

//     expect(global.fetch).toHaveBeenCalledWith('http://localhost:9090/api/fitnessGoals/1', {
//       method: 'DELETE',
//       headers: { 'Content-Type': 'application/json' },
//     });

//     await screen.findByText('Error deleting goal: Internal Server Error');
//     expect(errorSpy).toHaveBeenCalled();

//     confirmSpy.mockRestore();
//     errorSpy.mockRestore();
//     global.fetch.mockRestore();
//   });

//   it('renders Meal and Workout links correctly', () => {
//     render(<GoalsTable goals={mockGoals} setGoals={mockSetGoals} />);

//     const mealLinks = screen.getAllByText('Meals');
//     const workoutLinks = screen.getAllByText('Workout');

//     expect(mealLinks).toHaveLength(mockGoals.length);
//     expect(workoutLinks).toHaveLength(mockGoals.length);
//   });
// });
