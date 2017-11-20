import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';
import {createLogger} from 'redux-logger';

import App from './components/app';
import combinedReducers from './reducers';


const middleware = applyMiddleware(thunk, createLogger());
const createdStore = createStore(
  combinedReducers,
  middleware
);

ReactDOM.render(
  <Provider store={createdStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);
