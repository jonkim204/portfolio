import React from 'react';
import './projects.css';
import { Link } from 'react-router-dom';
import EventProject from './eventproject';
import LearnProject from './learnproject';
import ShaveProject from './shaveproject';


const Projects = (props) => {
  return (
    <div className="container">
      <div id="projects-header-container">
        <h2 className='projects-heading'>Projects</h2>
        <p id="projects-paragraph">I build web apps primarily with React, Mongo, and Node</p>
        <p id="projects-view">(Click on a project to view its details)</p>
      </div>
      <div className = "projects-list">
        <div className="project-1">
          <Link to="/eventfinder">< EventProject/></Link>
        </div>
        <div className="project-2">
          <Link to="/ilearn">< LearnProject/></Link>
        </div>
        <div className="project-3">
          <Link to="/shavereducer">< ShaveProject/></Link>
        </div>
      </div>
    </div>
  )
}

export default Projects;