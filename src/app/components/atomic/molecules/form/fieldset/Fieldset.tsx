import React, { FC } from 'react';

interface FieldsetProps {
  className?: string;
  title: string;
  children: any;
}

const Fieldset: FC<FieldsetProps> = ({ className, title, children }) => (
  <fieldset className={className}>
    <legend>
      <h2>{title}</h2>
    </legend>
    {children}
  </fieldset>
);

export default Fieldset;

// TODO: Is this component useful at all? It saved a tiny bit of HTML but...
