import React, { FC } from 'react';
import Button from '../../../atoms/button/Button';
import { ButtonProps } from '../../../atoms/button/Button';

const ButtonLi: FC<ButtonProps> = ({ type, title, btnClass, disabled }) => (
  <li>
    <Button type={type} title={title} btnClass={btnClass} disabled={disabled} />
  </li>
);

export default ButtonLi;
