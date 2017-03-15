import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { addButton } from './addButtonReducer';

import App from './App';

import 'bootstrap/dist/css/bootstrap.css';
import 'survey-react/survey.css';
import './index.css';

let store = createStore(
  addButton,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
