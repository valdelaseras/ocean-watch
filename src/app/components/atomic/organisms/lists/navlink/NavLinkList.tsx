import React, { FC } from 'react';
import NavLinkLi, { NavLinkLiProps } from '../../../molecules/list-items/nav-link/NavLinkLi';

interface NavLinkListProps {
  className: string;
  listItems: NavLinkLiProps[];
}

const NavLinkList: FC<NavLinkListProps> = ({ className, listItems }) => (
  <ul className={className}>
    {listItems.map((listItem) => (
      <NavLinkLi
        className={listItem.className}
        to={listItem.to}
        key={listItem.id}
        id={listItem.id}
        title={listItem.title}
      />
    ))}
  </ul>
);

export default NavLinkList;
