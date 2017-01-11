import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, Link, browserHistory} from 'react-router'


var App = React.createClass({
	render: function(){
		return(
			<div>HELLO MICHAEL</div>
		)
	}
})

ReactDOM.render(
	<Router history={browserHistory}>
		<Route path='/' component={App}>
		<IndexRoute component = {Home} />
		</Route>
	</Router>,
	document.getElementById('root')
);