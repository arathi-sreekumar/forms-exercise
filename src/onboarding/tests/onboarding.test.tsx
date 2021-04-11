import React from 'react';
import { render, screen } from '@testing-library/react';
import { OnBoarding } from '../onboarding';
import userEvent from '@testing-library/user-event';

describe('<OnBoarding> component', () => {
  test('renders a user form', () => {
    render(<OnBoarding />);

    expect(screen.queryByText(/Name:/i)).toBeInTheDocument();
    expect(screen.queryByText(/Role:/i)).toBeInTheDocument();
    expect(screen.queryByText(/Email:/i)).toBeInTheDocument();
    expect(screen.queryByText(/Password:/i)).toBeInTheDocument();
  });

  test('can navigate to privacy form and then done page', () => {
    render(<OnBoarding />);

    userEvent.type(screen.getByTestId('name-input'), 'test name');
    userEvent.type(screen.getByTestId('email-input'), 'test@test.com');
    userEvent.type(screen.getByTestId('password-input'), 'Test12345');
    userEvent.click(screen.getByText('Submit'));

    expect(
      screen.queryByText('Recieve updates about Tray.io products by email')
    ).toBeInTheDocument();
    expect(
      screen.queryByText('Recieve communication by email for other products created by the Tray.io team')
    ).toBeInTheDocument();

    userEvent.click(screen.getByText('Submit'));

    expect(screen.getByText('Please verify your email address, you should have received an email from us already!')).toBeInTheDocument();
  });
});
