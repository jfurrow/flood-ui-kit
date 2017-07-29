import React, { Component } from 'react';
import {HashRouter as Router, Redirect, Route} from 'react-router-dom';

import Buttons from './Buttons';
import FormComponents from './FormComponents';
import Panels from './Panels';
import Navigation from './Navigation';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="main">
          <div className="main__body">
            <Navigation />
            <main className="main__content">
              <Route exact path="/" render={() => <Redirect to="/buttons" />} />
              <Route path="/buttons" component={Buttons} />
              <Route path="/form-components" component={FormComponents} />
              <Route path="/panels" component={Panels} />
            </main>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
