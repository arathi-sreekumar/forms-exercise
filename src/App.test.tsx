import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Onboarding page', () => {
  render(<App />);
  const joinUsText = screen.getByText(/Register with us/i);
  expect(joinUsText).toBeInTheDocument();
});
