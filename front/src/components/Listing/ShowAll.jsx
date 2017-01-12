import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import {Link} from 'react-router';

const AllListings = React.createClass({
	getInitialState(){
		return {places: []}
	},
	componentDidMount(){
		$.ajax({
			url: '/api/listing',
			type: "GET",
			success: function(data){
				console.log(data)
			}
		})
		.done( (data) => {
			this.setState({places: data})
		})
	},
	render: function(){
		return(
			<div>
				<h2>All Available Listings</h2>

				
					{this.state.places.length=== 0 ? "Loading..." : this.state.places.map((place, idx)=> {
						return (

								<div className="oneListing">
							  		<img key={idx} className="gridImg" src={place.images[0]} />
							  		<p className="price"><strong>${place.price}</strong>/per night</p>
							  	</div>
							
						)
					})}
				

			</div>
		)
	}
})

export default AllListings;