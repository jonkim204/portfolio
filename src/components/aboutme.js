import React from 'react';
import './aboutme.css';
const AboutMe = (props) => {

  return(
    <div className="aboutme-container">
      <h1 id="about-me-heading">Hi, my name is Jon.</h1>
      <p id="about-me-paragraph">
        I'm a Full-Stack Developer.</p>
        <p id="about-me-paragraph">As much as I enjoy spending the day coding, I have many other interests and hobbies </p>
        <p id="about-me-paragraph">Some of my interests: </p>
        <p id="about-me-paragraph">I love basketball, both playing and watching. </p>
        <p id="about-me-paragraph">
          (<span id="purp-letter">G</span> 
          <span id="gold-letter">O</span>
          <span> </span> 
          <span id="purp-letter">L</span> 
          <span id="gold-letter">A</span> 
          <span id="purp-letter">K</span> 
          <span id="gold-letter">E</span> 
          <span id="purp-letter">R</span> 
          <span id="gold-letter">S</span> 
          <span id="purp-letter">!</span>) 
        </p>
        <p id="about-me-paragraph">Every season, I invest myself into the games and enjoy competing in a few fantasy leagues.</p>
        <p id="about-me-paragraph">I'm quite the bookworm. I get excited when I find a new novel or series to immerse myself in. </p>
        <p id="about-me-paragraph">I really enjoy working with Javascript, HTML, and CSS. React-Redux can keep me entertained for hours.</p>
    </div>
  )
}

export default AboutMe;