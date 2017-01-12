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
			console.log('DATA:', data)

			this.setState({places: data})
		})
	},
	render: function(){
		console.log("STATE =======>", this.state)
		return(
			<div>
				<h2>All Available Listings</h2>

				<ol>
					{this.state.places.length=== 0 ? "There are no available listings at this time." : this.state.places.map((place, idx)=> {
						return (

							<li key={idx}>
								<div>
							  		<img src={place.images[0]} />
							  		<p>{place.price}</p>
							  	</div>
							</li>
						)
					})}
				</ol>

			</div>
		)
	}
})

export default AllListings;