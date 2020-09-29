import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/common_styles.css";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import Home from './components/home/home.component';
import Search from './components/search/search.component';
import Question from './components/question/question.component';
import Timeline from './components/timeline/timeline.component';
// import Revelation from './components/revelation/revelation.component';
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
    } else if (window.location.pathname.includes('/search') && window.location.pathname.length > 2) {
      document.getElementById("search").className += " active";
    } else if (window.location.pathname.includes('/question') && window.location.pathname.length > 2) {
      document.getElementById("question").className += " active";
    } else if (window.location.pathname.includes('/timeline') && window.location.pathname.length > 2) {
      console.log('timeline page')
    // } else if (window.location.pathname.includes('/revelation') && window.location.pathname.length > 2) {
    //   console.log('revelation page')
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
              <span className="bm-menu-header"> Home</span>
            </a>
            <a id="resp-search" className="menu-item" href="/search">
              <i className="fa fa-search"></i>
              <span className="bm-menu-header"> Bible Search</span>
            </a>
            <a id="resp-question" className="menu-item" href="/question">
              <i className="fa fa-question-circle"></i>
              <span className="bm-menu-header"> Q & A</span>
            </a>
          </Menu>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to={'/'} className="navbar-brand" id="home" onClick={handleClick}>Ask2God</Link>
            <div className="col-md-12" id="navbarSupportedContent">
              <ul className="navbar-nav" id="header">
                <li className="nav-item">
                  <Link to={'/search'} className="nav-link" id="search" onClick={handleClick}>
                    <i className="fa fa-search"></i>
                    <span> Search</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={'/question'} className="nav-link" id="question" onClick={handleClick}>
                    <span> Q & A?</span>
                  </Link>
                </li>
                <li className="nav-item dropdown ml-auto">
                    <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{color: "#6c757d"}}>
                      <i className="fa fa-globe"></i> English
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                      <a className="dropdown-item" href="#">English</a>
                      <a className="dropdown-item" href="#">தமிழ்</a>
                      <a className="dropdown-item" href="#">हिंदी</a>
                    </div>
                </li>
              </ul>
            </div>
          </nav>
          <br/>
          <Switch>
              <Route exact path='/' component={ Home } />
              <Route path='/search' component={ Search } />
              <Route path='/question' component={ Question } />
              <Route path='/timeline' component={ Timeline } />
              {/* <Route path='/revelation' component={ Revelation } /> */}
              {/* <ReactLoading type={'bars'} color={'#5243AA'} height={'20%'} width={'20%'} /> */}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
