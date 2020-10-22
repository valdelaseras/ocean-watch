import React, { FC } from 'react';

export interface FormProps {
  id: string;
}

const Form: FC<FormProps> = ({ id, children }) => (
  <form id={id}>
    {/*formgroups go here*/}
    {/*submit button goes here*/}
    {children}
  </form>
);

export default Form;
