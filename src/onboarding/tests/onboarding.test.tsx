import React from 'react';
import { render, screen } from '@testing-library/react';
import { OnBoarding } from '../onboarding';

describe('<OnBoarding> component', () => {
  test('renders a user form', () => {
    render(<OnBoarding />);
    const header = screen.getByText(/Onboarding/i);
    expect(header).toBeInTheDocument();

    expect(screen.queryByText(/Name:/i)).toBeInTheDocument();
    expect(screen.queryByText(/Role:/i)).toBeInTheDocument();
    expect(screen.queryByText(/Email:/i)).toBeInTheDocument();
    expect(screen.queryByText(/Password:/i)).toBeInTheDocument();
  });
});
