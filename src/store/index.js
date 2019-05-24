import { createStore, combineReducers } from 'redux';
import FormReducer from './reducers/FormReducer';

const joinReducers = combineReducers({
    FormReducer
});
export const store = createStore(
    joinReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
