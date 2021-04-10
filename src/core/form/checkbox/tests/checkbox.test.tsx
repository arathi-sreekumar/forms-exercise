import { render, screen } from '@testing-library/react';
import React from 'react';

import { Checkbox } from '../checkbox';

describe('<Checkbox> component', () => {
  test('renders with label', () => {
    render(<Checkbox id="test" label="Test label" />);

    expect(screen.queryByRole('checkbox')).toBeInTheDocument();
    expect(screen.getByText('Test label')).toBeInTheDocument();
  });

  test('renders an error if provided', () => {
    render(<Checkbox id="test" label="Test label" error="Test error message" />);

    expect(screen.queryByText('Test error message')).toBeInTheDocument();
  });
});
