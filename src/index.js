import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/index.css';
import App from './app/App';
import reportWebVitals from './app/reportWebVitals';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../src/redux/reducers/index.js';

const store = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
