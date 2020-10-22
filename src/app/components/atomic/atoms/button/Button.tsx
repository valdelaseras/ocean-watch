import React, { FC } from 'react';

export interface ButtonProps {
  type: 'button' | 'submit' | 'reset' | undefined;
  title: string;
  btnClass: string;
  disabled: boolean | undefined;
}

const Button: FC<ButtonProps> = ({ type, title, btnClass, disabled }) => (
  <button type={type} title={title} className={'btn' + btnClass} disabled={disabled}>
    {title}
  </button>
);

export default Button;
