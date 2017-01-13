import React from "react";
import $ from "jquery";
import {Link} from "react-router";

var Account = React.createClass({
	getInitialState: function(){
		return {user: null, bookings: null, listing: null}
	},
	componentDidMount: function(){

		//this is for checking if they even have access tot his page yet
		$.ajax({
			url:"/auth",
			type: "GET",
		})
		.done( (res) => {
			$.ajax({
				url: "/api/users/userprofile",
				type: "GET"
			})
			.done( (user) => {
				console.log(user);
				this.setState({user: user, bookings: user.Bookings, listing: user.Listing});
			});
		})
		.catch( (err) => {
			console.log("it failed!", err);
			alert("You need to log in to view this page");
			this.props.router.push("/login");
		});
	},
	render: function(){
		console.log(this.state)
		return(
			<div>
				<h2 className="title">Your Account</h2>
				<br /> <br />
				<h3 className="boards">What now, {this.state.user ? this.state.user.firstName : null}</h3>

				<p className="about">Name: {this.state.user ? this.state.user.firstName : null} {this.state.user ? this.state.user.lastName : null}</p>

				<p className="about">Email: {this.state.user ? this.state.user.email : null}</p>

				<hr className="divider" />



				<center><ul className="list">
					{!this.state.bookings? null : this.state.bookings.map((booking, idx) => {
						return (
							<Link to={'/listing' + booking.Listing.id}><li key={idx}>Staying at a place in {booking.Listing.borough} from {booking.checkIn} to {booking.checkOut}</li></Link>
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