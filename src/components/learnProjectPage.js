import React from 'react';
import './projectPage.css';
import { Link } from 'react-router-dom';

const iLearnImg = require("../assets/img/ilearnhome.png");

const LearnProjectPage = () => {
    return (
        <div className = "project-page-container">
            <img className="project-page-img" src = {iLearnImg} />
            <div className="project-page-info">
            <a href="https://jon-filipp-spcrep-client.herokuapp.com/" target="_blank"><h1 className="project-page-title">iLearn</h1></a>
                <h3 className="project-page-desc">Learn spanish with spaced repetition</h3>
                <h4 className="project-page-stack">Primary tech: Node.js, React, Redux</h4>
                <p className="project-page-problem"><span class="strongest">The Problem:</span> It's difficult learning a new language. This application takes advantage of spaced repetition to provide an efficient method of learning. </p> <br/>
                <div className="paragraph-container">
                    <p className="project-page-details">iLearn was built mainly for practice and for fun. I wanted to attempt at using a linked list data structure to create a spaced repetition algorithm. Currently, the features on this application are limited, but more will follow.</p><br/>
                    <p className="project-page-details">Users can practice words coninuously. Depending on the users' answer, the same question will repeat after a certain number of responses. Users can keep track of their streak and total correct answers.</p><br/>
                    <p className="project-page-details">There were definitely some struggles while creating this. Deciding how to set up the schema took some time and planning. I had to decide how I wanted to store certain information to pertain to a specific user. Also, creating the algorithm was a challenge that was solved through trial and error.</p><br/>
                    <p className="project-page-details">So what's next? I would like to add more useful features in the future. For example, a way for users' to add their own words and allow for other languages to be learned. The UI can definitely be improved as well.</p><br/>
                </div>
            <div className="live-link"><a href="https://jon-filipp-spcrep-client.herokuapp.com/" target="_blank">jon-filipp-spcrep-client.herokuapp.com</a></div>
            <div className="source-link">
                <i class="fab fa-github fa-1x"></i> <a className="source-link" href="https://github.com/thinkful-ei22/jon-fillip-spaced-repetition-client" target="_blank">Source</a><br/>
            </div>
            <div className="back">
             <Link to="/" className="back-button">&#x3c; Back</Link>
            </div>
            </div>
        </div>
    )
}

export default LearnProjectPage;