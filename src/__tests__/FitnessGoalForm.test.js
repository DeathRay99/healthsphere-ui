import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import FitnessGoalForm from "@/components/FitnessGoalForm";
import '@testing-library/jest-dom';

const mockOnSubmit = jest.fn();
const mockSetRefreshTrigger = jest.fn();

describe("FitnessGoalForm Component", () => {
  beforeEach(() => {
    mockOnSubmit.mockClear();
    mockSetRefreshTrigger.mockClear();
  });

//   it("renders all input fields and submit button", () => {
//     render(<FitnessGoalForm userId={1} onSubmit={mockOnSubmit} setRefreshTrigger={mockSetRefreshTrigger} />);

//     expect(screen.getByLabelText(/Goal Type/i)).toBeInTheDocument();
//     expect(screen.getByLabelText(/Target Weight/i)).toBeInTheDocument();
//     expect(screen.getByLabelText(/Target Body Fat/i)).toBeInTheDocument();
//     expect(screen.getByLabelText(/Start Date/i)).toBeInTheDocument();
//     expect(screen.getByLabelText(/Target Date/i)).toBeInTheDocument();
//     expect(screen.getByText(/Submit/i)).toBeInTheDocument();
//   });

//   it("shows an alert when target date is before or equal to start date", () => {
//     window.alert = jest.fn();
//     render(<FitnessGoalForm userId={1} onSubmit={mockOnSubmit} setRefreshTrigger={mockSetRefreshTrigger} />);

//     fireEvent.change(screen.getByLabelText(/Start Date/i), { target: { value: "2025-03-25" } });
//     fireEvent.change(screen.getByLabelText(/Target Date/i), { target: { value: "2025-03-20" } });

//     fireEvent.click(screen.getByText(/Submit/i));

//     expect(window.alert).toHaveBeenCalledWith("Target date must be greater than the start date.");
//   });

//   it("shows an alert when target weight is negative", () => {
//     window.alert = jest.fn();
//     render(<FitnessGoalForm userId={1} onSubmit={mockOnSubmit} setRefreshTrigger={mockSetRefreshTrigger} />);

//     fireEvent.change(screen.getByLabelText(/Target Weight/i), { target: { value: "-50" } });
//     fireEvent.click(screen.getByText(/Submit/i));

//     expect(window.alert).toHaveBeenCalledWith("Target weight cannot be negative.");
//   });

  it("shows an alert when body fat percentage is negative", () => {
    window.alert = jest.fn();
    render(<FitnessGoalForm userId={1} onSubmit={mockOnSubmit} setRefreshTrigger={mockSetRefreshTrigger} />);

    fireEvent.change(screen.getByLabelText(/Target Body Fat/i), { target: { value: "-10" } });
    fireEvent.click(screen.getByText(/Submit/i));

    expect(window.alert).toHaveBeenCalledWith("Body fat percentage cannot be negative.");
  });

//   it("calls onSubmit with correct data when form is valid", async () => {
//     render(<FitnessGoalForm userId={1} onSubmit={mockOnSubmit} setRefreshTrigger={mockSetRefreshTrigger} />);

//     fireEvent.change(screen.getByLabelText(/Goal Type/i), { target: { value: "Muscle Gain" } });
//     fireEvent.change(screen.getByLabelText(/Target Weight/i), { target: { value: "70" } });
//     fireEvent.change(screen.getByLabelText(/Target Body Fat/i), { target: { value: "15" } });
//     fireEvent.change(screen.getByLabelText(/Start Date/i), { target: { value: "2025-03-20" } });
//     fireEvent.change(screen.getByLabelText(/Target Date/i), { target: { value: "2025-04-20" } });

//     fireEvent.click(screen.getByText(/Submit/i));

//     expect(mockOnSubmit).toHaveBeenCalledWith({
//       userId: 1,
//       goalType: "Muscle Gain",
//       targetWeight: "70",
//       targetBodyFat: "15",
//       startDate: "2025-03-20",
//       targetDate: "2025-04-20"
//     }, expect.any(Function));
//     expect(mockSetRefreshTrigger).toHaveBeenCalled();
//   });
});
