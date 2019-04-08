import React from 'react';
import './App.css';
import Navbar from './navbar';
import AboutMe from './aboutme';
import Projects from './projects';
import Footer from './footer';
import Contact from './contact';
import Header from './header';
import Typing from 'react-typing-animation';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const eventImg = require("../assets/img/event.png");
const learnImg = require("../assets/img/ilearnhome.png");
const shaveImg = require("../assets/img/shaveHome.png");
const portfImg = require("../assets/img/headshot.jpg");
const snowImg = require("../assets/img/snowboard.jpg");


const App = () => (
  <div>
    <div>
            <header className="App-header" id="Main">
            <Typing>
                <h1 className="my-name">JONATHAN KIM</h1>
                <p>
                <AnchorLink href="#About-Me">About Me</AnchorLink>
                <AnchorLink href="#Projects">Projects</AnchorLink>
                <AnchorLink href="#Contact-Info">Contact Info</AnchorLink>
                </p>
            </Typing>
            </header>
            {/* <section className="about-me-div" id="About-Me">
                <h3 className="div-header">About Me</h3>
                    <Typing speed={1}>
                        <Typing.Delay ms={4000} />
                        <ul className="bio">
                        <li>NAME: Filipp Gorbunov</li>
                        <li>BACKGROUND: Software Tester turned Full Stack Developer</li>
                        <li>LOCATION: Beautiful state of <span className="state-span">
                            <a href="https://www.wta.org/go-outside/map" target="_blank" rel="noopener noreferrer" className="state-link">WASHINGTON</a></span></li>
                        <li>ABOUT ME: I enjoy creating apps using <span className="react-span">React,</span></li>
                        <li>I strive to constantly learn new things about coding and development.</li>
                        <li>PROJECTS: Click <span className="name-span"><AnchorLink href="#Projects">HERE</AnchorLink></span> to check them out below!</li>
                        </ul>
                    </Typing>
            </section> */}
        </div>
        <div>
      <header>
        <h1 className="aboutme-header">ABOUT ME</h1>
      </header>
      <section className="aboutme-container" id="About-Me">
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
    <div>
      <header>
      <h2 className='projects-heading'>PROJECTS</h2>
      </header>
      <section className="project-container ilearn-container" id="Projects">
        <div>
          <h3 className="project-title">EventFinder</h3>
          <div className="col-5">
            <img className="event-img" src = {eventImg} />
          </div>
          <div className="col-7">
               <p>
                 Event Finder is a website that allows for users to connect with one another. The inspiration for this came from the time I spent the past living and working abroad in East Asia</p>
              <p>Technology Used: React, Redux, Node.Js, MongoDB</p>
          </div>
         </div>
         <div className="proj-links">
          <a className="gh-link" href="https://github.com/thinkful-ei22/jon-events-client" target="_blank"><button type="button" class="gh-button">View Source</button></a>
          <a href="https://eventfinder-client.herokuapp.com" target="_blank"><button type="button" class="view-project">View Project</button></a>
        </div>
      </section>
      <section className="project-container ilearn-container">
        <div>
          <h3 className="project-title">iLearn</h3>
          <div className="col-7">
              <p>iLearn was built mainly for practice and for fun. I wanted to attempt at using a linked list data structure to create a spaced repetition algorithm.
                  Users can practice words coninuously. Depending on the users' answer, the same question will repeat after a certain number of responses. Users can keep track of their streak and total correct answers.
              </p>
              <p>Technology Used: React, Redux, Node.Js, MongoDB</p>
          </div>
          <div className="col-5">
            <img className="event-img" src = {learnImg} />
          </div>
         </div>
         <div className="proj-links">
         <a className="gh-link" href="https://github.com/thinkful-ei22/jon-fillip-spaced-repetition-client" target="_blank"><button type="button" class="gh-button">View Source</button></a>
          <a href="https://jon-filipp-spcrep-client.herokuapp.com/" target="_blank"><button type="button" class="view-project">View Project</button></a>
        </div>
      </section>
      <section className="project-container ilearn-container">
        <div>
          <h3 className="project-title">ShaveReducer</h3>
          <div className="col-5">
            <img className="event-img" src = {shaveImg} />
          </div>
          <div className="col-7">
            <p>
              ShaveReducer is a place for shaving enthusiasts. Here, users are able to keep track of shaving products used and ratings of particular shaves. 
            </p>
            <p>Technology Used: React, Redux, Node.Js, MongoDB</p>
          </div>
         </div>
         <div className="proj-links">
         <a className="gh-link" href="https://github.com/thinkful-ei22/shaving-tracker-client" target="_blank"><button type="button" class="gh-button">View Source</button></a>
          <a href="https://hetokibo-shaving-client.herokuapp.com/" target="_blank"><button type="button" class="view-project">View Project</button></a>
        </div>
      </section>
    </div>
    <div>
      <header>
        <h1 className="contact-header">CONTACT ME</h1>
      </header>
      <section className="contact-container" id="Contact-Info">
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
    {/* < Footer /> */}
  </div>
  );

export default App;
