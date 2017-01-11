import React from 'react';
import ReactDOM from 'react-dom';
import '../App.css';


var App = React.createClass({
	render: function(){
		return(
			<div>
				<div className='logo-div'>
					<img className='logo' src={require('../images/nycbnb_logo.png')} />
				</div>
				{this.props.children}
			</div>
		)
	}
})

export default App;