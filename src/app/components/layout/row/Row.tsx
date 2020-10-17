import React, { FC } from 'react';

interface RowProps {
  colSize: string;
}

const Row: FC<RowProps> = ({ colSize, children }) => {
  return <div className={colSize}>{children}</div>;
};

export default Row;
