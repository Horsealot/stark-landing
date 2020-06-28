import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import './App.scss';
import Landing from "./components/Landing";
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
                          <Link to="/investments">Investments</Link>
                      </li>
                      <li>
                          <Link to="/contact">Contact</Link>
                      </li>
                  </ul>
              </nav>

              <footer>
                  © Stark {(new Date().getFullYear())}
              </footer>

              <Switch>
                  <Route path="/" exact component={Landing} />
                  <Route path="/contact" exact component={Group} />
                  <Route path="/investments" exact component={Products} />
                  <Route component={NotFound} status={404}/>
              </Switch>
          </div>
      </Router>
    );
  }
}

export default App;
