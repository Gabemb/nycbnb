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
				<img className="brooklyn" src={require('../images/brooklyn.jpg')} />
				<img className="brooklyn" src={require('../images/brooklyn.jpg')} />
				<img className="brooklyn" src={require('../images/brooklyn.jpg')} />				
				<img className="brooklyn" src={require('../images/brooklyn.jpg')} />
				<img className="brooklyn" src={require('../images/brooklyn.jpg')} />	
				</center>			

				</div>
	
		)
	}
})

export default Home;