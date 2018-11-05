import React from 'react';
import './App.css';
// import Navbar from './header';
// import Footer from './footer';
// import Projects from './projects';
// import AboutMe from './aboutme';
import EventProjectPage from './eventProjectPage';
import LearnProjectPage from './learnProjectPage';
import ShaveProjectPage from './shaveProjectPage';
import Home from './home';
import { BrowserRouter as Router, Route } from 'react-router-dom';


const App = () => (
  <Router>
    <div>
        <Route exact path = "/" component = {Home}  />
        <Route exact path = "/eventfinder" component = {EventProjectPage} />
        <Route exact path = "/ilearn" component = {LearnProjectPage} />
        <Route exact path = "/shavereducer" component = {ShaveProjectPage} />
      </div>
  </Router>
  );

export default App;
