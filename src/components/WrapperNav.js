import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Routes from '../routes/Routes';

import '../assets/sass/components/WrapperNav.scss';

const WrapperNav = () => {
  const [menu, setMenu] = useState(false);

  const handleToggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <section className="section--principal">
      <header className={menu ? 'header--menu--open' : 'header--menu--close'}>
        <i className="i--menu bx bx-right-arrow" onClick={handleToggleMenu}></i>
        <nav>
          <ul>
            <li>
              <NavLink exact activeClassName="red" to="/">
                <i className="i--iconsNav bx bx-home-alt"></i>
                <span className="span--nav">Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink exact activeClassName="red" to="/about">
                <i className="i--iconsNav bx bx-info-circle"></i>
                <span className="span--nav">About</span>
              </NavLink>
            </li>
            <li>
              <NavLink exact activeClassName="red" to="/experience">
                <i className="i--iconsNav bx bx-briefcase-alt-2"></i>
                <span className="span--nav">Experience</span>
              </NavLink>
            </li>

            {/*Social links */}
            <li className="li--social">
              <Link to={'https://github.com/Nicolas-alt'} target={'_bank'}>
                <i className="i--social bx bxl-github"></i>
              </Link>
            </li>

            <li className="li--social">
              <Link
                to="https://www.linkedin.com/in/nicolas-jimenez-b20660184/"
                target="_bank"
              >
                <i className="i--social bx bxl-linkedin"></i>
              </Link>
            </li>

            <li className="li--social">
              <Link to="https://twitter.com/Nicolas35103573" target="_blan">
                <i className="i--social bx bxl-twitter"></i>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <div className="div--router">
        <Routes />
      </div>
    </section>
  );
};

export default WrapperNav;
