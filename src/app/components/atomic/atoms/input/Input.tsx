import React, { FC } from 'react';

export interface InputProps {
  id: string;
  title: string;
  text?: string;
  name: string;
  type: 'text' | 'email' | 'number' | 'password';
  placeholder: string;
  defaultValue: string;
  minLength?: number;
  required?: boolean | undefined;
}

const Input: FC<InputProps> = ({ id, title, text, name, type, placeholder, defaultValue, minLength, required }) => (
  <label htmlFor={id}>
    {title}
    {text ? <p>{text}</p> : null}
    <input
      key={id}
      id={id}
      name={name}
      type={type}
      placeholder={`${placeholder}${required ? ' *' : '' }`}
      defaultValue={defaultValue}
      minLength={minLength}
      required={required}
    />
  </label>
);

export default Input;
