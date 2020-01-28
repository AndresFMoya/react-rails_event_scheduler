import React from 'react';
import ReactDOM from 'react-dom';
import './styles/scss/index.scss';
import { Provider } from 'react-redux';
import App from './App';
import configureStore from './redux/store';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
