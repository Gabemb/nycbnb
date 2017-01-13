import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';

//CSS
import '../App.css';

//Component
import Search from './Search/Search';


var Home = React.createClass({
	render: function(){
		return(
			<div>
				<center>
				<h2>Experience New York City like a local.</h2>
				<Search />
				<br />
				<Link to="/listing/boro/Brooklyn"><img className="poster" src={require('../images/brooklyn.jpg')} /></Link>
				<Link to="/listing/boro/Bronx"><img className="poster" src={require('../images/bronx.jpg')} /></Link>
				<Link to="/listing/boro/Manhattan"><img className="poster" src={require('../images/manhattan.jpg')} /></Link>
				<Link to="/listing/boro/Queens"><img className="poster" src={require('../images/queens.jpg')} /></Link>
				<Link to="/listing/boro/Staten Island"><img className="poster" src={require('../images/staten.jpg')} /></Link>
				</center>			

				</div>
	
		)
	}
})

export default Home;