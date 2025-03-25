import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import OnboardingForm from "@/app/(register)/signup/onboarding/page";
import "@testing-library/jest-dom";

jest.mock("next/image", () => ({ src, alt }) => <img src={src} alt={alt} />);
jest.mock("next/navigation", () => ({ useRouter: jest.fn(() => ({ push: jest.fn() })) }));
jest.mock("@/app/store/authStore", () => jest.fn(() => ({ isLoggedIn: true, initializeAuth: jest.fn() })));
jest.mock("@/hooks/useAuthRedirect", () => jest.fn());

describe("OnboardingForm Component Validation Tests", () => {
  const setup = () => {
    return render(<OnboardingForm />);
  };

  beforeEach(() => {
    jest.clearAllMocks();
    localStorage.setItem("userId", "123");
    localStorage.setItem("role", "USER");
  });

  it("shows error when required fields are empty on Next click (Step 1)", async () => {
    setup();
    fireEvent.click(screen.getByText(/Next/i));

    await waitFor(() => {
      expect(
        screen.getByText(/Please fill all required fields before proceeding\./i)
      ).toBeInTheDocument();
    });
  });

  it("shows error if height or weight is not a positive number", async () => {
    const { container } = setup();
  
    container.querySelector('[name="firstName"]').value = "John";
    container.querySelector('[name="lastName"]').value = "Doe";
    container.querySelector('[name="dateOfBirth"]').value = "2000-01-01";
    container.querySelector('[name="gender"]').value = "Male";
    container.querySelector('[name="height"]').value = "-10";
    container.querySelector('[name="weight"]').value = "-5";
  
    fireEvent.click(screen.getByText(/Next/i));
  
    await waitFor(() => {
        expect(screen.findByText(/Height must be a positive number\./i)).toBeTruthy();
        expect(screen.findByText(/Weight must be a positive number\./i)).toBeTruthy();
      });      
      
  });
  

  it("shows error if date of birth is in the future", async () => {
    const { container } = setup();
  
    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + 1);
    const formattedDate = futureDate.toISOString().split("T")[0];
  
    container.querySelector('[name="dateOfBirth"]').value = formattedDate;
  
    fireEvent.click(screen.getByText(/Next/i));
  
    await waitFor(() => {
      expect(screen.findByText(/Date of Birth cannot be in the future\./i)).toBeTruthy();
    });
  });
  
  
  it("allows user to proceed when all required fields are valid on Step 1", async () => {
    const { container } = setup();
  
    container.querySelector('[name="firstName"]').value = "John";
    container.querySelector('[name="lastName"]').value = "Doe";
    container.querySelector('[name="dateOfBirth"]').value = "2000-01-01";
    container.querySelector('[name="gender"]').value = "Male";
    container.querySelector('[name="height"]').value = "180";
    container.querySelector('[name="weight"]').value = "70";
  
    fireEvent.click(screen.getByText(/Next/i));

    await waitFor(() => {
        expect(screen.findByText(/Step 2 of 3/i)).toBeTruthy();
      });
  });
  

  it("displays error when required fields in Step 2 are empty", async () => {
    setup();
    
    fireEvent.click(screen.getByText(/Next/i));
    fireEvent.click(screen.getByText(/Next/i));

    fireEvent.click(screen.getByText(/Next/i));

    await waitFor(() => {
      expect(
        screen.getByText(/Please fill all required fields before proceeding\./i)
      ).toBeInTheDocument();
    });
  });
});
