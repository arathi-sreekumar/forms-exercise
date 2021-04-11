import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Onboarding page', () => {
  render(<App />);
  const joinUsText = screen.getByText(/Join us/i);
  expect(joinUsText).toBeInTheDocument();
});
