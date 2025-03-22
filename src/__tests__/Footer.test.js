import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '@/components/Footer';
import '@testing-library/jest-dom';

describe('Footer Component', () => {
  it('renders the company name and tagline', () => {
    render(<Footer />);
    expect(screen.getByText('HeathSphere')).toBeInTheDocument();
    expect(screen.getByText('Your personal health and fitness companion for a better, healthier lifestyle.')).toBeInTheDocument();
  });

  it('renders feature links correctly', () => {
    render(<Footer />);
    expect(screen.getByText('Nutrition Tracking')).toHaveAttribute('href', '/features');
    expect(screen.getByText('Fitness Activities')).toHaveAttribute('href', '/features');
    expect(screen.getByText('Health Measurements')).toHaveAttribute('href', '/features');
    expect(screen.getByText('AI Recommendations')).toHaveAttribute('href', '/features');
  });

  it('renders company links correctly', () => {
    render(<Footer />);
    expect(screen.getByText('About Us')).toHaveAttribute('href', '/about');
    expect(screen.getByText('Contact')).toHaveAttribute('href', '/contact');
    expect(screen.getByText('Careers')).toHaveAttribute('href', '/careers');
    expect(screen.getByText('Blog')).toHaveAttribute('href', '/blog');
  });

  it('renders legal links correctly', () => {
    render(<Footer />);
    expect(screen.getByText('Privacy Policy')).toHaveAttribute('href', '/privacy');
    expect(screen.getByText('Terms of Service')).toHaveAttribute('href', '/terms');
    expect(screen.getByText('Cookie Policy')).toHaveAttribute('href', '/cookies');
  });

  it('displays the correct copyright year', () => {
    render(<Footer />);
    const currentYear = new Date().getFullYear();
    expect(screen.getByText(`© ${currentYear} HeathSphere. All rights reserved.`)).toBeInTheDocument();
  });

  it('renders social media icons', () => {
    render(<Footer />);
    const socialIcons = screen.getAllByRole('link', { hidden: true })
      .filter(link => link.querySelector('svg[aria-hidden="true"]'));
    
    expect(socialIcons).toHaveLength(3); // Facebook, Twitter, Instagram
  });
});
