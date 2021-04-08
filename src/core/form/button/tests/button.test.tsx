import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import { Button } from '../button';

describe('<Button> component', () => {
  const onClick = jest.fn();
  test('renders a button', () => {
    render(<Button onClick={onClick}>Test Button</Button>);

    expect(screen.queryByText('Test Button')).toBeInTheDocument();
    expect(screen.getByText('Test Button').classList.contains('primary')).toBeTruthy();
  });

  test('renders a secondary button', () => {
    render(<Button onClick={onClick} type="secondary">Test Button</Button>);

    expect(screen.getByText('Test Button').classList.contains('secondary')).toBeTruthy();
  });

  test('renders a cancel button', () => {
    render(<Button onClick={onClick} type="cancel">Test Button</Button>);

    expect(screen.getByText('Test Button').classList.contains('cancel')).toBeTruthy();
  });

  test('calls onClick method when clicked', () => {
    render(<Button onClick={onClick}>Test Button</Button>);

    userEvent.click(screen.getByText('Test Button'));

    expect(onClick).toHaveBeenCalled();
  });
});
