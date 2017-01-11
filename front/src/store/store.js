import { createStore, applyMiddleware} from 'redux';
import {thunk} from 'redux-thunk';
import reducers from '../reducers';
// // import {syncHistoryWithStore} from 'react-router-redux';

//import root reducer (similar to an API router index that redirects to correct reducer file)
//import rootReducer from '../reducers/reducers.js'

// const defaultState = {
// 	user,
// 	listing
// }

//this tells the redux store to pass all it's actions and reducers through the thunk pluggin
const store = createStore(reducers,applyMiddleware(thunk));
//window.store = store for testing

// const store = createStore(reducers, defaultState);

// export const history = syncHistoryWithStore(browserHistory, store);

export default store;