 import React from 'react';
 import {connect} from 'react-redux';

const App = (props) => {
	console.log("PROPS ==>", props)
	return (
	<div>
		<h1>User</h1>
		{ JSON.stringify(props.userState) }
	</div>
)}

const mapStateToProps = function (state){
	return {
		userState: state.user,
		// bookingState: state.booking
	}
}
const AppConnected = connect(mapStateToProps)(App);

export default AppConnected;