 import React from 'react';
 import {connect} from 'react-redux';
 import SignUpForm from './User/user.jsx'

const App = (props) => {
	console.log("PROPS ==>", props)
	return (
	<div>
	<SignUpForm/>
		<h1>Hello World </h1>
	</div>
)}



export default App;