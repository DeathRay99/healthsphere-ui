import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from '@/components/SearchBar';
import '@testing-library/jest-dom';


describe('SearchBar Component', () => {

  it('renders the input field with correct placeholder', () => {
    render(<SearchBar searchTerm="" setSearchTerm={jest.fn()} />);
    const inputElement = screen.getByPlaceholderText(/Search consultants by name, designation, or email/i);
    expect(inputElement).toBeInTheDocument();
  });


  it('calls setSearchTerm on input change', () => {
    const mockSetSearchTerm = jest.fn();
    render(<SearchBar searchTerm="" setSearchTerm={mockSetSearchTerm} />);
    const inputElement = screen.getByPlaceholderText(/Search consultants by name, designation, or email/i);
    
    fireEvent.change(inputElement, { target: { value: 'John' } });
    expect(mockSetSearchTerm).toHaveBeenCalledWith('John');
  });

  it('displays the correct input value', () => {
    render(<SearchBar searchTerm="Test" setSearchTerm={jest.fn()} />);
    const inputElement = screen.getByPlaceholderText(/Search consultants by name, designation, or email/i);
    expect(inputElement.value).toBe('Test');
  });

});
