import React from 'react';
import $ from 'jquery';

var Account = React.createClass({
	getInitialState: function(){
		return {firstName: "", lastName: "", email: "", booking: null}
	},
	componentDidMount: function(){
		$.ajax({
			url: '/api/users/id',
			type: 'GET',
			data: this.state
		})
		.then((user) => {
			this.setState({firstName: user.firstName, lastName: user.lastName, email: user.email})

			$.ajax({
				url: '/api/user/:userId',
				type: 'GET',
				data: this.state
			})
			.then((booking) => {
				console.log(booking)
				this.setState({booking: booking})
			})
		})
	},
	render: function(){
		return(
			<div>
				<h2 className="title">Your Account</h2>
				<br /> <br />
				<h3 className="boards">What now, {this.state.firstName ? this.state.firstName : null}</h3>

				<p className="about">Name: {this.state.firstName} {this.state.lastName}</p>

				<p className="about">Email: {this.state.email}</p>

				<hr className="divider" />

				<h3 className="boards">Curent Booking</h3>

				<center><ul className="list">
					{!this.state.booking? null : this.state.booking.map((val, idx) => {
						let bookingTitle=val.title
						return (
							<li key={idx}>{bookingTitle}</li>
						)
					})}
				</ul></center>

				<br />
				<br />

				<center><button
				className="logout"
				type="submit"
				>Log Out</button></center>

			</div>
		)
	}
})

export default Account;