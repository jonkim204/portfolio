import React from 'react';
import './projectPage.css';
import { Link } from 'react-router-dom';

const shaveReducerImg = require("../assets/img/shaveHome.png");

const ShaveProjectPage = () => {
    return (
        <div className = "project-page-container">
            <img className="project-page-img" src = {shaveReducerImg} />
            <div className="project-page-info">
            <a href="https://hetokibo-shaving-client.herokuapp.com/" target="_blank"><h1 className="project-page-title">ShaveReducer</h1></a>
                <h3 className="project-page-desc">A community for shave enthusiasts</h3>
                <h4 className="project-page-stack">Primary tech: Node.js, React, Redux</h4>
                <h4 className="project-page-stack">Other tech: PapaParse, React-Modal, React-Tabs, Moment.js</h4>
                <p className="project-page-problem"><span class="strongest">The Problem:</span>There exists a market and large community of shave enthusiasts who like to use various products and keep track of their shaves. However, there is currently no application that provides these necessary services.</p> <br/>
                <div className="paragraph-container">
                    <p className="project-page-details">ShaveReducer is a place for people who like to purchase and try out different products, such as razors, lathers, aftershaves, etc.. This application allows for users to add products they've used and leave ratings and comments for future vieiwing.</p><br/>
                    <p className="project-page-details">Other great features include the ability for users to upload .csv files and add those products directly into their collection. Users can also create what we call "shave histories", which are the combination of products used along with ratings and comments of the experience.</p><br/>
                    <p className="project-page-details">The goal is to create a large community where users can choose to share their shave histories and have other users view and take ideas from others. I beleive this application can be very useful for those who enjoy a good old fashioned shave and would like to keep a log of past shaves.</p><br/>
                    <p className="project-page-details">There were many struggles building this application. The database of products had to be manually entered and placed in an organized manner to use across different schemas. Implementing the .csv upload feature required research and a good amount of failures.</p><br/>
                </div>
            <div className="source-link">
                <i class="fab fa-github fa-1x"></i> <a className="source-link" href="https://github.com/thinkful-ei22/shaving-tracker-client" target="_blank">Source</a><br/>
            </div>
            <div className="back">
             <Link to="/" className="back-button">&#x3c; Back</Link>
            </div>
            </div>
        </div>
    )
}

export default ShaveProjectPage;