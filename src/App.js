import React, {Component} from 'react';

import SurveyBuilderContainer from './survey-builder/containers/SurveyBuilderContainer';

import './App.css';

class App extends Component {
    render() {
      return (
          <div className="App">
            <SurveyBuilderContainer />
          </div>
      )
    }
}

export default App;
