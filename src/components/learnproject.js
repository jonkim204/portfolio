import React from 'react';
import './eventproject.css';


const iLearnImg = require("../assets/img/ilearnhome.png");


const LearnProject = (props) => {
  return (
      <div className="project-item">
        <div className="project-image-wrapper">
            <img src={iLearnImg}/>
        </div>
        <div className="project-meta-wrapper">
            <div>
            <h3>Learn a Language</h3>
            </div>
            <div>
            <p className="project-desc">Learn Spanish with spaced repetition</p>
            </div>
        </div>
    </div>
  )
}

export default LearnProject;