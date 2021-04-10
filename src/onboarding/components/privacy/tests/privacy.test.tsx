import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import { PrivacyStep } from '../privacy';
import { Privacy } from '../../../../core/types';

describe('<PrivacyStep> component', () => {
  const onSubmit = jest.fn();

  test('renders with the checkboxes and submit button', () => {
    const privacyProp: Privacy = {
      allowTrayProductEmails: false,
      allowOtherProductEmails: false
    };

    render(<PrivacyStep privacy={privacyProp} onSubmit={onSubmit} />);

    expect(screen.queryByText('Recieve updates about Tray.io products by email')).toBeInTheDocument();
    expect(screen.getByText('Recieve communication by email for other products created by the Tray.io team')).toBeInTheDocument();
    expect(screen.queryByText('Submit')).toBeInTheDocument();
  });

  test('can select with checkboxes and submit', () => {
    const privacyProp: Privacy = {
      allowTrayProductEmails: false,
      allowOtherProductEmails: false
    };

    render(<PrivacyStep privacy={privacyProp} onSubmit={onSubmit} />);

    const receiveTrayUpdateOption = screen.getByText('Recieve updates about Tray.io products by email');

    userEvent.click(receiveTrayUpdateOption);

    userEvent.click(screen.getByText('Submit'));

    expect(onSubmit).toBeCalledWith({ allowTrayProductEmails: true, allowOtherProductEmails: false });
  });
});
