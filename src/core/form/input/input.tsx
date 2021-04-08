import React, { useState } from 'react';
import clsx from 'clsx';

import './input.scss';

interface OwnProps {
  id: string,
  value: string,
  onChange?: (value: string) => void;
  onBlur?: (value: string) => void;
  label: string;
  error?: string | JSX.Element;
  isValid: boolean;
  required?: boolean;
}

export type InputProps = OwnProps & Partial<Omit<React.InputHTMLAttributes<HTMLInputElement>, keyof OwnProps>>;

export const Input: React.FC<InputProps> = ({
  id,
  value,
  onChange,
  onBlur,
  label,
  error,
  isValid,
  required = false,
  type = 'text',
  ...props
}) => {
  const [isDirty, setIsDirty] = useState(!!value.length);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value);
  }

  const handleBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
    onBlur?.(event.target.value);
    !isDirty && setIsDirty(true);
  }

  const showError = isDirty && !isValid;

  return (
    <div className={clsx({['formField']: true, ['error']: showError})}>
      <label htmlFor={id}>
        {label}
        {required && <span className="required-symbol">*</span>}
      </label>
      <input
        data-testid={`${id}-input`}
        type={type}
        id={id}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        required={required}
        {...props}
      />
      {<div className='errorMessage'>{isDirty && error}</div>}
    </div>
  )
}
