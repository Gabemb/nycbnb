import React from 'react';
import {render} from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import Login from './src/components/Login'


// import app
import App from "./src/components/App"

//Components
//import ListingForm from './src/forms/'


render(
		<Router history={browserHistory}>
			<Route path='/'>
				<IndexRoute component={App}/>
				<Route path="/login" component={Login} />
			</Route>

		</Router>,
	document.getElementById('root')
)