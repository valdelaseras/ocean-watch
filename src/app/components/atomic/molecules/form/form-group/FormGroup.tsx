import React, { FC } from 'react';

export interface FormGroupProps {
  id: string;
  title?: string;
}

const FormGroup: FC<FormGroupProps> = ({ id, title, children }) => (
  <div className="form-group" id={id}>
    {title ? <h2>{title}</h2> : null}
    {/*formfields go here*/}
    {children}
  </div>
);

export default FormGroup;
