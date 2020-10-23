import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import DropdownCheckbox from '../../atomic/molecules/dropdown-checkbox/DropdownCheckbox';

// TODO: close nav after navigating
// Also need swipe ( left to right ) closing ability

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
        <ul className="menu-list">
          <li className="user-space">
            {/*TODO: not compiling when I try to add exact or exact={true}? */}
            <NavLink to="/" title="Sightings" key="sightings">
              Sightings
            </NavLink>
          </li>
          <li className="user-space">
            <DropdownCheckbox id="profile" title="Profile">
              <ul className="submenu-list">
                <li>
                  <NavLink to="/profile" title="Profile" key="profile">
                    Profile overview
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/profile/my-sightings" title="My sightings" key="my-sightings">
                    My sightings
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/profile/saved-sightings" title="Saved sightings" key="saved-sightings">
                    Saved sightings
                  </NavLink>
                </li>
              </ul>
            </DropdownCheckbox>
          </li>
          <li className="user-space">
            <DropdownCheckbox id="settings" title="Settings">
              <ul className="submenu-list">
                <li>
                  <NavLink to="/settings/subscriptions" title="Subscriptions" key="subscriptions">
                    Subscriptions
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/settings/notifications" title="Notifications" key="notifications">
                    Notifications
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/settings/visual" title="Visual settings" key="visual-settings">
                    Visual Settings
                  </NavLink>
                </li>
              </ul>
            </DropdownCheckbox>
          </li>
          <div className="divider" />
          <li>
            <DropdownCheckbox id="hotlines" title="Emergency hotlines">
              <ul className="submenu-list">
                <li>
                  <NavLink to="/hotlines" title="Emergency hotlines" key="hotlines">
                    Report sick, injured or dead wildlife
                  </NavLink>
                </li>
              </ul>
            </DropdownCheckbox>
          </li>
          <li>
            <DropdownCheckbox id="education" title="Education">
              <ul className="submenu-list">
                <li>
                  <NavLink to="/education/data" title="Data" key="ow-data">
                    Ocean Watch data
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/education/identification" title="Identification" key="id">
                    Identification guides
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/education/resources" title="Resources" key="resources">
                    Other learning resources
                  </NavLink>
                </li>
              </ul>
            </DropdownCheckbox>
          </li>
          <div className="divider" />
          <li>
            <DropdownCheckbox id="about" title="About">
              <ul className="submenu-list">
                <li>
                  <NavLink to="/about/mission" title="Mission" key="mission">
                    Mission
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about/faq" title="FAQ" key="faq">
                    FAQ
                  </NavLink>
                </li>
              </ul>
            </DropdownCheckbox>
          </li>
          <li>
            <DropdownCheckbox id="contact" title="Contact">
              <ul className="submenu-list">
                <li>
                  <NavLink to="/contact" title="Contact" key="contact">
                    Contact
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact/issues" title="Report issues" key="issues">
                    Report issues
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact/feedback" title="Send feedback" key="feedback">
                    Send feedback / suggestions
                  </NavLink>
                </li>
              </ul>
            </DropdownCheckbox>
          </li>
          <li>
            <DropdownCheckbox id="contribute" title="Contribute">
              <ul className="submenu-list">
                <li>
                  <NavLink to="/contribute/monetary" title="Monetary contributions" key="monetary-contributions">
                    Monetary contributions
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contribute/other" title="Other contributions" key="other-contributions">
                    Other contributions
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contribute/dev" title="Dev contributions" key="dev-contributions">
                    As developer
                  </NavLink>
                </li>
              </ul>
            </DropdownCheckbox>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);
export default Nav;
