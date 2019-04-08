import React from 'react';
import './aboutme.css';

const portfImg = require("../assets/img/headshot.jpg");

const AboutMe = (props) => {

  return(
    <div>
      <section className="aboutme-container">
        <div>
            <div className="row">
              <div className="col-4">
                  <img className="aboutme-img" src = {portfImg} />
              </div>
              <div className="aboutme-par col-8">
                  <p>Full stack developer. Basketball aficionado. Netflix binger.</p>
                  <p>Hello, my name is Jon and I'm a Full-Stack developer from Los Angeles, CA, and I absolutely love working on the front end.</p>
                  <p>My tech stack primarily includes react, redux, node, and MongoDB, but I am actively learning as much as I can as I improve my skills. I love to take on new challenges, growing in the process. I look forward to working with other great developers in the future.</p> 
              </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default AboutMe;