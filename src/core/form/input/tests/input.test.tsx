import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import { Input } from '../input';

describe('<InputFieldRow> component', () => {
  test('contains a label and input element', () => {
    render(
      <Input
        label="test label"
        value=""
        id="test-id"
        isValid={true}
      />
    );

    expect(screen.queryByTestId('test-id-input')).toBeInTheDocument();
    expect(screen.queryByText('test label')).toBeInTheDocument();
  });

  test('displays error when error message is passed and input is dirty', () => {
    render(
      <Input
        label="test label"
        value=""
        id="test-id"
        isValid={false}
        error="test error message"
      />
    );

    expect(screen.queryByText('test error message')).not.toBeInTheDocument();

    const input = screen.getByTestId('test-id-input');

    userEvent.click(input);
    fireEvent.blur(input);

    expect(screen.queryByText('test error message')).toBeInTheDocument();
  });
});
