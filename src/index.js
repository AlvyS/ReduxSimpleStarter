import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './components/app';
import combinedReducers from './reducers';

const createdStore = createStore(combinedReducers);

ReactDOM.render(
  <Provider store={createdStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);
