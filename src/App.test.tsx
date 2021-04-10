import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Onboarding page', () => {
  render(<App />);
  const linkElement = screen.getByText(/Join us/i);
  expect(linkElement).toBeInTheDocument();
});
