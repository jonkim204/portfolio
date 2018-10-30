import React from 'react';
import './footer.css'




const Footer = () => {
  return(
    <div className = "footer-container">
      <h1 className="footer-header">Contact me Via:</h1>
      <div>
            <a href="https://github.com/jonkim204" target="_blank"><i class="fab fa-github fa-3x"></i></a>
            <a href="https://www.linkedin.com/in/jonathan-kim-2b1a8b162/" target="_blank"><i class="fab fa-linkedin-in fa-3x"></i></a>
            <a href="mailto:jonkim204@gmail.com" target="_blank"><i class="far fa-envelope fa-3x"></i></a>
          </div>
        <h3 className="email">jonkim204@gmail.com</h3>
        <h3 id="footer-copyright">&#169; Jonathan Kim 2018</h3>
    </div>
  );
}


export default Footer;