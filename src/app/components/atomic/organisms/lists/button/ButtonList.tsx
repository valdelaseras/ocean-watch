import React, { FC } from 'react';
import ButtonLi from '../../../molecules/list-items/button/ButtonLi';
import { ButtonProps } from '../../../atoms/button/Button';

interface ButtonListProps {
  className: string;
  listItems: ButtonProps[];
}

const ButtonList: FC<ButtonListProps> = ({ className, listItems }) => (
  <ul className={className}>
    {listItems.map((listItem) => (
      <ButtonLi type={listItem.type} title={listItem.title} btnClass={listItem.btnClass} disabled={listItem.disabled} />
    ))}
  </ul>
);

export default ButtonList;
