import React, { FC } from 'react';

interface InputProps {
  id: string;
  title: string;
  text?: string;
  name: string;
  type: 'text' | 'email' | 'number' | 'password';
  // TODO: probably need more types like date, search, time, file
  placeholder: string;
  defaultValue: string,
  minLength?: number;
  required: boolean | undefined;
}

const Input: FC<InputProps> = ({ id, title, text, name, type, placeholder, defaultValue, minLength, required }) =>
    <label htmlFor={id}>
      {title}
      {text ? <p>{text}</p> : null}
      <input id={id}
             name={name}
             type={type}
             placeholder={placeholder}
             defaultValue={defaultValue}
             minLength={minLength}
             required={required} />
    </label>;

export default Input;
