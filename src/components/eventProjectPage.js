import React from 'react';
import './projectPage.css';

const eventImg = require("../assets/img/event.png");

const EventProjectPage = () => {
    return (
        <div className = "project-page-container">
            <img className="project-page-img" src = {eventImg} />
            <div className="project-page-info">
                <h1 className="project-page-title">EventFinder</h1>
                    <h3 className="project-page-desc">Simple tool for users to create and find local events</h3>
                    <h4 className="project-page-stack">Primary tech: Node.js, React, Redux</h4>
                    <p className="project-page-problem"><span class="strongest">The Problem:</span> While living abroad, I found it difficult to keep in touch with new people I met. </p> <br/>
                    <div className="paragraph-container">
                        <p className="project-page-details">Event Finder is a website that allows for users to connect with one another in a multitude of ways. It allows for people to create and find events among a group of familiar people, not strangers. This is a place for those who find themselves in the grey area of friendship or strangers. This will help bridge that gap.</p><br/>
                        <p className="project-page-details">There are other websites and applications which provide similar services. However, this particular web application is unique because it provides a more casual, familiar setting for users.</p><br/>
                        <p className="project-page-details">The goal of this website is to eventually create a community of users who can choose to make events public or private. Ultimately, I plan to create a place where people living in unfamiliar areas are able to meet others in similar predicaments and continue to meet with each other.</p><br/>
                        <p className="project-page-details">This project is still in the works and I will continue to update and improve features as well as the UI. I plan to integrate the google maps API along with focusing on creating a community for users.</p><br/>
                    </div>
                    <div className="live-link"><a href="https://eventfinder-client.herokuapp.com" target="_blank"><button className="link-button">Live App</button></a></div>
                <div className="source-link">
                    <a className="gh-link" href="https://github.com/thinkful-ei22/jon-events-client" target="_blank"><button className="link-button">Source</button></a><br/>
                </div>
                </div>
            </div>
    )
}

export default EventProjectPage;