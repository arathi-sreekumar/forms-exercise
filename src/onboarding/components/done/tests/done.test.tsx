import { render, screen } from '@testing-library/react';
import React from 'react';

import { DoneStep } from '../done';

describe('<DoneStep> component', () => {
  test('renders done message', () => {
    render(<DoneStep />);

    expect(screen.getByText('Please verify your email address, you should have received an email from us already!')).toBeInTheDocument();
  });
});
