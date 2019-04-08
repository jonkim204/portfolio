import React from 'react';
import './header.css';
import Typing from 'react-typing-animation';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Header = (props) => {
    return (
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
    )
}

export default Header;