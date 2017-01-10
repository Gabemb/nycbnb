import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';
//import reducers here ->

//this tells the redux store to pass all it's actions and reducers through the thunk pluggin
const store = createStore(reducers,applyMiddleware(thunk));
//window.store = store for testing


export default store