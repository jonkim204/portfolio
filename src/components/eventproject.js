import React from 'react';
import './eventproject.css';

const eventImg = require("../assets/img/events.png");


const EventProject = (props) => {
  return (
      <div className="project-item">
        <div className="project-image-wrapper">
          <img src={eventImg}/>
        </div>
        <div className="project-meta-wrapper">
          <div>
            <h3>Search for Local Events</h3>
          </div>
          <div>
            <p className="project-desc">Create and search for local events (2018)</p>
          </div>
        </div>
    </div>
  )
}

export default EventProject;