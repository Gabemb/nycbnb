import React from 'react';
import {render} from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

// import app
<<<<<<< HEAD
import App from "./src/components/App"
import Home from './src/components/Home'
=======
import App from './src/components/App'
import Listing from './src/components/Listing/Listing.jsx'
>>>>>>> 680d745b548102d67d4accc22bb44c6ff7421750

//Components
import CreateListing from './src/components/CreateListing';


render(
		<Router history={browserHistory}>
<<<<<<< HEAD
			<Route path='/' component={App}>
				<IndexRoute component={Home}/>
				<Route path='Createlisting' component={CreateListing} />
=======
			<Route path='/'>
				<IndexRoute component={App}/>
				<Route path='/listing/:listingId' component={Listing} />
>>>>>>> 680d745b548102d67d4accc22bb44c6ff7421750
			</Route>
		</Router>,
	document.getElementById('root')
)
//<Route path="ListingForm" component={ListingForm} />. 