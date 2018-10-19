import React from 'react';
import Navbar from './header';
import Footer from './footer';
import Projects from './projects';
import AboutMe from './aboutme';

const Home = () => {
    return (
        <div>
            < Navbar />
            < AboutMe />
            < Projects />
            < Footer />
        </div>
    );
}

export default Home;