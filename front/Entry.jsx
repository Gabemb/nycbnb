import React from 'react';
import {render} from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import Login from './src/components/Login'

//App
import Home from './src/components/Home'
import App from './src/components/App'


//Components
import CreateListing from './src/components/CreateListing';
import Listing from './src/components/Listing/Listing.jsx'
import SignUpForm from './src/components/User/user.jsx'
import ShowAll from './src/components/Listing/ShowAll';

render(
		<Router history={browserHistory}>
			<Route path='/' component={App}>
				<IndexRoute component={Home}/>
				<Route path='Createlisting' component={CreateListing} />
				<Route path='/listing/:listingId' component={Listing} />
				<Route path='/listing/showall' component={ShowAll} />
				<Route path="/login" component={Login} />
				<Route path="SignUpForm" component={SignUpForm} />
			</Route>
		</Router>,
	document.getElementById('root')
)
