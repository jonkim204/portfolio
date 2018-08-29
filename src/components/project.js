import React from 'react';
import './project.css';

const projectImg = require("../assets/img/events.png");


const Project = (props) => {
  return (
    <div className="project-item">
    <div className="project-image-wrapper">
      <img src={projectImg}/>
    </div>
    <div className="project-meta-wrapper">
      <div>
        <h3>Track Fantasy</h3>
      </div>
      <div>
        <p>Daily Fantasy Sports Winrate Analysis Tool (2015)</p>
      </div>
    </div>
  </div>
  )
}

export default Project;