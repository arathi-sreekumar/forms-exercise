import React from 'react';
import { render, screen } from '@testing-library/react';

import { STEPS } from '../../../../core/constants';
import { ProgressBar } from '../progress';

describe('<ProgressBar> component', () => {
  test('renders a progress bar with current step as user', () => {
    render(<ProgressBar currentStep={STEPS.USER}/>);

    expect(screen.queryByText('User')).toBeInTheDocument();
    expect(screen.queryByText('Privacy')).toBeInTheDocument();
    expect(screen.queryByText('Done')).toBeInTheDocument();

    expect(screen.getByText('User').classList.contains('current')).toBeTruthy();
    expect(screen.getByText('Privacy').classList.contains('next')).toBeTruthy();
    expect(screen.getByText('Done').classList.contains('next')).toBeTruthy();
  });

  test('renders a progress bar with current step as Privacy', () => {
    render(<ProgressBar currentStep={STEPS.PRIVACY}/>);

    expect(screen.queryByText('User')).toBeInTheDocument();
    expect(screen.queryByText('Privacy')).toBeInTheDocument();
    expect(screen.queryByText('Done')).toBeInTheDocument();

    expect(screen.getByText('User').classList.contains('prev')).toBeTruthy();
    expect(screen.getByText('Privacy').classList.contains('current')).toBeTruthy();
    expect(screen.getByText('Done').classList.contains('next')).toBeTruthy();
  });

  test('renders a progress bar with current step as Done', () => {
    render(<ProgressBar currentStep={STEPS.DONE}/>);

    expect(screen.queryByText('User')).toBeInTheDocument();
    expect(screen.queryByText('Privacy')).toBeInTheDocument();
    expect(screen.queryByText('Done')).toBeInTheDocument();

    expect(screen.getByText('User').classList.contains('prev')).toBeTruthy();
    expect(screen.getByText('Privacy').classList.contains('prev')).toBeTruthy();
    expect(screen.getByText('Done').classList.contains('current')).toBeTruthy();
  });
});
