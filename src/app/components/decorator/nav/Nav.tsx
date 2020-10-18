import React, { FC } from 'react';
import NavLinkList, { NavLinkListChild } from '../../atomic/organisms/lists/navlink/NavLinkList';
import { NavLink } from 'react-router-dom';

const menuLinks: NavLinkListChild[] = [
  { id: 'settings', title: 'Settings', to: '/settings' },
  { id: 'profile', title: 'Profile', to: '/profile' },
];

const Nav: FC = () => (
  <nav className="nav">
    <div className="branding-logo">
      <NavLink to="/" title="Ocean Watch" key="branding-link">
        Ocean Watch
      </NavLink>
    </div>
    <div>
      <input type="checkbox" id="nav-checkbox" className="nav-checkbox" />
      <label htmlFor="nav-checkbox" className="nav-toggle">
        <span />
        <span />
        <span />
      </label>
      <div className="slide-in-menu">
        <NavLinkList className="menu-list" listItems={menuLinks} />
      </div>
    </div>
  </nav>
);
export default Nav;
