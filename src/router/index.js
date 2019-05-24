import React from 'react';
import '../App.css';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link,
    Redirect
} from 'react-router-dom';
import FormulaireNews from '../containers/FormulaireNews';
import Summary from '../containers/Summary';
import NotFound from '../containers/NotFound';
import Home from '../containers/Home';

const isFirstEnter = true;

export const routes = (
    <Router>
        <ul>
            <li>
                <Link to={'/'}>Home</Link>
            </li>
            <li>
                <Link to={'/newsletter'}>S'inscrire à la newsletter</Link>
            </li>
            <li>
                <Link to={'/summary'}>summary</Link>
            </li>
            <li>
                <Link to={'/not-found'}>404</Link>
            </li>
        </ul>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route
                exact
                path="/newsletter"
                render={() =>
                    isFirstEnter ? <Redirect to="/" /> : <FormulaireNews />
                }
            />
            <Route
                exact
                path="/summary"
                render={() =>
                    isFirstEnter ? <Redirect to="/" /> : <Summary />
                }
            />
            <Route
                exact
                path="/not-found"
                render={() =>
                    isFirstEnter ? <Redirect to="/" /> : <NotFound />
                }
            />
            {/* when none of the above match, <NoMatch> will be rendered */}
            <Route component={NotFound} />
        </Switch>
    </Router>
);
