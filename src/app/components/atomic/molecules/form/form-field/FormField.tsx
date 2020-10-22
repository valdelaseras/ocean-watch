import React, { Dispatch, FC, ReactElement, SetStateAction, useState } from 'react';

let valid: boolean,
  setValidity: Dispatch<SetStateAction<false>>,
  value: string | number | boolean | undefined,
  setValue: Dispatch<SetStateAction<string | number | boolean | undefined>>;

interface FormFieldProps {
  value?: string | number | boolean;
  valid?: boolean;
}

const FormField: FC<FormFieldProps> = ({ valid, value, children }) => {
  [valid, setValidity] = useState(false);
  [value, setValue] = useState(value);

  return <div className="field">{replaceField(children as ReactElement)}</div>;
};

const replaceField = (field: ReactElement): ReactElement =>
  React.cloneElement(field, {
    valid: valid,
    value: value,
    handleChange: handleChange,
  });

const handleChange = (e: any) => {
  setValidity(e.target.checkValidity());
  setValue(e.target.value);
};

export default FormField;
