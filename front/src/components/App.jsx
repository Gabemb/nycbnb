import React from 'react';
import {Link} from 'react-router';

//CSS
import '../App.css';

//Components
import SignUpForm from './User/user.jsx';
import Login from './Login';
import Home from './Home';
import createListing from './CreateListing';
// import Account from './User/accountInfo.jsx';


const App = React.createClass({
	render: function(){
		return(
			<div>
			
			<Link to='/'><img className='logo' src={require('../images/nycbnb_logo.png')} /></Link>
			
			  <Link className= "NavLink" to="/createlisting">Become a Host</Link>

	          <Link className ="NavLink" to='/signUpForm'>Sign Up</Link>
	          
	          <Link className ="NavLink" to='/login'>Log In</Link>



	        <br />

			{this.props.children}

			</div>
		)
	}
})


export default App;
			
               // <Link to='Account'>Account</Link>