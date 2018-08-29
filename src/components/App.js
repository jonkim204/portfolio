import React from 'react';
import './App.css';
import Navbar from './header';
import Footer from './footer';
import Projects from './projects';
import AboutMe from './aboutme';


class App extends React.Component {
  render() {
    return (
      <div>
        < Navbar />
        < AboutMe />
        < Projects />
        < Footer />
      </div>
    )
    }
}

export default App;
