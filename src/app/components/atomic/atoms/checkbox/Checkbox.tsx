import React, { FC } from 'react';

export interface CheckboxProps {
  id: string;
  title?: string;
  text?: string;
  name: string;
  required: boolean;
  checked?: boolean;
}

const Checkbox: FC<CheckboxProps> = ({ id, title, required, text, name, checked }) => (
  <label htmlFor={id}>
    {title}
    {required ? ' *' : null}
    {text ? <p>{text}</p> : null}
    <input key={id} type="checkbox" id={id} name={name} defaultChecked={checked} required={required} />
  </label>
);

export default Checkbox;
