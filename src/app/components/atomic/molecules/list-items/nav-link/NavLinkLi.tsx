import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

export interface NavLinkLiProps {
  to: string;
  id: string;
  title: string;
  className?: string;
}

const NavLinkLi: FC<NavLinkLiProps> = ({ to, id, className, title }) => (
  <li>
    <NavLink to={to} title={title} className={className}>
      {title}
    </NavLink>
  </li>
);

export default NavLinkLi;
