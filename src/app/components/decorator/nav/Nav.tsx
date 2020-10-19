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

// NOTES: navlinklist must consist of the following, in the below order:
// - Profile ( at top, visualised I think only as user icon )
// - Settings ( may also be reached from profile view )
// - Emergency hotlines ( DOC phone for stranded / sick animals etc )
// - Safety information page ? Not sure about this yet but basically DOCs rules and regulations about dealing with wildlife.
// individual detailed sightings must also contain a reference or direct message relating to the sighted animal. Like, stay
// minimum of 20 mtrs away from seals, don't block of a seals way to ocean etc
// - ID guides ( ID guides, ID links, for example NIWA ID guides or something, other resources )
