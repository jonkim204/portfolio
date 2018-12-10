import React from 'react';
import './projects.css';
import EventProjectPage from './eventProjectPage';
import LearnProject from './learnproject';
import ShaveProject from './shaveproject';

const eventImg = require("../assets/img/event.png");
const learnImg = require("../assets/img/ilearnhome.png");
const shaveImg = require("../assets/img/shaveHome.png");


const Projects = (props) => {
  return (
    <div>
      <header>
      <h2 className='projects-heading'>PROJECTS</h2>
      </header>
      <section className="project-container">
        <div>
          <h3 className="project-title">EventFinder</h3>
          <div>
            <img className="event-img" src = {eventImg} />
          </div>
          <div className="proj-par">
               <p>Event Finder is a website that allows for users to connect with one another. 
                  The inspiration for this came from the time I spent the past living and working abroad in East Asia.
                  During my time there, I wanted a more intimate method for meeting and beginning new friendships. Ultimately, I want this this to be a community for wandering individuals to meet and grow together.
                </p>
          </div>
         </div>
         <div className="proj-links">
          <a className="gh-link" href="https://github.com/thinkful-ei22/jon-events-client" target="_blank"><button type="button" class="gh-button">View Source</button></a>
          <a href="https://eventfinder-client.herokuapp.com" target="_blank"><button type="button" class="view-project">View Project</button></a>
        </div>
      </section>
      <section className="project-container">
        <div>
          <h3 className="project-title">iLearn</h3>
          <div>
            <img className="event-img" src = {learnImg} />
          </div>
          <div className="proj-par">
              <p>iLearn was built mainly for practice and for fun. I wanted to attempt at using a linked list data structure to create a spaced repetition algorithm. Currently, the features on this application are limited, but more will follow.
                  Users can practice words coninuously. Depending on the users' answer, the same question will repeat after a certain number of responses. Users can keep track of their streak and total correct answers.
              </p>
          </div>
         </div>
         <div className="proj-links">
         <a className="gh-link" href="https://github.com/thinkful-ei22/jon-fillip-spaced-repetition-client" target="_blank"><button type="button" class="gh-button">View Source</button></a>
          <a href="https://jon-filipp-spcrep-client.herokuapp.com/" target="_blank"><button type="button" class="view-project">View Project</button></a>
        </div>
      </section>
      <section className="project-container">
        <div>
          <h3 className="project-title">ShaveReducer</h3>
          <div>
            <img className="event-img" src = {shaveImg} />
          </div>
          <div className="proj-par">
            <p>
              ShaveReducer is a place for people who like to purchase and try out different products, such as razors, lathers, aftershaves, etc.. This application allows for users to add products they've used and leave ratings and comments for future vieiwing.
              Other great features include the ability for users to upload .csv files and add those products directly into their collection. Users can also create what we call "shave histories", which are the combination of products used along with ratings and comments of the experience.
              The goal is to create a large community where users can choose to share their shave histories and have other users view and take ideas from others. I beleive this application can be very useful for those who enjoy a good old fashioned shave and would like to keep a log of past shaves.
            </p>
          </div>
         </div>
         <div className="proj-links">
         <a className="gh-link" href="https://github.com/thinkful-ei22/shaving-tracker-client" target="_blank"><button type="button" class="gh-button">View Source</button></a>
          <a href="https://hetokibo-shaving-client.herokuapp.com/" target="_blank"><button type="button" class="view-project">View Project</button></a>
        </div>
      </section>
    </div>
  )
}

export default Projects;