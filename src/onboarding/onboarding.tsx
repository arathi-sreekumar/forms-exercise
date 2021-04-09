import React, { useState } from 'react';

import { STEPS } from '../core/constants';
import { User } from '../core/types';
import { UserStep } from './components/user/user';

import './onboarding.scss';
import { ProgressBar } from './components/progress/progress';

const initialiseUser = () => ({
  name: '',
  role: '',
  email: '',
  password: ''
});

export const OnBoarding = () => {
  const [step, setStep] = useState<STEPS>(STEPS.USER);
  const [user, setUser] = useState<User>(initialiseUser());

  const updateUserAndNext = (user: User) => {
    setUser(user);
    setStep(STEPS.PRIVACY);
  }

  const getStepToDisplay = () => {
    switch (step) {
      case STEPS.USER: return <UserStep user={user} onSubmit={updateUserAndNext} />;
      case STEPS.PRIVACY: return (<div> TODO PRIVACY </div>);
      case STEPS.DONE: return <div>TODO DONE PAGE</div>
    }
  }

  return (
    <main className="main">
      <h1>Onboarding</h1>
      <ProgressBar currentStep={step} />
      {getStepToDisplay()}
    </main>
  );
}
