import React from 'react';
import axios from 'axios';

const Listing = React.createClass({
	getInitialState(){
		return {listing: {}, checkIn: "", checkOut: "" }
	},

	componentDidMount(){
		let id = this.props.params.listingId
		axios.get('/api/listing/' + id)
			.then( (res) => {
				console.log("RESPONSE ===>", res);
			})
			.catch( (err) => {
				console.log("Error fetching listing from DB: ", err);
			});
	},

	render(){
		console.log("PROPS ====>", this.props)
		return (
			<div>
				Hello from Listing.jsx!
				<h1>listing.user.name</h1>
			</div>
		)
	}
});

export default Listing;