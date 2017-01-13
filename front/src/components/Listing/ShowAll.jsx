import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import {Link} from 'react-router';

const AllListings = React.createClass({
	getInitialState(){
		return {places: []}
	},
	componentDidMount(){
		if (this.props.params.borough) {
			$.ajax({
			url: '/api/listing/where/' + this.props.params.borough,
			type: "GET"
			})
			.done( (data) => {
				this.setState({places: data})
			})
		} else {
			$.ajax({
				url: '/api/listing',
				type: "GET"
			})
			.done( (data) => {
				this.setState({places: data})
			})
		}
	},
	render: function(){
				console.log("PARAMS", this.props)
				console.log(this.props.params.borough ? "it exists" : "it doesnt exist")

		return(
			<div>
				<h2>All Available Listings</h2>

				
					{this.state.places.length=== 0 ? "Loading..." : this.state.places.map((place, idx)=> {
						return (

								<div className="oneList" key={idx}>
							  		<img  className="gridImg" src={place.images[0]} />
							  		<p className="price"><strong>${place.price}</strong>/per night</p>
							  	</div>
							
						)
					})}
				

			</div>
		)
	}
})

export default AllListings;