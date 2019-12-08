import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Home from '../sections/Home.js';
import AboutMe from '../sections/AboutMe.js';
import Experience from '../sections/Experience.js';
import Contact from '../sections/Contact.js';

class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id='homePage'>
        <Home id='home'/>
        <AboutMe id='aboutMe'/>
        <Experience id='experience'/>
      </div>
    );
  }
}

export default Main;