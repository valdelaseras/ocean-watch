import React, { FC } from 'react';
import AnchorLi from '../../../molecules/list-items/anchor/AnchorLi';
import { AnchorProps } from '../../../atoms/anchor/Anchor';

interface AnchorListProps {
  className: string;
  listItems: AnchorProps[];
}

const AnchorList: FC<AnchorListProps> = ({ className, listItems }) => (
  <ul className={className}>
    {listItems.map((listItem) => (
      <AnchorLi title={listItem.title} href={listItem.href} />
    ))}
  </ul>
);

export default AnchorList;
