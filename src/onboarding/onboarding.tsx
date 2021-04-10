import React, { useState } from 'react';

import { STEPS } from '../core/constants';
import { User, Privacy } from '../core/types';
import { PrivacyStep } from './components/privacy/privacy';
import { ProgressBar } from './components/progress/progress';
import { UserStep } from './components/user/user';

import './onboarding.scss';

const initialiseUser = (): User => ({
  name: '',
  role: '',
  email: '',
  password: ''
});

const initializePrivacy = (): Privacy => ({
  allowTrayProductEmails: false,
  allowOtherProductEmails: false
});

export const OnBoarding = () => {
  const [step, setStep] = useState<STEPS>(STEPS.USER);
  const [user, setUser] = useState<User>(initialiseUser());
  const [privacy, setPrivacy] = useState<Privacy>(initializePrivacy());

  const updateUserAndNext = (user: User) => {
    setUser(user);
    setStep(STEPS.PRIVACY);
  }

  const updatePrivacyAndNext = (privacy: Privacy) => {
    setPrivacy(privacy);
    setStep(STEPS.DONE);
  }

  const getStepToDisplay = () => {
    switch (step) {
      case STEPS.USER: return <UserStep user={user} onSubmit={updateUserAndNext} />;
      case STEPS.PRIVACY: return <PrivacyStep privacy={privacy} onSubmit={updatePrivacyAndNext} />;
      case STEPS.DONE: return <div>TODO DONE PAGE</div>
    }
  }

  return (
    <main className="main">
      <h1>Join Us</h1>
      <ProgressBar currentStep={step} />
      {getStepToDisplay()}
    </main>
  );
}
