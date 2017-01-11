import React from 'react';
import {render} from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

// import app
import App from "./components/App"

//import Provider and store
import {Provider} from 'react-redux';

import store from './src/store/store.js';

//Components
import ListingForm from './src/forms/makeListing'


render(
	<Provider store = {store} >
		<Router history={browserHistory}>
			<Route path='/'>
				<IndexRoute component={App}/>
				<Route path="ListingForm" component={ListingForm} />. 
			</Route>
		</Router>
	</Provider>,
	document.getElementById('root')
)