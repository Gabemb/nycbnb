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
		return {listing: null, checkIn: "", checkOut: "", guests: 0, alreadyBooked: null, loggedIn: false}
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
				this.setState({loggedIn: true})
			})
			.catch( (err) => {
				console.log("Error authorizing user", err);
			})
	},

	setDate(event){
		let date = event.target.value;
		let action = event.target.name;
		//Loop that (using moment.js's built in isBetween() function) checks 
		//whether the selected dates have been booked already by another user.
		let bookedDates =[];
		this.state.listing.Bookings.forEach( (booking) => {
			let checkIn = moment(booking.checkIn).format("YYYY-MM-DD");
			let checkOut = moment(booking.checkOut).format("YYYY-MM-DD");

			if (moment(date).isBetween( checkIn, checkOut )) {
				 bookedDates.push(booking.checkIn + " and " + booking.checkOut);
			}
		});

		if (bookedDates.length > 0) {
			this.setState({ alreadyBooked: bookedDates });
		} else {
			this.setState({ [action]: date });
		};

	},

	setGuests(event){
		let guests = event.target.value;
		this.setState({guests: guests});
	},

	book(event){
		//Booking the user's stay
		if(!this.state.loggedIn) {
			alert("You need an account to book a stay. Please, log in or sign up!");
			this.state.props.router.push('/login');
		}
		event.preventDefault();
		axios.post('/api/booking', {
			checkIn: this.state.checkIn,
			checkOut: this.state.checkOut,
			guests: this.state.guests,
			ListingId: this.state.listing.id
		})
		.then( (res) => {
			this.props.router.push('/');
		})
		.catch( (err) => {
			console.log(err);
		});
	},

	render(){
		//If statement that's just waiting for our initial GET request to return something
		//renders an empty div if our state never gets populated.
		if (this.state.listing) {
			let listing = this.state.listing
			//I am importing an array of adjectives and nouns and then randomly choosing one each time the page loads
			//Primarily for humor. Not something we would actually want in a final product.
			//Would eventually allow users to choose their own descriptors while they're initially creating their listings.
			let randAdj = adj.adjective[Math.round(Math.random() * (adj.adjective.length - 1))];
			let randNoun = noun.noun[Math.round(Math.random() * (noun.noun.length - 1))];
			console.log(adj.adjective, noun.noun)

			
			return (
				<div>
					<img src={listing.images[0]}></img>

					<h4>${listing.price}</h4> <h4>Per Night</h4>

					<form onSubmit={this.book}>
						<p>Check In:</p>      <p>Check Out:</p>
					
						<input onChange={this.setDate} name="checkIn" type="date" /> <input onChange={this.setDate} name="checkOut" type="date" />
						
						{
							//Error message that appears if the user tries to book a stay during dates that gave already been taken.
							this.state.alreadyBooked ? <h2 id="error">Woops, looks like the dates between {this.state.alreadyBooked[0]} have already been booked!</h2> : null

						}

						<br />

						<p>Guests:</p>
						<input onChange={this.setGuests} type="number" min="1" max={listing.guestLimit.toString()}></input>
						<input type="submit" value="Book"></input>
					</form>

						

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

export default Listing;