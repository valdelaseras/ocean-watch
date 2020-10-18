import React, { FC } from 'react';

interface ContentProps {
  colSize: string;
}

const Content: FC<ContentProps> = ({ colSize, children }) => (
  <div className={colSize}>
    <div className="content">{children}</div>
  </div>
);

export default Content;
