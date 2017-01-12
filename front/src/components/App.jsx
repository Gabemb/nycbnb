import React from 'react';
import {Link} from 'react-router';

//CSS
import '../App.css';

//Components
import SignUpForm from './User/user.jsx'
import Login from './Login';
import Home from './Home';


const App = React.createClass({
	render: function(){
		return(
			<div>
			
			<img className='logo' src={require('../images/nycbnb_logo.png')} />
			
			
	          <Link className ="signlogin" to='SignUpForm'>Sign Up</Link>
	          <Link className ="signlogin" to='Login'>Log In</Link>


	        <br />

			{this.props.children}

			</div>
		)
	}
})


export default App;