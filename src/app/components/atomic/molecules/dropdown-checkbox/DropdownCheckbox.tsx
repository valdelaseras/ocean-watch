import React, { FC } from 'react';

export interface DropdownCheckboxProps {
  id: string;
  className: string;
  title: string;
}

const DropdownCheckbox: FC<DropdownCheckboxProps> = ({ id, className, title, children }) => (
  <div className="dropdown">
    <input type="checkbox" id={id} className="dd-checkbox" />
    {/*TODO: chevron options must later be optional ( small, large, up, down, no chevrons etc. )*/}
    <label htmlFor={id} className={'chevron chevron-small chevron-down ' + className}>
      {title}
    </label>
    <div className="dd-panel">{children}</div>
  </div>
);

export default DropdownCheckbox;
