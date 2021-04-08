import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import { UserStep, ERROR_MSGS } from '../user';

const userInitial = {
  name: '',
  role: '',
  email: '',
  password: ''
}

describe('<UserStep> component', () => {
  const onSubmit = jest.fn();

  test('renders a user form', () => {
    render(<UserStep user={userInitial} onSubmit={onSubmit} />);

    expect(screen.queryByText(/Name:/i)).toBeInTheDocument();
    expect(screen.queryByText(/Role:/i)).toBeInTheDocument();
    expect(screen.queryByText(/Email:/i)).toBeInTheDocument();
    expect(screen.queryByText(/Password:/i)).toBeInTheDocument();
    expect(screen.queryByTestId('submit-user')).toBeInTheDocument();
  });

  test('validates that name field is required', () => {
    render(<UserStep user={userInitial} onSubmit={onSubmit} />);

    const nameField = screen.getByTestId('name-input');

    fireEvent.blur(nameField);

    expect(screen.queryByText(ERROR_MSGS.REQUIRED_NAME)).toBeInTheDocument();

    userEvent.type(nameField, 'test');

    expect(screen.queryByText(ERROR_MSGS.REQUIRED_NAME)).not.toBeInTheDocument();
  });

  test('validates that email field', () => {
    render(<UserStep user={userInitial} onSubmit={onSubmit} />);

    const emailField = screen.getByTestId('email-input');

    fireEvent.blur(emailField);

    expect(screen.queryByText(ERROR_MSGS.REQUIRED_EMAIL)).toBeInTheDocument();

    userEvent.type(emailField, 'test');

    expect(screen.queryByText(ERROR_MSGS.REQUIRED_EMAIL)).not.toBeInTheDocument();
    expect(screen.queryByText(ERROR_MSGS.INVALID_EMAIL)).toBeInTheDocument();

    userEvent.type(emailField, '@test.com');
    expect(screen.queryByText(ERROR_MSGS.INVALID_EMAIL)).not.toBeInTheDocument();
  });

  test('validates that password field is required', () => {
    render(<UserStep user={userInitial} onSubmit={onSubmit} />);

    const passwordField = screen.getByTestId('password-input');

    fireEvent.blur(passwordField);

    expect(screen.queryByText(ERROR_MSGS.REQUIRED_PASSWORD)).toBeInTheDocument();

    userEvent.type(passwordField, 'test');

    expect(screen.queryByText(ERROR_MSGS.REQUIRED_PASSWORD)).not.toBeInTheDocument();
    expect(screen.queryByText(ERROR_MSGS.INVALID_PASSWORD)).toBeInTheDocument();

    userEvent.type(passwordField, 'A1234');

    expect(screen.queryByText(ERROR_MSGS.INVALID_PASSWORD)).not.toBeInTheDocument();
  });

  test('submit button is enabled only when form is valid', () => {
    render(<UserStep user={userInitial} onSubmit={onSubmit} />);

    const submitButton = screen.getByTestId('submit-user');

    expect(submitButton).toBeDisabled();

    userEvent.type(screen.getByTestId('name-input'), 'test');
    userEvent.type(screen.getByTestId('email-input'), 'test@test.com');
    userEvent.type(screen.getByTestId('password-input'), 'Test12345');

    expect(submitButton).not.toBeDisabled();

    userEvent.click(submitButton);

    expect(onSubmit).toHaveBeenCalledWith({
      name: 'test',
      email: 'test@test.com',
      role: '',
      password: 'Test12345'
    });
  });
});
