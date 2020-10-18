import React, { FC } from 'react';

interface RowProps {
  colSize: string;
}

const Row: FC<RowProps> = ({ colSize, children }) => <div className={colSize}>{children}</div>;

export default Row;
