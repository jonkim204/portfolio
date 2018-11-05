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
import ScrollToTop from './scrolltotop';
import { BrowserRouter as Router, Route } from 'react-router-dom';


const App = () => (
  <Router>
    <div>
    <ScrollToTop><Route exact path = "/" component = {Home}/></ScrollToTop>
    <ScrollToTop><Route exact path = "/eventfinder" component = {EventProjectPage}/></ScrollToTop>
    <ScrollToTop><Route exact path = "/ilearn" component = {LearnProjectPage} /></ScrollToTop>
    <ScrollToTop><Route exact path = "/shavereducer" component = {ShaveProjectPage}/></ScrollToTop>
      </div>
  </Router>
  );

export default App;
