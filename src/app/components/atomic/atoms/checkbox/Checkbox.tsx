import React, { FC } from 'react';

interface CheckboxProps {
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
    <input type="checkbox" id={id} name={name} defaultChecked={checked} required={required} />
  </label>
);

export default Checkbox;
