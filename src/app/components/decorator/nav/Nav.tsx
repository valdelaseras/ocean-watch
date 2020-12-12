import React, { FC, useState } from 'react';
import { NavLink } from 'react-router-dom';
import DropdownCheckbox from '../../atomic/molecules/dropdown-checkbox/DropdownCheckbox';

// TODO: menu closes after clicking on a navLink but there are onClicks on every link now.
//  There must be a better solution for this
// Also need swipe ( left to right ) closing ability

const Nav: FC = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const closeMenu = () => {
    setMenuIsOpen(false);
  };

  return (
    <nav className="nav">
      <div className="branding-logo">
        <NavLink to="/dashboard" title="Ocean Watch" key="branding-link">
          Ocean Watch
        </NavLink>
      </div>
      <div>
        <input type="checkbox" id="nav-checkbox" className="nav-checkbox" checked={menuIsOpen} readOnly={true} />
        <label htmlFor="nav-checkbox" className="nav-toggle" onClick={() => setMenuIsOpen(!menuIsOpen)}>
          <span />
          <span />
          <span />
        </label>
        <div className="slide-in-menu">
          <ul className="menu-list">
            <li className="user-space">
              <NavLink to="/dashboard" title="Sightings" key="sightings" onClick={() => closeMenu()}>
                Sightings
              </NavLink>
            </li>
            <li className="user-space">
              <DropdownCheckbox id="profile" title="Profile">
                <ul className="submenu-list">
                  {profileNavLinks.map((navLink) => (
                    <li key={navLink.key}>
                      <NavLink onClick={() => closeMenu()} to={navLink.to} title={navLink.title}>
                        {navLink.title}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </DropdownCheckbox>
            </li>
            <li className="user-space">
              <DropdownCheckbox id="settings" title="Settings">
                <ul className="submenu-list">
                  {settingsNavLinks.map((navLink) => (
                    <li key={navLink.key}>
                      <NavLink onClick={() => closeMenu()} to={navLink.to} title={navLink.title}>
                        {navLink.title}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </DropdownCheckbox>
            </li>
            <div className="divider" />
            <li>
              <DropdownCheckbox id="hotlines" title="Emergency hotlines">
                <ul className="submenu-list">
                  <li>
                    <NavLink to="/hotlines" title="Emergency hotlines" key="hotlines" onClick={() => closeMenu()}>
                      Report sick, injured or dead wildlife
                    </NavLink>
                  </li>
                </ul>
              </DropdownCheckbox>
            </li>
            <li>
              <DropdownCheckbox id="education" title="Education">
                <ul className="submenu-list">
                  {educationNavLinks.map((navLink) => (
                    <li key={navLink.key}>
                      <NavLink onClick={() => closeMenu()} to={navLink.to} title={navLink.title}>
                        {navLink.title}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </DropdownCheckbox>
            </li>
            <div className="divider" />
            <li>
              <DropdownCheckbox id="about" title="About">
                <ul className="submenu-list">
                  {aboutNavLinks.map((navLink) => (
                    <li key={navLink.key}>
                      <NavLink onClick={() => closeMenu()} to={navLink.to} title={navLink.title}>
                        {navLink.title}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </DropdownCheckbox>
            </li>
            <li>
              <DropdownCheckbox id="contact" title="Contact">
                <ul className="submenu-list">
                  {contactNavLinks.map((navLink) => (
                    <li key={navLink.key}>
                      <NavLink onClick={() => closeMenu()} to={navLink.to} title={navLink.title}>
                        {navLink.title}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </DropdownCheckbox>
            </li>
            <li>
              <DropdownCheckbox id="contribute" title="Contribute">
                <ul className="submenu-list">
                  {contributeNavLinks.map((navLink) => (
                    <li key={navLink.key}>
                      <NavLink onClick={() => closeMenu()} to={navLink.to} title={navLink.title}>
                        {navLink.title}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </DropdownCheckbox>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Nav;

const profileNavLinks = [
  { to: '/profile', title: 'Profile', key: 'profile' },
  { to: '/profile/my-sightings', title: 'My sightings', key: 'my-sightings' },
  { to: '/profile/isSaved-sightings', title: 'Saved sightings', key: 'isSaved-sightings' },
];

const settingsNavLinks = [
  { to: '/settings/subscriptions', title: 'Subscriptions', key: 'subscriptions' },
  { to: '/settings/notifications', title: 'Notifications', key: 'notifications' },
  { to: '/settings/visual', title: 'Visual settings', key: 'visual-settings' },
];

const educationNavLinks = [
  { to: '/education/data', title: 'Ocean Watch data', key: 'ow-data' },
  { to: '/education/identification', title: 'Identification guides', key: 'id-guides' },
  { to: '/education/resources', title: 'Additional learning resources', key: 'resources' },
];

const aboutNavLinks = [
  { to: '/about/mission', title: 'Mission', key: 'mission' },
  { to: '/about/faq', title: 'FAQ', key: 'faq' },
];

const contactNavLinks = [
  { to: '/contact', title: 'Contact', key: 'contact' },
  { to: '/contact/issues', title: 'Report issues', key: 'issues' },
  { to: '/contact/feedback', title: 'Send feedback or suggestions', key: 'feedback' },
];

const contributeNavLinks = [
  { to: '/contribute/monetary', title: 'Monetary contributions', key: 'monetary-contr' },
  { to: '/contribute/other', title: 'Other contributions', key: 'other-contr' },
  { to: '/contribute/dev', title: 'Dev contributions', key: 'dev-contr' },
];
