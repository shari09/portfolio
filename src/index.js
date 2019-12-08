import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Main from './pages/Main.js';
import Contact from './sections/Contact.js'
import Navbar from './sections/Navbar.js';




class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Navbar/>
        <Main/>
        <Contact id='contact'/>
      </div>
    );
  }
}

const root = document.getElementById('root');

ReactDOM.render(<App/>, root);