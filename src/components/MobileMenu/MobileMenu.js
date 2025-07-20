import React, { useState } from 'react';
import { Link } from 'react-scroll';

import './style.css';

const menus = [
  { id: 1, title: 'Home', link: 'home' },
  { id: 2, title: 'About', link: 'about' },
  { id: 3, title: 'Skills', link: 'skills' },
  { id: 4, title: 'Projects', link: 'project' },
  { id: 5, title: 'Contact', link: 'contact' }
];

const MobileMenu = () => {
  const [menuActive, setMenuState] = useState(false);

  const ClickHandler = () => {
    setMenuState(false); // close menu on click
    window.scrollTo(10, 0);
  };

  return (
    <div>
      <div className={`mobileMenu ${menuActive ? 'show' : ''}`}>
        <div className="menu-close">
          <div className="clox" onClick={() => setMenuState(!menuActive)}>
            <i className="ti-close"></i>
          </div>
        </div>

        <ul className="responsivemenu space-y-4 text-lg font-medium text-gray-700">
          {menus.map((item) => (
            <li key={item.id}>
              <Link
                to={item.link}
                spy={true}
                smooth={true}
                duration={500}
                onClick={ClickHandler}
                className="cursor-pointer hover:text-indigo-600 transition"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="showmenu" onClick={() => setMenuState(!menuActive)}>
        <button type="button" className="navbar-toggler open-btn">
          <span className="icon-bar first-angle"></span>
          <span className="icon-bar middle-angle"></span>
          <span className="icon-bar last-angle"></span>
        </button>
      </div>
    </div>
  );
};

export default MobileMenu;
