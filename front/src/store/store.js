import {createStore, combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form'
import {syncHistoryWithStore} from 'react-router-redux';
import {browserHistory} from 'react-router';
import {render} from 'react-dom';
import {Provider} from 'react-redux'

//import root reducer (similar to an API router index that redirects to correct reducer file)
//import rootReducer from '../reducers/reducers.js'

const reducers = combineReducers{
	  // ... your other reducers here ...
	form: formReducer
}

//import reducers here ->
//import data?

//window.store = store for testing

const defaultState = {
	users,
	listings
}

const store = createStore(reducers, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;

