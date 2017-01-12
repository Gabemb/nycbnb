import React from 'react';
import {render} from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import App from './src/components/App'
import Listing from './src/components/Listing/Listing.jsx'



render(
		<Router history={browserHistory}>
			<Route path='/'>
				<IndexRoute component={App}/>
				<Route path='/listing/:listingId' component={Listing} />
			</Route>
		</Router>,
	document.getElementById('root')
)
