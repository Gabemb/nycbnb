import React from 'react';
import {render} from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import Login from './src/components/Login'


// import app
import App from "./src/components/App"
import Home from './src/components/Home'


//Components
import CreateListing from './src/components/CreateListing';
import Listing from './src/components/Listing/Listing.jsx'


render(
		<Router history={browserHistory}>
			<Route path='/' component={App}>
				<IndexRoute component={Home}/>
				<Route path='Createlisting' component={CreateListing} />
				<Route path='/listing/:listingId' component={Listing} />
				<Route path="/login" component={Login} />
			</Route>
		</Router>,
	document.getElementById('root')
)
//<Route path="ListingForm" component={ListingForm} />. 