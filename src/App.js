import React, {Component} from 'react';
// import { Route, Switch } from 'react-router-dom';

import SurveyBuilderContainer from './survey-builder/containers/SurveyBuilderContainer';

import './App.css';

class App extends Component {
    render() {
      return (
          <div className="App">
            {/* <Switch>
              <Route path="/cont" exact component={Login} />
              <Route path="/cont/:id" component={DashBoard} />
              <Route component={NotFoud} />
            </Switch> */}
            <SurveyBuilderContainer />
          </div>
      )
    }
}

export default App;
