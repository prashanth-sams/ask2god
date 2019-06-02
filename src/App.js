import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Create from './components/create.component';
import Edit from './components/edit.component';
import Index from './components/index.component';
import './css/tabs.css'

function handleClick(e) {
  var header = document.getElementById("header");
  var tabs = header.getElementsByClassName("nav-link");

  for (var i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }
}

class App extends Component {

  componentDidMount() {
    if (window.location.pathname.includes('/') && window.location.pathname.length <= 1) {
      document.getElementById("home").className += " active";
    } else if (window.location.pathname.includes('/create') && window.location.pathname.length > 2) {
      document.getElementById("create").className += " active";
    } else if (window.location.pathname.includes('/index') && window.location.pathname.length > 2) {
      document.getElementById("index").className += " active";
    } else {
      console.log('unknown page')
    }
  }

  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to={'/'} className="navbar-brand">Ask2God Manager</Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto" id="header">
                <li className="nav-item">
                  <Link to={'/'} className="nav-link" id="home" onClick={handleClick}>Home</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/create'} className="nav-link" id="create" onClick={handleClick}>Add</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/index'} className="nav-link" id="index" onClick={handleClick}>List</Link>
                </li>
              </ul>
            </div>
          </nav>
          <br/>
          <Switch>
              <Route path='/create' component={ Create } />
              <Route path='/edit/:id' component={ Edit } />
              <Route path='/index' component={ Index } />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
