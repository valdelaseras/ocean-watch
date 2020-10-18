import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

interface NavLinkLiProps {
  to: string;
  id: string;
  title: string;
}

const NavLinkLi: FC<NavLinkLiProps> = ({ to, id, title }) => (
  <li>
    <NavLink to={to} title={title}>
      {title}
    </NavLink>
  </li>
);

export default NavLinkLi;
