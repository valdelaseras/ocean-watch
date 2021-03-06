import React, { FC } from 'react';

export interface DropdownCheckboxProps {
  id: string;
  className?: string;
  labelClassName?: string;
  title: string;
}

const DropdownCheckbox: FC<DropdownCheckboxProps> = ({ id, labelClassName, className, title, children }) => (
  <div className="dropdown">
    <input type="checkbox" id={id} className="dd-checkbox" />
    {/*TODO: chevron options must later be optional ( small, large, up, down, no chevrons etc. )*/}
    {/*TODO: add classname if classname, otherwise null*/}
    <label htmlFor={id} className={'chevron chevron-small chevron-down ' + labelClassName}>
      {title}
    </label>
    <div className="dd-panel">{children}</div>
  </div>
);

export default DropdownCheckbox;
