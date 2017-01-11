import React from 'react';
import {render} from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

// import app
import App from "./src/components/App"

//Components
import CreateListing from './src/components/CreateListing';


render(
		<Router history={browserHistory}>
			<Route path='/' component={App}>
				<IndexRoute component={App}/>
				<Route path='Createlisting' component={CreateListing} />
			</Route>
		</Router>,
	document.getElementById('root')
)