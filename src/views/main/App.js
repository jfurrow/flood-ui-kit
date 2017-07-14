import React, { Component } from 'react';
import {HashRouter as Router, Redirect, Route} from 'react-router-dom';

import ButtonsView from '../buttons/ButtonsView';
import FormCompositionView from '../form-composition/FormCompositionView';
import InputsView from '../inputs/InputsView';
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
              <Route path="/buttons" component={ButtonsView} />
              <Route path="/inputs" component={InputsView} />
              <Route path="/form-composition" component={FormCompositionView} />
            </main>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
