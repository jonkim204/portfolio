'use strict';

import React from 'react';
import './navbar.css';


const Navbar = () => {
  return(
    <div className = "header-container">
      <h1 className="header-name">Jon Kim</h1>
      <div className = "logo-links">
        <div className="top-nav">
          <div className="dropdown-content">
              {/* <a className="p-link">Projects</a> */}
              <a href="https://github.com/jonkim204" target="_blank" className="gh-link">GitHub</a>
              <a href="https://www.linkedin.com/in/jonathan-kim-2b1a8b162/" target="_blank" className="li-link">LinkedIn</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;