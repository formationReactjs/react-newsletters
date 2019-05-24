import React, { Fragment } from 'react';
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


export default class MyRouter extends Router {
    constructor() {
        super();
        this.state = { isAlreadyLoaded: false };
    }

    componentDidMount() {
        this.setState({
            isAlreadyLoaded: true
        });
    }

    render() {
        return (
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
            {!this.state.isAlreadyLoaded && <Redirect to="/" />}
            {this.state.isAlreadyLoaded && <Fragment>
            <Route exact path="/" component={Home} />
            <Route
                path="/newsletter"
                component={FormulaireNews}
            />
            <Route
                path="/summary"
                component={Summary}
            />
            <Route
                path="/not-found"
                component={NotFound}
            />
            {/* when none of the above match, <NoMatch> will be rendered */}
            </Fragment>}
            <Route component={NotFound} />
        </Switch>
    </Router>
        );
    }

}
