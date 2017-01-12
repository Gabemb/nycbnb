import React from 'react';
import '../App.css';
import {Link} from 'react-router';

var App = React.createClass({
	render: function(){
		return(
			<div>
			
			<img className='logo' src={require('../images/nycbnb_logo.png')} />
			
			
	          <Link className ="signlogin" to='#'>Sign Up</Link>
	          <Link className ="signlogin" to='#'>Log In</Link>
	          <Link to={'/listing/' + 1}><button>To Listing!</button></Link>

			<nav className="navbar navbar-inverse">

			<div className="mobilesignin">
			  <Link to='#'>Sign Up</Link>
	          <Link to='#'>Log In</Link>
			</div>

	        </nav>

	        <br />

			{this.props.children}

			</div>
		)
	}
})

export default App;