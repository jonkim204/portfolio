import React from 'react';
import './contact.css';

const snowImg = require("../assets/img/snowboard.jpg");

const Contact = (props) => {

  return(
    <div>
      <header>
        <h1 className="contact-header">CONTACT ME</h1>
      </header>
      <section className="contact-container">
        <div>
            <div className="contact-left">
              <img className="contact-img" src = {snowImg} />
            </div>
                <div className="contact-section contact-right">
                <ul>
                    <li className="contact-name">Jonathan Kim</li>
                    <li>Los Angeles, CA</li>
                    <li>jonkim204@gmail.com</li>
                    <li><a className="linkedin-link"href="https://www.linkedin.com/in/jonathan-kim-2b1a8b162/" target="_blank"></a><a className="github-link"href="https://github.com/jonkim204" target="_blank"></a></li> 
                </ul>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Contact;