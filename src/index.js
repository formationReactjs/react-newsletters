import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import FormulaireNews from './containers/FormulaireNews';
import Homepage from './containers/Homepage';
import SummaryPage from './containers/SummaryPage';
import App from './App';
import NotFoundPage from './containers/NotFoundPage';

const router = (
<Router>
    <div>
      <ul>
        <li>
          <Link to="/home">Homepage</Link>
        </li>
        <li>
          <Link to="/form">Form</Link>
        </li>
        <li>
          <Link to="/summary">Summary</Link>
        </li>
        <li>
          <Link to="/cheatcode">Cheatcode</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/home" component={Homepage} />
        <Route path="/form" component={FormulaireNews} />
        <Route path="/summary" component={SummaryPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

ReactDOM.render(router, document.getElementById('training-div'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
