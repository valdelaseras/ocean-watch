import React, { FC, useState } from 'react';

export interface ToggleButtonProps {
  type: 'button' | 'submit' | 'reset' | undefined;
  btnClass: string;
  disabled: boolean | undefined;
  action: (enabled: boolean) => Promise<void>;
  children: {
    enabled: React.ReactChild;
    disabled: React.ReactChild;
  };
}
const ToggleButton: FC<ToggleButtonProps> = ({ type, btnClass, disabled, children, action }) => {
  const [enabled, setEnabled] = useState(false);
  const [spinnerEnabled, setSpinnerEnabled] = useState(false);

  const toggle = () => {
    setSpinnerEnabled(true);
    action(!enabled).then(() => {
      setEnabled(!enabled);
      setSpinnerEnabled(false);
    });
  };

  return (
    <button type={type} onClick={toggle} className={'btn ' + btnClass} disabled={disabled}>
      {spinnerEnabled ? (
        <img src="/assets/icons/bell.svg" alt="Heart icon" title="Add to favorites" className="small-icon" />
      ) : enabled ? (
        children.enabled
      ) : (
        children.disabled
      )}
    </button>
  );
};

export default ToggleButton;
