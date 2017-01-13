import React from 'react';
import $ from 'jquery';
///login only logs someone in

const Login = React.createClass({
	getInitialState(){
		return{
			email: '', password: ''
		}
	},

		submitLoginInfo() {
		$.ajax({
            type: "POST",
            url: '/login',
            data: this.state
            })

        .done( (data) => {
        	console.log(data)
        	this.props.router.push('/');
        })

	},

	updateEmail(event) {

		this.setState({email: event.target.value})
	},

	updatePassword(event) {

		this.setState({password: event.target.value})
	},


	render(){
		return(
			<center><div>	
			<h2> Log Into Your Account: </h2>
			<br />
			Email:
			<br />
				<input className="input" onChange={this.updateEmail} type="text" name="email" />
				<br />
			Password
			<br />
				<input className="input" onChange={this.updatePassword} type="text" name="password" />
				<br />
				<button className="button" onClick={this.submitLoginInfo}>Login</button>
			</div></center>
		)
	}
})

export default Login