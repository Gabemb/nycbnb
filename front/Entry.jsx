import React from 'react';
import {render} from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

// import app

import Home from './src/components/Home'
import App from './src/components/App'
import Listing from './src/components/Listing/Listing.jsx'



//Components
import CreateListing from './src/components/CreateListing';
import SignUpForm from './src/components/User/user.jsx'


render(
		<Router history={browserHistory}>

			<Route path='/' component={App}>
				<IndexRoute component={Home}/>
				<Route path='Createlisting' component={CreateListing} />
				<Route path='/listing/:listingId' component={Listing} />
				<Route path="SignUpForm" component={SignUpForm} />

			</Route>
		</Router>,
	document.getElementById('root')
)
