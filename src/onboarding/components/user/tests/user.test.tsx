import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import { UserStep } from '../user';

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
  });

  test('validates that name field is required', () => {
    render(<UserStep user={userInitial} onSubmit={onSubmit} />);

    const nameField = screen.getByTestId('name-input');

    fireEvent.blur(nameField);

    expect(screen.queryByText('Name is required')).toBeInTheDocument();

    userEvent.type(nameField, 'test');

    expect(screen.queryByText('Name is required')).not.toBeInTheDocument();
  });


  test('validates that email field is required', () => {
    render(<UserStep user={userInitial} onSubmit={onSubmit} />);

    const emailField = screen.getByTestId('email-input');

    fireEvent.blur(emailField);

    expect(screen.queryByText('Email is required')).toBeInTheDocument();

    userEvent.type(emailField, 'test');

    expect(screen.queryByText('Email is required')).not.toBeInTheDocument();
  });

  test('validates that password field is required', () => {
    render(<UserStep user={userInitial} onSubmit={onSubmit} />);

    const passwordField = screen.getByTestId('password-input');

    fireEvent.blur(passwordField);

    expect(screen.queryByText('Password is required')).toBeInTheDocument();

    userEvent.type(passwordField, 'test');

    expect(screen.queryByText('Password is required')).not.toBeInTheDocument();
  });
});
