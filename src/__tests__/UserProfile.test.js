import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import UserProfile from "../components/UserProfile";
import '@testing-library/jest-dom';

jest.mock("next/navigation", () => ({
  useParams: () => ({ id: "123" }),
}));

  global.fetch = jest.fn();
  global.alert = jest.fn();
  
  // Mock localStorage
  const localStorageMock = {
    getItem: jest.fn(),
  };
  Object.defineProperty(window, 'localStorage', { value: localStorageMock });
  Object.defineProperty(window, 'location', {
    value: { reload: jest.fn() },
    writable: true
  });

// Mock ShowProfile component to ensure consistent rendering for tests
jest.mock("../components/ShowProfile", () => {
  return function MockShowProfile({ userData }) {
    return (
      <div data-testid="profile-display">
        <h3>Personal Information</h3>
        <p data-testid="full-name">{userData.firstName} {userData.lastName}</p>
        <p>{userData.gender}</p>
        <p>{userData.phoneNumber}</p>
        <p>{userData.address}</p>
        <h3>Health Information</h3>
        {/* Other profile data */}
      </div>
    );
  };
});

// Mock window.location.reload
const mockReload = jest.fn();
Object.defineProperty(window, 'location', {
  value: { reload: mockReload },
  writable: true,
});

describe("UserProfile Component", () => {
  const mockUserData = {
    firstName: "John",
    lastName: "Doe",
    dateOfBirth: "1990-05-15",
    gender: "Male",
    height: 180,
    weight: 75,
    phoneNumber: "1234567890",
    address: "123 Street, City",
    bloodType: "O+",
    dietaryPreference: "Vegetarian",
    medicalConditions: "None",
    allergies: "None",
    medications: "None",
    bmi: 23.1,
  };

  beforeEach(() => {
    jest.clearAllMocks();
    global.alert = jest.fn();
  });

  it("renders profile data correctly", () => {
    render(<UserProfile userData={mockUserData} />);

    expect(screen.getByText("Profile Information")).toBeInTheDocument();
    
    // More flexible way to test for name content
    expect(screen.getByTestId("full-name")).toHaveTextContent("John Doe");
    
    expect(screen.getByText("Male")).toBeInTheDocument();
    expect(screen.getByText("1234567890")).toBeInTheDocument();
    expect(screen.getByText("123 Street, City")).toBeInTheDocument();
  });

  test('validates form with negative height value', async () => {
    render(<UserProfile userData={mockUserData} />);
    
    fireEvent.click(screen.getByText('Edit Profile'));
    
    const heightInput = screen.getByDisplayValue('180');
    fireEvent.change(heightInput, { target: { value: '-5' } });
    
    const submitButton = screen.getByText('Save Changes');
    fireEvent.click(submitButton);
    
    // Wait for the error message to appear in the DOM
    await waitFor(() => {
      expect(screen.getByText("Height must be a positive number")).toBeInTheDocument();
    });
    
    expect(fetch).not.toHaveBeenCalled();
  });

  test('validates form with negative weight value', () => {
    render(<UserProfile userData={mockUserData} />);
    
    fireEvent.click(screen.getByText('Edit Profile'));

    const weightInput = screen.getByDisplayValue('75');
    
    fireEvent.change(weightInput, { target: { value: '-10' } });
    
    const submitButton = screen.getByText('Save Changes');
    fireEvent.click(submitButton);
    
    expect(screen.getByText("Weight must be a positive number")).toBeInTheDocument();
    expect(global.fetch).not.toHaveBeenCalled();
  });

  test('validates form with negative phone number', () => {
    render(<UserProfile userData={mockUserData} />);
    
    fireEvent.click(screen.getByText('Edit Profile'));
    
    // We can use getByDisplayValue since we know the initial value
    const phoneInput = screen.getByDisplayValue('1234567890');
    fireEvent.change(phoneInput, { target: { value: '-1234567890' } });
    
    const submitButton = screen.getByText('Save Changes');
    fireEvent.click(submitButton);
    
    expect(screen.getByText("Phone number cannot be negative")).toBeInTheDocument();
    expect(fetch).not.toHaveBeenCalled();
  });

  it("renders headers correctly", () => {
    render(<UserProfile userData={mockUserData} />);
    
    expect(screen.getByText("Personal Information")).toBeInTheDocument();
    expect(screen.getByText("Health Information")).toBeInTheDocument();
  });

  it("switches to edit mode on clicking the Edit button", () => {
    render(<UserProfile userData={mockUserData} />);

    const editButton = screen.getByText("Edit Profile");
    fireEvent.click(editButton);

    expect(screen.getByText("Cancel")).toBeInTheDocument();
    expect(screen.getByText("Save Changes")).toBeInTheDocument();
  });

  it("updates form values correctly on change", () => {
    render(<UserProfile userData={mockUserData} />);

    fireEvent.click(screen.getByText("Edit Profile"));

    // Find input fields by their name attribute
    const phoneNumberInput = screen.getByDisplayValue("1234567890");
    fireEvent.change(phoneNumberInput, { target: { value: "9876543210" } });

    expect(phoneNumberInput.value).toBe("9876543210");
  });

  it("submits form and makes API call on valid input", async () => {
    global.fetch = jest.fn(() => Promise.resolve({ ok: true }));

    render(<UserProfile userData={mockUserData} />);
    fireEvent.click(screen.getByText("Edit Profile"));

    fireEvent.click(screen.getByText("Save Changes"));

    await waitFor(() => expect(global.fetch).toHaveBeenCalledWith(
      "http://localhost:9090/api/users/123",
      expect.objectContaining({ method: "PUT" })
    ));
  });

  it("shows an error message when API call fails", async () => {
    global.fetch = jest.fn(() => Promise.resolve({ ok: false }));
    
    render(<UserProfile userData={mockUserData} />);
    fireEvent.click(screen.getByText("Edit Profile"));
    fireEvent.click(screen.getByText("Save Changes"));

    await waitFor(() => expect(global.alert).toHaveBeenCalledWith("Failed to update profile data"));
  });

  it("handles network error during form submission", async () => {
    global.fetch = jest.fn(() => Promise.reject(new Error("Network error")));
    
    render(<UserProfile userData={mockUserData} />);
    fireEvent.click(screen.getByText("Edit Profile"));
    fireEvent.click(screen.getByText("Save Changes"));
    
    await waitFor(() => expect(global.alert).toHaveBeenCalledWith("Network error"));
  });

  it("tests readonly fields cannot be edited", () => {
    render(<UserProfile userData={mockUserData} />);
    fireEvent.click(screen.getByText("Edit Profile"));

    const firstNameInput = screen.getByDisplayValue("John");
    const lastNameInput = screen.getByDisplayValue("Doe");
    
    expect(firstNameInput).toHaveAttribute("readOnly");
    expect(lastNameInput).toHaveAttribute("readOnly");
  });

  it("resets edit mode when cancel is clicked", () => {
    render(<UserProfile userData={mockUserData} />);
    
    // Enter edit mode
    fireEvent.click(screen.getByText("Edit Profile"));
    expect(screen.getByText("Cancel")).toBeInTheDocument();
    
    // Exit edit mode
    fireEvent.click(screen.getByText("Cancel"));
    expect(screen.getByText("Edit Profile")).toBeInTheDocument();
  });

  it("can modify multiple fields at once", () => {
    render(<UserProfile userData={mockUserData} />);
    fireEvent.click(screen.getByText("Edit Profile"));
    
    // Modify height
    const heightInput = screen.getByDisplayValue("180");
    fireEvent.change(heightInput, { target: { value: "185" } });
    
    // Modify weight
    const weightInput = screen.getByDisplayValue("75");
    fireEvent.change(weightInput, { target: { value: "80" } });
    
    // Modify address - find by current value
    const addressInput = screen.getByDisplayValue("123 Street, City");
    fireEvent.change(addressInput, { target: { value: "456 New Street" } });
    
    expect(heightInput.value).toBe("185");
    expect(weightInput.value).toBe("80");
    expect(addressInput.value).toBe("456 New Street");
  });

  it("can change dietary preference", () => {
    render(<UserProfile userData={mockUserData} />);
    fireEvent.click(screen.getByText("Edit Profile"));
    
    // Get the dietary preference dropdown
    const dietarySelect = screen.getByDisplayValue("Vegetarian");
    fireEvent.change(dietarySelect, { target: { value: "Non-Vegetarian" } });
    
    expect(dietarySelect.value).toBe("Non-Vegetarian");
  });

  it("refreshes page after successful update", async () => {
    global.fetch = jest.fn(() => Promise.resolve({ ok: true }));
    
    render(<UserProfile userData={mockUserData} />);
    fireEvent.click(screen.getByText("Edit Profile"));
    fireEvent.click(screen.getByText("Save Changes"));
    
    await waitFor(() => {
      expect(global.alert).toHaveBeenCalledWith("profile updated successfully! ");
      expect(mockReload).toHaveBeenCalled();
    });
  });
});