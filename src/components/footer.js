import React from 'react';
import './footer.css'

const ghLogo = require("../assets/img/github-logo.png");
const mailLogo = require("../assets/img/mail-logo.png");
const linkedInLogo = require("../assets/img/linkedin-logo.png");


const Footer = () => {
  return(
    <div className = "footer-container">
      <h1>Contact me Via:</h1>
      <h4>jonkim204@gmail.com</h4>
      <h3>&#169; Jonathan Kim 2018</h3>
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


export default Footer;