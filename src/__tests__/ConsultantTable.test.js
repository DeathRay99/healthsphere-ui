import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ConsultantTable from '@/components/ConsultantTable';

const mockConsultants = [
  {
    consultantId: 1,
    firstName: 'John',
    lastName: 'Doe',
    designation: 'Software Engineer',
    phoneNo: '123-456-7890',
    email: 'john.doe@example.com',
    notes: 'Expert in JavaScript',
  },
  {
    consultantId: 2,
    firstName: 'Jane',
    lastName: 'Smith',
    designation: 'Project Manager',
    phoneNo: '987-654-3210',
    email: 'jane.smith@example.com',
    notes: 'Experienced in Agile methodologies',
  },
];

describe('ConsultantTable Component', () => {
  test('renders no consultants message when consultants array is empty', () => {
    render(<ConsultantTable consultants={[]} searchTerm="" />);
    expect(screen.getByText(/no consultants found in the database/i)).toBeInTheDocument();
  });

  test('renders no match message when searchTerm is present and no consultants match', () => {
    render(<ConsultantTable consultants={[]} searchTerm="NonExistent" />);
    expect(screen.getByText(/no consultants match your search criteria/i)).toBeInTheDocument();
  });

  test('renders consultant table correctly', () => {
    render(<ConsultantTable consultants={mockConsultants} searchTerm="" />);

    // Check table headers
    expect(screen.getByText(/name/i)).toBeInTheDocument();
    expect(screen.getByText(/designation/i)).toBeInTheDocument();
    expect(screen.getByText(/contact/i)).toBeInTheDocument();
    expect(screen.getByText(/notes/i)).toBeInTheDocument();

    // Check consultant data
    expect(screen.getByText(/John Doe/i)).toBeInTheDocument();
    expect(screen.getByText(/Software Engineer/i)).toBeInTheDocument();
    expect(screen.getByText(/123-456-7890/i)).toBeInTheDocument();
    expect(screen.getByText(/john.doe@example.com/i)).toBeInTheDocument();
    expect(screen.getByText(/Expert in JavaScript/i)).toBeInTheDocument();

    expect(screen.getByText(/Jane Smith/i)).toBeInTheDocument();
    expect(screen.getByText(/Project Manager/i)).toBeInTheDocument();
    expect(screen.getByText(/987-654-3210/i)).toBeInTheDocument();
    expect(screen.getByText(/jane.smith@example.com/i)).toBeInTheDocument();
    expect(screen.getByText(/Experienced in Agile methodologies/i)).toBeInTheDocument();
  });
});
