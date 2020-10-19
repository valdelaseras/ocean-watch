import React, { FC } from 'react';
import NavLinkList from '../../atomic/organisms/lists/navlink/NavLinkList';
import { NavLink } from 'react-router-dom';
import { NavLinkLiProps } from '../../atomic/molecules/list-items/nav-link/NavLinkLi';

const menuLinks: NavLinkLiProps[] = [
  { id: 'profile', title: 'Profile', to: '/profile', className: 'user-space' },
  { id: 'settings', title: 'Settings', to: '/settings', className: 'user-space' },
  {
    id: 'hotlines',
    title: 'Emergency hotlines',
    to: '/hotlines',
    text: 'Notify DOC of sick, injured or stranded animals',
  },
  {
    id: 'education',
    title: 'Education',
    to: '/education',
    text: 'Data, identification guides and other learning resources',
  },
  { id: 'about', title: 'About', to: '/about' },
  { id: 'contact', title: 'Contact', to: '/contact' },
  { id: 'contribute', title: 'Contribute', to: '/contribute' },
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
        {/*TODO: some nav links contain sub menu link items that may be viewed when click/tab on chevron*/}
      </div>
    </div>
  </nav>
);
export default Nav;

// Full nav menu looks like this:
// - profile
// - settings
//      - ( profile ? )
//      - ( "add ons" ? ( contains optional, opt in, features like low tide info, notifications )
//      - notifications
//      - subscriptions ( region, species, biome )
//      - visual settings ( theme, fonts, font size )
// - emergency hotlines ( DOC emergency hotlines for sick and or stranded animals etc. )
// - education
//      - Ocean Watch data ( graphs, pie charts, maps, any kind of data overview, trends etc. A cool thing. Maybe some ML here )
//      - ID guides and resources
//      - ( tips ? when, where to see what )
// - about
//      - mission statement and all that
//      - FAQ
//      - Privacy policy, cookie policy
//      - any credits
//      - for devs
// - contact
//      - get in touch, questions or whatever ( phone, email )
//      - report issues ( maybe not the best place here, not sure yet )
// - contribute
//      - Monetary donations ( maybe to us, in any case other organisations like Orca foundation, mission blue blablabla )
//      - Other donations ( stuff like cotton sheets to help stranded whales etc. )
//      - as developer ( contribute to OW open source? )

// in footer:
// pp policy, cookie policy, faq, report issues, contribute ( desktop only? )
