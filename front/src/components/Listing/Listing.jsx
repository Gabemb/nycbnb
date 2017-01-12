import React from "react";
import axios from "axios";

import adj from "./adj.js";
import noun from "./noun.js";

const Listing = React.createClass({
	getInitialState(){
		return {listing: null, checkIn: "", checkOut: "", noun:[]}
	},

	componentDidMount(){
		let id = this.props.params.listingId
		axios.get("/api/listing/" + id)
			.then( (res) => {
				console.log("RESPONSE ===>", res);
				this.setState({listing: res.data})
			})
			.catch( (err) => {
				console.log("Error fetching listing from DB: ", err);
			});
	},

	book(event){
		console.dir(event.target)
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
					<input onChange={this.book} name="checkIn" type="date" /> <input onChange={this.book} name="checkOut" type="date" />
						
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