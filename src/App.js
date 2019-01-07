import React, { Component } from 'react';
import './App.css';
import "react-router";
import {BrowserRouter, Route, NavLink, Redirect, Switch} from "react-router-dom";
import {SanJose, Seattle, Burbank, Dallas, DC, Chicago} from "./cities.js";

class App extends Component {
  render() {
    return (
      <div className = "App">
        <BrowserRouter>
          <div id = "top">
            <h1>Dojo Weather Forecast</h1>
            <NavLink to = "/seattle" activeClassName = "here">Seattle, WA</NavLink> | 
            <NavLink to = "/sanjose" activeClassName = "here">San Jose, CA</NavLink> | 
            <NavLink to = "/burbank" activeClassName = "here">Burbank, CA</NavLink> |
            <NavLink to = "/dallas" activeClassName = "here">Dallas, TX</NavLink> | 
            <NavLink to = "/dc" activeClassName = "here">Washington, D.C.</NavLink> |
            <NavLink to = "/chicago" activeClassName = "here">Chicago, IL</NavLink>
          </div>
        </BrowserRouter>
        <BrowserRouter>
          <div id = "main">
            <Switch>
              <Redirect exact from = "/" to = "/sanjose" />
            </Switch>
            <Route path = "/sanjose" component = {SanJose} />
            <Route path = "/seattle" component = {Seattle} />
            <Route path = "/burbank" component = {Burbank} />
            <Route path = "/dallas" component = {Dallas} />
            <Route path = "/dc" component = {DC} />
            <Route path = "/chicago" component = {Chicago} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
