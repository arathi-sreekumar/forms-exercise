import React, { useState } from 'react';
import { User } from '../core/types';
import { UserStep } from './components/user/user';

import './onboarding.scss';

const initialiseUser = () => ({
  name: '',
  role: '',
  email: '',
  password: ''
});

export const OnBoarding = () => {
  const [user, setUser] = useState<User>(initialiseUser());

  const updateUser = (user: User) => {
    setUser(user);
  }

  return (
    <main className="main" data-testid="">
      <h1>Onboarding</h1>
      <UserStep user={user} onSubmit={updateUser} />
    </main>
  );
}
