import React, { FC } from 'react';

export interface FormProps {
  id: string;
  className?: string;
}

const Form: FC<FormProps> = ({ id, className, children }) => (
  <form id={id} className={className}>
    {/*formgroups go here*/}
    {/*submit button goes here*/}
    {children}
  </form>
);

export default Form;
