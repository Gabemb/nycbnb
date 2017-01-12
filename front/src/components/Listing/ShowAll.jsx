import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import {Link} from 'react-router';

const ShowAll = React.createClass({
	getInitialState(){
		return {images: [], price: 0}
	},
	componentDidMount(){
		$.ajax({
			url: '/api/listing/',
			type: "GET",
			success: function(data){
				console.log(data)
			}
		})
		.done( (data) => {
			console.log(data)
			this.setState({images:data.images[0], price: data.price})
		})
	},
	render: function(){
		return(
			<div>
				<h2>All Available Listings</h2>

				<ol>
					{this.state.listings.length=== 0 ? "There are no available listings at this time." : this.state.images.map((val)=> {
						return (
							<li key={val.id}>
							<Link to={'/listing/' + val.id}>{val.images}{val.price}</Link>
							</li>
						)
					})}
				</ol>

			</div>
		)
	}
})

export default ShowAll;