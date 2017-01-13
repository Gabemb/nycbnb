import React from 'react';
import {render} from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

//App
import Home from './src/components/Home';
import App from './src/components/App';


//Components
import CreateListing from './src/components/CreateListing';
import Listing from './src/components/Listing/Listing.jsx';
import AllListings from './src/components/Listing/ShowAll';
import Login from './src/components/Login';
import SignUpForm from './src/components/User/user.jsx';
import Account from './src/components/User/accountInfo.jsx';

render(
		<Router history={browserHistory}>
			<Route path='/' component={App}>
				<IndexRoute component={Home}/>
				<Route path='/createlisting' component={CreateListing} />
				<Route path='/listing' component={AllListings} />
				<Route path='/listing/boro/:borough' component={AllListings} />
        <Route path='/listing/:listingId' component={Listing} />
				<Route path="/login" component={Login} />
				<Route path="/signUpForm" component={SignUpForm} />
				<Route path="/account" component={Account} />
			</Route>
		</Router>,
	document.getElementById('root')
)
