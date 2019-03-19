import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import './App.scss';
import Landing from "./components/Landing";
import Manifesto from "./components/Manifesto";
import Group from "./components/Group";
import Products from "./components/Products";
import NotFound from "./components/NotFound";

class App extends Component {
  render() {
    return (
      <Router>
          <div className='Stark flex'>

              <nav>
                  <ul>
                      <li>
                          <Link to="/manifesto">Manifesto</Link>
                      </li>
                      <li>
                          <Link to="/group">Group</Link>
                      </li>
                      <li>
                          <Link to="/products/">Products</Link>
                      </li>
                  </ul>
              </nav>
              <div className={'top-left-border'}/>
              <div className={'top-right-border'}/>
              <footer>
                  © Stark {(new Date().getFullYear())}
              </footer>

              <Switch>
                  <Route path="/" exact component={Landing} />
                  <Route path="/manifesto" exact component={Manifesto} />
                  <Route path="/group" exact component={Group} />
                  <Route path="/products" exact component={Products} />
                  <Route component={NotFound} status={404}/>
              </Switch>
          </div>
      </Router>
    );
  }
}

export default App;
