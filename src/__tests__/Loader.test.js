import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Loader from '../components/Loader';

describe('Loader Component', () => {
  it('renders without crashing', () => {
    const { container } = render(<Loader />);
    expect(container).toBeInTheDocument();
  });

  it('contains a spinner element', () => {
    const { container } = render(<Loader />);
    const spinner = container.querySelector('.animate-spin');
    expect(spinner).toBeTruthy();
  });

  it('applies correct styling classes', () => {
    const { container } = render(<Loader />);
    const spinner = container.querySelector('.animate-spin');
    expect(spinner).toHaveClass('rounded-full', 'h-12', 'w-12', 'border-t-2', 'border-b-2', 'border-blue-500');
  });
});
