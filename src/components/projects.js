import React from 'react';
import './projects.css';
import Project from './project';

const eventsImg = require("../assets/img/events.png");

const Projects = (props) => {
  return (
    <div>
      <div id="projects-header-container">
        <h2 className='projects-heading'>Projects</h2>
        <p id="projects-paragraph">I build web apps primarily with React, Mongo, and Node</p>
      </div>
      <div className = "projects-list">
        < Project/>
        < Project/>
        < Project/>
        < Project/>
      </div>
    </div>
  )
}

export default Projects;