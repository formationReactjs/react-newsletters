import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import MyRouter from './router/index';
import { store } from './store/index';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Provider store={store}>
        <MyRouter />
    </Provider>,
    document.getElementById('training-div')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
