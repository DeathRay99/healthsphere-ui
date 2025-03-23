import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Consultants from "@/app/(main)/consultants/page";
import { useRouter } from "next/navigation";
import "@testing-library/jest-dom";

global.fetch = jest.fn();

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(() => ({ push: jest.fn() })),
}));

describe("Consultants Page", () => {
  beforeEach(() => {
    fetch.mockClear();
    localStorage.setItem("role", "Admin");
    localStorage.setItem("userId", "123");
  });

  it("renders the page with correct headings and description", () => {
    render(<Consultants />);
    expect(
      screen.getByText(/Meet Our Expert Consultants/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /We keep partnering with the world's best health consultants/i
      )
    ).toBeInTheDocument();
  });

  it("fetches and displays consultants data on successful API call", async () => {
    const mockConsultants = [
      {
        consultantId: 1,
        firstName: "John",
        lastName: "Doe",
        designation: "Nutritionist",
        phoneNo: "1234567890",
        email: "john.doe@example.com",
        notes: "Expert in dietary planning.",
      },
    ];

    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockConsultants,
    });

    render(<Consultants />);
    await waitFor(() => {
      expect(screen.getByText("John Doe")).toBeInTheDocument();
      expect(screen.getByText("Nutritionist")).toBeInTheDocument();
      expect(screen.getByText("1234567890")).toBeInTheDocument();
      expect(screen.getByText("john.doe@example.com")).toBeInTheDocument();
    });
  });

  it("displays loading state while fetching data", async () => {
    fetch.mockResolvedValueOnce(
      new Promise((resolve) =>
        setTimeout(() => resolve({ ok: true, json: async () => [] }), 3000)
      )
    );
    render(<Consultants />);
    await waitFor(() => {
      expect(document.querySelector(".animate-spin")).toBeInTheDocument();
    });
  });

  it("handles fetch error correctly", async () => {
    const consoleErrorMock = jest.spyOn(console, "error").mockImplementation();

    fetch.mockRejectedValueOnce(new Error("Failed to fetch consultants"));

    render(<Consultants />);

    await waitFor(() => {
      expect(consoleErrorMock).toHaveBeenCalledWith(
        "Error fetching consultants:",
        "Failed to fetch consultants"
      );
    });

    consoleErrorMock.mockRestore();
  });

  it("filters consultants based on search input", async () => {
    const mockConsultants = [
      {
        consultantId: 1,
        firstName: "John",
        lastName: "Doe",
        designation: "Nutritionist",
        phoneNo: "1234567890",
        email: "john.doe@example.com",
      },
      {
        consultantId: 2,
        firstName: "Jane",
        lastName: "Smith",
        designation: "Dietician",
        phoneNo: "9876543210",
        email: "jane.smith@example.com",
      },
    ];

    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockConsultants,
    });

    render(<Consultants />);
    await waitFor(() => {
      expect(screen.getByText("John Doe")).toBeInTheDocument();
      expect(screen.getByText("Jane Smith")).toBeInTheDocument();
    });

    const searchInput = screen.getByPlaceholderText(
      "Search consultants by name, designation, or email"
    );
    fireEvent.change(searchInput, { target: { value: "Nutritionist" } });

    await waitFor(() => {
      expect(screen.getByText("John Doe")).toBeInTheDocument();
      expect(screen.queryByText("Jane Smith")).not.toBeInTheDocument();
    });
  });

  it("shows no consultants found message when search fails", async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => [
        {
          consultantId: 1,
          firstName: "John",
          lastName: "Doe",
          designation: "Nutritionist",
          phoneNo: "1234567890",
          email: "john.doe@example.com",
        },
      ],
    });

    render(<Consultants />);
    await waitFor(() => {
      expect(screen.getByText("John Doe")).toBeInTheDocument();
    });

    const searchInput = screen.getByPlaceholderText(
      "Search consultants by name, designation, or email"
    );
    fireEvent.change(searchInput, { target: { value: "Unknown" } });

    await waitFor(() => {
      expect(
        screen.getByText("No consultants match your search criteria")
      ).toBeInTheDocument();
    });
  });
});
