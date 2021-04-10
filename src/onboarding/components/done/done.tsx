import React from 'react';

import './done.scss';

export const DoneStep: React.FC = () => {
  return (
    <div className="done-wrapper">
      <div className="done-check"></div>
      <p className="done-message">
        Please verify your email address, you should have received an email from us already!
      </p>
    </div>
  );
}
