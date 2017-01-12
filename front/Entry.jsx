import React from 'react';
import {render} from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import Login from './src/components/Login'


// import app
import App from './src/components/App'
import Listing from './src/components/Listing/Listing.jsx'

//Components
//import ListingForm from './src/forms/'


render(
		<Router history={browserHistory}>
			<Route path='/'>
				<IndexRoute component={App}/>
				<Route path='/listing/:listingId' component={Listing} />
				<Route path="/login" component={Login} />
			</Route>
		</Router>,
	document.getElementById('root')
)
//<Route path="ListingForm" component={ListingForm} />. 