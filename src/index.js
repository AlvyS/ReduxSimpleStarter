import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import combinedReducers from './reducers';
import App from './components/app';

const createdStore = createStore(combinedReducers);

ReactDOM.render(
  <Provider store={createdStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);
