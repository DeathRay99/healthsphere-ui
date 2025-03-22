import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import NavBar from "@/components/NavBar";
import { useRouter } from "next/navigation";
import useAuthStore from "@/app/store/authStore";
import "@testing-library/jest-dom";

// Mock useRouter from Next.js
jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

// Mock useAuthStore using jest.fn()
jest.mock("@/app/store/authStore", () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe("NavBar Component", () => {
  const mockRouter = { push: jest.fn() };

  beforeEach(() => {
    jest.clearAllMocks();
    useRouter.mockReturnValue(mockRouter);
  });

  it("renders logo and links for unauthenticated users", () => {
    useAuthStore.mockReturnValue({
      isLoggedIn: false,
      initializeAuth: jest.fn(),
    });

    render(<NavBar />);

    expect(screen.getByAltText("logo")).toBeInTheDocument();
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Features")).toBeInTheDocument();
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Login")).toBeInTheDocument();
    expect(screen.getByText("Get Started")).toBeInTheDocument();
  });

  it("renders appropriate links for authenticated users", () => {
    localStorage.setItem("userId", "123");
    useAuthStore.mockReturnValue({
      isLoggedIn: true,
      initializeAuth: jest.fn(),
    });

    render(<NavBar />);

    expect(screen.getByText("My Goals")).toBeInTheDocument();
    expect(screen.getByText("Meals")).toBeInTheDocument();
    expect(screen.getByText("Workouts")).toBeInTheDocument();
    expect(screen.getByText("Profile")).toBeInTheDocument();
    expect(screen.getByText("Healthlogs")).toBeInTheDocument();
    expect(screen.getByText("Contact-Consultant")).toBeInTheDocument();
    expect(screen.getByText("Logout")).toBeInTheDocument();
  });

  it("navigates to login page when Login button is clicked", () => {
    useAuthStore.mockReturnValue({
      isLoggedIn: false,
      initializeAuth: jest.fn(),
    });

    render(<NavBar />);
    const loginButton = screen.getByText("Login");
    fireEvent.click(loginButton);

    expect(mockRouter.push).toHaveBeenCalledWith("/login");
  });

  it("navigates to signup page when Get Started button is clicked", () => {
    useAuthStore.mockReturnValue({
      isLoggedIn: false,
      initializeAuth: jest.fn(),
    });

    render(<NavBar />);
    const signupButton = screen.getByText("Get Started");
    fireEvent.click(signupButton);

    expect(mockRouter.push).toHaveBeenCalledWith("/signup");
  });

  it("calls logout and navigates to home when Logout button is clicked", () => {
    const mockLogout = jest.fn();
    useAuthStore.mockReturnValue({
      isLoggedIn: true,
      logout: mockLogout,
      initializeAuth: jest.fn(),
    });

    render(<NavBar />);
    const logoutButton = screen.getByText("Logout");
    fireEvent.click(logoutButton);

    expect(mockLogout).toHaveBeenCalled();
    expect(mockRouter.push).toHaveBeenCalledWith("/");
  });
});
