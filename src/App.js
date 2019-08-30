import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/common_styles.css";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import Home from './components/home/home.component';
import Create from './components/create/create.component';
import Edit from './components/edit/edit.component';
import Index from './components/index/index.component';
import Search from './components/search/search.component';
import Timeline from './components/timeline/timeline.component';
import './css/tabs.css';
import './css/mobile.css';
// import ReactLoading from 'react-loading';

function handleClick(e) {
  var header = document.getElementById("header");
  var tabs = header.getElementsByClassName("nav-link");
  var logo = document.getElementsByClassName("navbar-brand")[0];

  for (var i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }

  logo.addEventListener("click", function() {
    document.getElementsByClassName("active")[0].classList.remove('active');
    var current = document.getElementById("home");
    current.className += " active";
  });
}

class App extends Component {

  componentDidMount() {
    if (window.location.pathname.includes('/') && window.location.pathname.length <= 1) {
      document.getElementById("home").className += " active";
    } else if (window.location.pathname.includes('/create') && window.location.pathname.length > 2) {
      document.getElementById("create").className += " active";
    } else if (window.location.pathname.includes('/index') && window.location.pathname.length > 2) {
      document.getElementById("index").className += " active";
    } else if (window.location.pathname.includes('/search') && window.location.pathname.length > 2) {
      document.getElementById("search").className += " active";
    } else if (window.location.pathname.includes('/timeline') && window.location.pathname.length > 2) {
      console.log('timeline page')
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
            <a id="resp-search" className="menu-item" href="/search">
              <i className="fa fa-search"></i>
              <span> Search Bible</span>
            </a>
          </Menu>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to={'/'} className="navbar-brand" onClick={handleClick}>Ask2God</Link>
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
                <li className="nav-item">
                  <Link to={'/search'} className="nav-link" id="search" onClick={handleClick}>
                    <i className="fa fa-search"></i>
                    <span> Search</span>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <br/>
          <Switch>
              <Route exact path='/' component={ Home } />
              <Route path='/create' component={ Create } />
              <Route path='/edit/:id' component={ Edit } />
              <Route path='/index' component={ Index } />
              <Route path='/search' component={ Search } />
              <Route path='/timeline' component={ Timeline } />
              {/* <ReactLoading type={'bars'} color={'#5243AA'} height={'20%'} width={'20%'} /> */}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
