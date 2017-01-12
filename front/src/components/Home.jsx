import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import '../App.css';

var Home = React.createClass({
	render: function(){
		return(
			<div>
				<center>
				<h2>Experience New York City like a local.</h2>
				<br />
				<img className="poster" src={require('../images/brooklyn.jpg')} />
				<img className="poster" src={require('../images/bronx.jpg')} />
				<img className="poster" src={require('../images/manhattan.jpg')} />				
				<img className="poster" src={require('../images/queens.jpg')} />
				<img className="poster" src={require('../images/staten.jpg')} />	
				</center>			

				</div>
	
		)
	}
})

export default Home;