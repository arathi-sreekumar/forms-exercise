import React, { useEffect, useState } from 'react';

import { User } from '../../../core/types';
import { Input } from '../../../core/form/input/input';
import { Button } from '../../../core/form/button/button';
import joinUS from '../../../assets/images/robot.png';

import './user.scss';
import { validate } from '../../../core/utils';

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
    validateUser(user);
  }, [user]); // eslint-disable-line react-hooks/exhaustive-deps

  const getError = (field: keyof Errors) => {
    return errors && errors[field];
  }

  const hasError = (field: keyof Errors) => {
    return !!(errors && errors[field]);
  }

  const validateName = (name: string) => {
    if (!validate.required(name)) {
      return ERROR_MSGS.REQUIRED_NAME;
    }
  }

  const validateEmail = (email: string) => {
    if (!validate.required(email)) {
      return ERROR_MSGS.REQUIRED_EMAIL;
    }

    if (!validate.email(email)) {
      return ERROR_MSGS.INVALID_EMAIL;
    }
  }

  const validatePassword = (password: string) => {
    if (!validate.required(password)) {
      return ERROR_MSGS.REQUIRED_PASSWORD;
    }

    if (!validate.password(password)) {
      return ERROR_MSGS.INVALID_PASSWORD;
    }
  }

  const validateUser = (userToValidate: User) => {
    const newErrors = {
      name: validateName(userToValidate.name),
      email: validateEmail(userToValidate.email),
      password: validatePassword(userToValidate.password)
    }
    const isValid = !(newErrors.name || newErrors.email || newErrors.password);

    setErrors(newErrors);
    setIsValid(isValid);

    return isValid;
  };

  const handleChange = (field: keyof User) => (value: string) => {
    const newUser = {
      ...user,
      [field]: value
    };
    setUser(newUser);
  }

  const handleBlur = (field: keyof User) => () => {
    const newErrors: Errors = {
      ...errors
    };
    switch (field) {
      case 'name': newErrors.name = validateName(user.name);
        break;
      case 'email': newErrors.email = validateEmail(user.email);
        break;
      case 'password': newErrors.password = validatePassword(user.password);
        break;
      default: //nothing required
    }

    setErrors(newErrors);
  }

  const submitUser = () => {
    onSubmit(user);
  }

  return (
    <div className="step-wrapper">
      <div className="step-main">
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
        <div className="step-action">
          <Button disabled={!isValid} onClick={submitUser} data-testid="submit-user">Submit</Button>
        </div>
      </div>
      <div className="step-image">
        <img
          src={joinUS}
          alt="Join us image"
          aria-role="presentation"
        />
      </div>
    </div>
  );
}
