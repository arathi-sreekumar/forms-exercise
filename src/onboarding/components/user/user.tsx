import React, { useEffect, useState } from 'react';

import { User } from '../../../core/types';
import { VALIDATION_EMAIL_REGEX, VALIDATION_PASSWORD_REGEX } from '../../../core/constants';
import { Input } from '../../../core/form/input/input';
import { Button } from '../../../core/form/button/button';

interface Props {
  user: User;
  onSubmit: (user: User) => void;
}

interface Errors {
  name?: string;
  email?: string;
  password?: string;
}

export const ERROR_MSGS = {
  REQUIRED_NAME: 'Name is required',
  INVALID_EMAIL: 'Please enter a valid email',
  REQUIRED_EMAIL: 'Email is required',
  INVALID_PASSWORD: 'Password must have atleast 9 characters with one uppercase character, one lower case character and a number',
  REQUIRED_PASSWORD: 'Password is required'
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
      return ERROR_MSGS.REQUIRED_NAME;
    }
  }

  const validateEmail = (email: string) => {
    if (!email || !email.length) {
      return ERROR_MSGS.REQUIRED_EMAIL;
    }

    if (!VALIDATION_EMAIL_REGEX.test(email)) {
      return ERROR_MSGS.INVALID_EMAIL;
    }
  }

  const validatePassword = (password: string) => {
    if (!password || !password.length) {
      return ERROR_MSGS.REQUIRED_PASSWORD;
    }

    if (!VALIDATION_PASSWORD_REGEX.test(password)) {
      return ERROR_MSGS.INVALID_PASSWORD;
    }
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

  const submitUser = () => {
    onSubmit(user);
  }

  return (
    <div>
      <h2>User</h2>
      <Input
        id="name"
        value={user.name}
        onChange={handleChange('name')}
        onBlur={handleBlur('name')}
        label="Name: "
        isValid={!hasError('name')}
        error={getError('name')}
        required={true}
      />
      <Input
        id="role"
        value={user.role || ''}
        onChange={handleChange('role')}
        onBlur={handleBlur('role')}
        label="Role: "
        isValid={true}
        required={false}
      />
      <Input
        id="email"
        value={user.email}
        onChange={handleChange('email')}
        onBlur={handleBlur('email')}
        label="Email: "
        isValid={!hasError('email')}
        error={getError('email')}
        required={true}
      />
      <Input
        id="password"
        value={user.password}
        onChange={handleChange('password')}
        onBlur={handleBlur('password')}
        label="Password: "
        isValid={!hasError('password')}
        error={getError('password')}
        required={true}
        type="password"
      />
      <div>
        <Button disabled={!isValid} onClick={submitUser} data-testid="submit-user">Submit</Button>
      </div>
    </div>
  );
}
