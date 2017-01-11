import { createStore, applyMiddleware} from 'redux';
import {thunk} from 'redux-thunk';
import reducers from '../reducers/reducer';
// // import {syncHistoryWithStore} from 'react-router-redux';
// import {browserHistory} from 'react-router';
// import {render} from 'react-dom';
// import {Provider} from 'react-redux'

//import root reducer (similar to an API router index that redirects to correct reducer file)
//import rootReducer from '../reducers/reducers.js'

const defaultState = {
	users,
	listings
}

//import reducers here ->

//this tells the redux store to pass all it's actions and reducers through the thunk pluggin
// const store = createStore(reducers,applyMiddleware(thunk));
//window.store = store for testing

const store = createStore(reducers, defaultState);

// export const history = syncHistoryWithStore(browserHistory, store);

export default store;