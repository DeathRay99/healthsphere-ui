import React from 'react';
import { render, screen } from '@testing-library/react';
import { Slideshow } from '@/components/Slideshow';
import { Carousel } from '@/components/ui/carousel';
import '@testing-library/jest-dom';

// Mock Carousel component
jest.mock('@/components/ui/carousel', () => ({
  Carousel: jest.fn(() => <div data-testid="carousel" />),
}));

describe('Slideshow Component', () => {
  const expectedSlides = [
    { title: "Invest in your health", src: "/assets/jogging_man.avif" },
    { title: "Fuel your body, feed your soul", src: "/assets/meal1.jpg" },
    { title: "Healthy choices, happy life", src: "/assets/meal2.avif" },
    { title: "Live actively, live vibrantly", src: "/assets/workout1.jpg" },
    { title: "Wellness is a way of life", src: "/assets/workout2.avif" },
    { title: "Embrace the journey to a healthier you", src: "/assets/workout3.jpg" },
  ];

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders without crashing', () => {
    render(<Slideshow />);
    expect(screen.getByTestId('carousel')).toBeInTheDocument();
  });

  it('passes correct slide data to Carousel component', () => {
    render(<Slideshow />);

    // Ensure the mock function was called
    expect(Carousel).toHaveBeenCalledTimes(1);

    // Extract the props from the mock call
    const props = Carousel.mock.calls[0][0];

    // Check if the slides data matches
    expect(props.slides).toEqual(expectedSlides);
  });

  it('has correct layout styles', () => {
    const { container } = render(<Slideshow />);
    const divElement = container.querySelector('div.relative.overflow-hidden');
    expect(divElement).toHaveClass('w-full h-full pt-6 pb-12');
  });
});
