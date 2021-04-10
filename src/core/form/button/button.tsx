import React from 'react';
import clsx from 'clsx';

import './button.scss';

export interface OwnProps {
  onClick: () => void;
  type?: 'primary' | 'secondary' | 'cancel';
}

type ButtonProps = OwnProps & Partial<Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof OwnProps>>;

export const Button: React.FC<ButtonProps> = ({
  disabled,
  children,
  onClick,
  type = 'primary',
  ...props
}) => {

  return (
    <button
      className={clsx('button', type)}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};
