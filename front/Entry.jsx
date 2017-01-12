import React from 'react';
import {render} from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

// import app
import App from "./src/components/App"
import Home from './src/components/Home'
import Listing from './src/components/Listing/Listing.jsx'

//Components
import CreateListing from './src/components/CreateListing';
import ShowAll from './src/components/Listing/ShowAll';


render(
		<Router history={browserHistory}>
			<Route path='/' component={App}>
				<IndexRoute component={Home}/>
				<Route path='Createlisting' component={CreateListing} />
				<Route path='/listing/:listingId' component={Listing} />
				<Route path='/listing/showall' component={ShowAll} />
			</Route>
		</Router>,
	document.getElementById('root')
)
//<Route path="ListingForm" component={ListingForm} />. 