// dependencies and info within other forms

import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import About from "./About"
import Resume from "./Resume";
import Contact from "./Contact";
import Game from "./Game";
import Projects from "./Projects";

 
// app frame
class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1 className="WAM">We Are Matt</h1><span>  a project by Matt Molloy</span>     
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="./About">About Me</NavLink></li>
            <li><NavLink to="/Resume">Resume</NavLink></li>
            <li><NavLink to="/game">Tic Tac Toe</NavLink></li>
            <li><NavLink to="/projects">Projects</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>

          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/About" component={About}/>
            <Route path="/Resume" component={Resume}/>
            <Route path="/Game" component={Game}/>
            <Route path="/Projects" component={Projects}/>
            <Route path="/contact" component={Contact}/>

          </div>
        
          <div className="footer">
            <p className="WAM">WAM</p>
            <br/><br/>©
          </div>
        </div>

      </HashRouter>
    );
  }
}



export default Main;