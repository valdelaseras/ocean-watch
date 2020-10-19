import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

export interface NavLinkLiProps {
  to: string;
  id: string;
  title: string;
  className?: string;
  text?: string;
}

const NavLinkLi: FC<NavLinkLiProps> = ({ to, id, text, className, title }) => (
  <li>
    <NavLink to={to} title={title} className={className}>
      {title}
    </NavLink>
    {text ? <p>{text}</p> : null}
  </li>
);

export default NavLinkLi;
