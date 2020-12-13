import React, { FC } from 'react';

export interface CheckboxProps {
  id: string;
  title?: string;
  text?: string;
  name: string;
  required: boolean;
  checked?: boolean;
  // @TODO implement in all checkboxes and remove optional (?)
  action?: (checked: boolean) => void;
}

const Checkbox: FC<CheckboxProps> = ({ id, title, required, text, name, checked, action }) => (
  <label htmlFor={id}>
    {title}
    {required ? ' *' : null}
    {text ? <p>{text}</p> : null}
    <input
      key={id}
      type="checkbox"
      id={id}
      name={name}
      onChange={(event) => action && action(event.target.checked)}
      defaultChecked={checked}
      required={required}
    />
  </label>
);

export default Checkbox;
