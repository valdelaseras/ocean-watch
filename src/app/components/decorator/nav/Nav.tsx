import React,{FC} from 'react';

const Nav: FC = () =>
    <nav className="nav">
        <div className="branding-logo">
            <a href="/dashboard" title="Ocean Watch">
                Ocean Watch
            </a>
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
                    <li><a href="">Een</a></li>
                    <li><a href="">Link</a></li>
                    <li><a href="">Hier</a></li>
                </ul>
            </div>
        </div>
    </nav>
;

export default Nav;
