import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Router, Route, Link } from "react-router-dom";
// import { Router as Router} from 'react-router-dom'
import { createBrowserHistory } from "history";
import './index.css';
import App from './App';

import * as serviceWorker from './serviceWorker';

const history = createBrowserHistory();

ReactDOM.render(
  <>
  <HashRouter basename="/" history={history}>
    <App />
  </HashRouter>
  </>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
