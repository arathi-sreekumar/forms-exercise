import clsx from 'clsx';
import React from 'react';

import { STEPS } from '../../../core/constants';

import './progress.scss';

interface Props {
  currentStep: STEPS;
}

interface ProgressStep {
  name: string;
}

const PROGRESS_STEPS: ProgressStep[] = [
  {
    name: 'User'
  },
  {
    name: 'Privacy'
  },
  {
    name: 'Done'
  }
];

export const ProgressBar: React.FC<Props> = ({ currentStep }) => {
  const getStepClass = (index: number) => {
    if (index < currentStep) {
      return 'prev';
    } else if (index === currentStep) {
      return 'current';
    }
    return 'next';
  }

  return (
    <div className="progress-bar">
      {PROGRESS_STEPS.map((value, index) => {
        return <div className={clsx('step', getStepClass(index))} key={`progress_${index}`}>{value.name}</div>
      })}
    </div>
  );
}
