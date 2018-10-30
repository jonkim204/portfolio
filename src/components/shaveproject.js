import React from 'react';
import './eventproject.css';


const shaveReducerImg = require("../assets/img/shaveHome.png");

const ShaveProject = (props) => {
  return (
      <div className="project-item">
        <div className="project-image-wrapper">
            <img src={shaveReducerImg}/>
        </div>
        <div className="project-meta-wrapper">
            <div>
                <h3>Shaving Community</h3>
            </div>
            <div>
                <p className="project-desc">Keep track of shaving products and usage</p>
            </div>
        </div>
      </div>

  )
}

export default ShaveProject;