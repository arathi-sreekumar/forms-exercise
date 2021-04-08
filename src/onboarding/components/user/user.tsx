import React, { useEffect, useState } from 'react';

import { User } from '../../../core/types';
import { Input } from '../../../core/form/input/input';

interface Props {
  user: User;
  onSubmit: (user: User) => void;
}

interface Errors {
  name?: string;
  email?: string;
  password?: string;
}

export const UserStep: React.FC<Props> = ({ user: userProp, onSubmit }) => {
  const [user, setUser] = useState<User>(userProp);
  const [isValid, setIsValid] = useState(false);
  const [errors, setErrors] = useState<Errors>();

  useEffect(() => {
    validate(user);
  }, [user]);

  const getError = (field: keyof Errors) => {
    return errors && errors[field];
  }

  const hasError = (field: keyof Errors) => {
    return !!(errors && errors[field]);
  }

  const validateName = (name: string) => {
    if (!name || !name.length) {
      return 'Name is required'
    }
  }

  const validateEmail = (email: string) => {
    if (!email || !email.length) {
      return 'Email is required';
    }

    //todo: validate email with regex
  }

  const validatePassword = (password: string) => {
    if (!password || !password.length) {
      return 'Password is required';
    }

    //todo: validate password with regex
  }

  const validate = (userToValidate: User) => {
    const newErrors = {
      name: validateName(userToValidate.name),
      email: validateEmail(userToValidate.email),
      password: validatePassword(userToValidate.password)
    }
    const isValid = !(newErrors.name || newErrors.email || newErrors.password);

    setErrors(newErrors);
    setIsValid(isValid);

    return isValid;
  }

  const handleChange = (field: keyof User) => (value: string) => {
    const newUser = {
      ...user,
      [field]: value
    };
    setUser(newUser);
  }

  const handleBlur = (field: keyof User) => (value: string) => {
    const newErrors: Errors = {
      ...errors
    };
    switch (field) {
      case 'name': newErrors.name = validateName(user.name);
        break;
      case 'email': newErrors.email = validateEmail(user.email);
        break;
      case 'password': newErrors.password = validatePassword(user.password);
    }

    setErrors(newErrors);
  }

  return (
    <div>
      <Input
        id="name"
        value={user.name}
        onChange={handleChange('name')}
        onBlur={handleBlur('name')}
        label="Name: "
        isValid={!hasError('name')}
        error={getError('name')}
        isRequired={true}
      />
      <Input
        id="role"
        value={user.role || ''}
        onChange={handleChange('role')}
        onBlur={handleBlur('role')}
        label="Role: "
        isValid={true}
        isRequired={false}
      />
      <Input
        id="email"
        value={user.email}
        onChange={handleChange('email')}
        onBlur={handleBlur('email')}
        label="Email: "
        isValid={!hasError('email')}
        error={getError('email')}
        isRequired={true}
        type="email"
      />
      <Input
        id="password"
        value={user.password}
        onChange={handleChange('password')}
        onBlur={handleBlur('password')}
        label="Password: "
        isValid={!hasError('password')}
        error={getError('password')}
        isRequired={true}
        type="password"
      />
    </div>
  );
}
