import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/common_styles.css"
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu'
import Create from './components/create.component';
import Edit from './components/edit.component';
import Index from './components/index.component';
import './css/tabs.css';
import './css/mobile.css';

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
          <Menu width={ '60%' }>
            <a id="resp-home" className="menu-item" href="/">
              <i className="fa fa-home"></i>
              <span> Home</span>
            </a>
            <a id="resp-create" className="menu-item" href="/create">
              <i className="fa fa-plus"></i>
              <span> Add verse</span>
            </a>
            <a id="resp-index" className="menu-item" href="/index">
              <i className="fa fa-list"></i>
              <span> List verse</span>
            </a>
          </Menu>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to={'/'} className="navbar-brand">Ask2God</Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto" id="header">
                <li className="nav-item">
                  <Link to={'/'} className="nav-link" id="home" onClick={handleClick}>
                    <i className="fa fa-home"></i>
                    <span> Home</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={'/create'} className="nav-link" id="create" onClick={handleClick}>
                    <i className="fa fa-plus"></i>
                    <span> Add</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={'/index'} className="nav-link" id="index" onClick={handleClick}>
                    <i className="fa fa-list"></i>
                    <span> List</span>
                  </Link>
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
