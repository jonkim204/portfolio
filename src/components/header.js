'use strict';

import React from 'react';
import './header.css';

const ghLogo = require("../assets/img/github-logo.png");
const mailLogo = require("../assets/img/mail-logo.png");
const linkedInLogo = require("../assets/img/linkedin-logo.png");
export default class Navbar extends React.Component {
render () {
  return(
    <div className = "header-container">
      <h1>Jonathan Kim</h1>
      <h2>Full-stack Developer</h2>
      <h3>Los Angeles, CA</h3>
      <h4>jonkim204@gmail.com</h4>
        <div className = "logo-links">
          <a href="https://github.com/jonkim204" target="_blank">
            <img src={ghLogo} alt = "github" id = "gh-logo"/>
          </a>
          <a href="https://www.linkedin.com/in/jonathan-kim-2b1a8b162/" target="_blank">
            <img src={linkedInLogo} alt = "github" id="linkedIn-logo"/>
          </a>
        </div>
    </div>
  );
}
}