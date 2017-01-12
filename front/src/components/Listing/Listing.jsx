import React from "react";
import axios from "axios";

//For handling dates
import moment from "moment";

//Adjective and Noun arrays
import adj from "./adj.js";
import noun from "./noun.js";

const Listing = React.createClass({
	getInitialState(){
		//remember to change userId so it's not hard coded anymore
		return {listing: null, checkIn: "", checkOut: "", userId: 6, alreadyBooked: null}
	},

	componentDidMount(){
		let id = this.props.params.listingId
		axios.get("/api/listing/" + id)
			.then( (res) => {
				this.setState({listing: res.data});
			})
			.catch( (err) => {
				console.log("Error fetching listing from DB: ", err);
			});

		axios.get("/auth")
			.then( (res) => {
				console.log("AUTH RESPONSE ====>", res);
			})
			.catch( (err) => {
				console.log("Error authorizing user", err);
			})
	},

	setDate(event){
		let date = event.target.value;
		let action = event.target.name;
		let booked = false;
		//dont forget id of listing
		//and id of user making listing
		console.dir(event.target)
		console.log(event.target.name)
		//moment("2017-01-07").isBetween("2017-01-04", "2017-01-11")
		//Loop that (using moment.js's built in isBetween() function) checks 
		//whether the selected dates have been booked already by another user.
		let bookedDates = listing.Bookings.map( (booking) => {
			if (moment(date).isBetween( booking.checkIn, booking.checkOut )) {
				booked = true;
				return [booking.checkIn, booking.checkOut];
			}
			return
		})

		if (bookedDates.length > 0) {
			this.setState({ alreadyBooked: bookedDates });
		} else {
			this.setState({ [action]: date })
		}

	},

	render(){
		console.log("PROPS ================>", this.props)
		console.log("STATE ====>", this.state)
		if (this.state.listing) {
			let listing = this.state.listing
			let randAdj = adj.adjective[Math.round(Math.random() * ((adj.adjective.length - 1) - 0) + 0)];
			let randNoun = noun.noun[Math.round(Math.random() * ((noun.noun.length - 1) - 0) + 0)];
			console.log(adj.adjective, noun.noun)

			//let user = this.state.listing.User
			//let divStyle = {backgroundImage: "url(" +  listing.images[0] + ")"}
			
			return (
				<div>
					<img src={listing.images[0]}></img>

					<h4>{listing.price}</h4> <h4>Per Night</h4>

					<input onChange={this.setDate} name="checkIn" type="date" /> <input onChange={this.setDate} name="checkOut" type="date" />
						

					<h1> {listing.User.firstName}'s {randAdj} {randNoun} in {listing.borough}</h1>

					<img src="" alt="guest image goes here"></img>
						<h5>Guest Limit: {listing.guestLimit}</h5>

						<h3>About this listing:</h3>
							<p>{listing.description}</p>

				</div>
			)
		} else {
			return (
				<div>

				</div>
			)
		}
	}
});
					//<div style={divStyle}></div>

export default Listing;