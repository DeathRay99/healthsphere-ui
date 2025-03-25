import React from "react";
import { render, screen, waitFor, cleanup } from "@testing-library/react";
import AdminView from "@/app/(admin)/adminView/page";
import DashboardOverview from "@/components/DashboardOverview";
import Loader from "@/components/Loader";
import "@testing-library/jest-dom";

jest.mock("@/components/DashboardOverview", () => jest.fn(() => <div>Dashboard Overview Component</div>));
jest.mock("@/components/Loader", () => jest.fn(() => <div data-testid="loader">Loading...</div>));
jest.mock("@/hooks/useAdminRedirect", () => jest.fn());

global.fetch = jest.fn();

describe("AdminView Component", () => {
  beforeEach(() => {
    fetch.mockClear();
    localStorage.setItem("role", "Admin");
  });

  afterEach(() => {
    cleanup(); // Ensure component unmounts after each test
  });

  it("renders Loader when loading is true", async () => {
    fetch.mockResolvedValueOnce({ ok: true, json: async () => ({ workoutRecommendations: [] }) });
    fetch.mockResolvedValueOnce({ ok: true, json: async () => ({ dietRecommendations: [] }) });
    fetch.mockResolvedValueOnce({ ok: true, json: async () => [] });
    fetch.mockResolvedValueOnce({ ok: true, json: async () => ({ users: [] }) });

    render(<AdminView />);
    expect(screen.getByTestId("loader")).toBeInTheDocument();
  });

  it("renders DashboardOverview when all data is loaded", async () => {
    const mockWorkoutData = { workoutRecommendations: [{ id: 1, name: "Cardio" }] };
    const mockDietData = { dietRecommendations: [{ id: 1, name: "Keto" }] };
    const mockConsultantData = [{ id: 1, name: "John Doe" }];
    const mockUserData = { users: [{ id: 1, name: "Jane Doe" }] };

    fetch.mockResolvedValueOnce({ ok: true, json: async () => mockWorkoutData });
    fetch.mockResolvedValueOnce({ ok: true, json: async () => mockDietData });
    fetch.mockResolvedValueOnce({ ok: true, json: async () => mockConsultantData });
    fetch.mockResolvedValueOnce({ ok: true, json: async () => mockUserData });

    render(<AdminView />);

    await waitFor(() => {
      expect(screen.getByText("Dashboard Overview Component")).toBeInTheDocument();
    });
  });

  it("shows alert on failed API call", async () => {
    window.alert = jest.fn();
    fetch.mockResolvedValueOnce({ ok: false, json: async () => ({ err: "Workout API error" }) });
    fetch.mockResolvedValueOnce({ ok: true, json: async () => ({ dietRecommendations: [] }) });
    fetch.mockResolvedValueOnce({ ok: true, json: async () => [] });
    fetch.mockResolvedValueOnce({ ok: true, json: async () => ({ users: [] }) });

    render(<AdminView />);

    await waitFor(() => {
      expect(window.alert).toHaveBeenCalledWith("Workout API error");
    });
  });

  it("renders Loader when any one of the data is not fetched", async () => {
    const loadingStates = [
      { workoutData: null, dietData: [], consultantData: [], userData: [] },
      { workoutData: [], dietData: null, consultantData: [], userData: [] },
      { workoutData: [], dietData: [], consultantData: null, userData: [] },
      { workoutData: [], dietData: [], consultantData: [], userData: null },
    ];

    for (const state of loadingStates) {
      fetch
        .mockResolvedValueOnce({ ok: true, json: async () => ({ workoutRecommendations: state.workoutData }) })
        .mockResolvedValueOnce({ ok: true, json: async () => ({ dietRecommendations: state.dietData }) })
        .mockResolvedValueOnce({ ok: true, json: async () => state.consultantData })
        .mockResolvedValueOnce({ ok: true, json: async () => ({ users: state.userData }) });

      render(<AdminView />);

      await waitFor(() => {
        expect(screen.getByTestId("loader")).toBeInTheDocument();
      });

      cleanup(); // Clean up to avoid multiple instances
    }
  });

  it("logs error on fetch failure", async () => {
    const consoleErrorMock = jest.spyOn(console, "log").mockImplementation();
    fetch.mockRejectedValueOnce(new Error("Network Error"));
    fetch.mockResolvedValueOnce({ ok: true, json: async () => ({ dietRecommendations: [] }) });
    fetch.mockResolvedValueOnce({ ok: true, json: async () => [] });
    fetch.mockResolvedValueOnce({ ok: true, json: async () => ({ users: [] }) });

    render(<AdminView />);

    await waitFor(() => {
      expect(consoleErrorMock).toHaveBeenCalledWith("some error !!", "Network Error");
    });

    consoleErrorMock.mockRestore();
  });
});
