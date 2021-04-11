import React from 'react';

import EmailSentImage from '../../../assets/images/email.png';

import './done.scss';

export const DoneStep: React.FC = () => {
  return (
    <div className="step-wrapper">
      <div className="done-wrapper">
        <h2>Done!</h2>
        <div className="done-check"></div>
        <p className="done-message">
          Please verify your email address, you should have received an email from us already!
        </p>
      </div>
      <div className="step-image">
        <img
          src={EmailSentImage}
          alt="Email sent image"
        />
      </div>
    </div>
  );
}
