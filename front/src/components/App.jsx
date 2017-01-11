import React from 'react';
import '../App.css';
import {Link} from 'react-router';

const App = (props) => {
	return (
	<div>
    <div className='logo-div'>
		  <img className='logo' src={require('../images/nycbnb_logo.png')} />
		</div>
		<h1>Hello World (from App.jsx)</h1>
		<Link to={'/listing/' + 1}><button>To Listing!</button></Link>
		{props.children}
	</div>
)}

export default App;