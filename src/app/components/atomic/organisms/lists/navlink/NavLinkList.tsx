import React, { FC } from 'react';
import NavLinkLi from '../../../molecules/list-items/nav-link/NavLinkLi';

export interface NavLinkListChild {
  id: string;
  title: string;
  to: string;
}

interface NavLinkListProps {
  className: string;
  listItems: NavLinkListChild[];
}

const NavLinkList: FC<NavLinkListProps> = ({ className, listItems }) => (
  <ul className={className}>
    {listItems.map((listItem) => (
      <NavLinkLi to={listItem.to} key={listItem.id} id={listItem.id} title={listItem.title} />
    ))}
  </ul>
);

export default NavLinkList;
