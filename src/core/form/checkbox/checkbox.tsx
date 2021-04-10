import React from 'react';

import './checkbox.scss';

interface OwnProps {
  id: string;
  label: string;
  error?: string | JSX.Element;
}

export type InputProps = OwnProps & Partial<Omit<React.InputHTMLAttributes<HTMLInputElement>, keyof OwnProps>>;

export const Checkbox: React.FC<InputProps> = ({
  id,
  label,
  error,
  ...props
}) => {
  return (
    <React.Fragment>
      <div className="checkbox">
        <input type="checkbox" {...props} id={id} />
        <label htmlFor={id}>{label}</label>
      </div>
      {error && <div className='errorMessage'>{error}</div>}
    </React.Fragment>
  )
}
