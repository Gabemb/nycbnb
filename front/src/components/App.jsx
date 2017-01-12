import React from 'react';
import {Link} from 'react-router';

//CSS
import '../App.css';

//Components
import SignUpForm from './User/user.jsx'

const App = (props) => {
	return (
	<div>
    <div className='logo-div'>
		 
		  <img className='logo' src={require('../images/nycbnb_logo.png')} />
	</div>
		
	<SignUpForm/>
	<Link to={'/listing/' + 1}>
	      <button>To Listing!</button>
	 </Link>
		{props.children}
	</div>
)}

export default App;