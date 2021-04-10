import clsx from 'clsx';
import React, { useState } from 'react';
import { Button } from '../../../core/form/button/button';
import { Checkbox } from '../../../core/form/checkbox/checkbox';
import { Privacy } from '../../../core/types';

interface Props {
  privacy: Privacy;
  onSubmit: (privacy: Privacy) => void;
}

export const PrivacyStep: React.FC<Props> = ({
  privacy: privacyProp,
  onSubmit
}) => {
  const [privacy, setPrivacy] = useState<Privacy>(privacyProp);

  const handleChange = (field: keyof Privacy) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const newPrivacy = {
      ...privacy,
      [field]: event.target.checked
    };

    setPrivacy(newPrivacy);
  }

  const submitPrivacy = () => {
    onSubmit(privacy);
  }

  return (
    <div>
      <h2>Privacy</h2>
      <div>
        <Checkbox
          label="Recieve updates about Tray.io products by email"
          id="recieve-tray-updates"
          checked={privacy.allowTrayProductEmails}
          onChange={handleChange('allowTrayProductEmails')}
        />
        <Checkbox
          label="Recieve communication by email for other products created by the Tray.io team"
          id="receive-other-updates"
          checked={privacy.allowOtherProductEmails}
          onChange={handleChange('allowOtherProductEmails')}
        />
      </div>
      <div>
        <Button onClick={submitPrivacy} data-testid="submit-user">Submit</Button>
      </div>
    </div>
  );
}
