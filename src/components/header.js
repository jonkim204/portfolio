'use strict';

import React from 'react';
import './header.css';


export default class Navbar extends React.Component {
render () {
  return(
    <div className = "header-container">
      <h1>Jonathan Kim</h1>
      <h2>Full-Stack Developer</h2>
      <h3>Los Angeles, CA</h3>
      <h3 className="email">jonkim204@gmail.com</h3>
        <div className = "logo-links">
          <div>
            <a href="https://www.linkedin.com/in/jonathan-kim-2b1a8b162/" target="_blank"><i class="fab fa-github fa-3x"></i></a>
            <a href="https://github.com/jonkim204" target="_blank"><i class="fab fa-linkedin-in fa-3x"></i></a>
            <a href="mailto:jonkim204@gmail.com" target="_blank"><i class="far fa-envelope fa-3x"></i></a>
          </div>
        </div>
    </div>
  );
}
}