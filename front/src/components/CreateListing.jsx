import React from 'react';
import axios from 'axios';
import $ from 'jquery';

var CreateListing=React.createClass({
	getInitialState: function(){
		return {description: '', price: 0, guestLimit: 0, borough: '', availability: false, images: []}
	},
	postListing: function(event){
		event.preventDefault()
		console.log(this.state)
		$.ajax({
			url: '/api/listing',
			method: 'POST',
			data: this.state
		})
	},
	handleChange: function(input, event){
		console.log(input)
		if(input === "description"){
			this.setState({description: event.target.value})
		} else if (input==="price"){
			this.setState({price: event.target.value})
		} else if (input === "guestLimit"){
			this.setState({guestLimit: event.target.value})
		} else if (input === "borough"){
			this.setState({borough: event.target.value})
		} else if (input === "availability"){
			this.setState({availability: event.target.value})
		} else if (input === "images"){
			var images = this.state.images.slice()
			images.push(event.target.value)

			this.setState({images: images})
		}
	},
	render: function(){
		return (
			<center><div>
			<h2 className="heading">Become a host!</h2>

			<form onSubmit={this.postListing}>
				
				<h3>Describe your home:</h3>
				<input 
				className="input"
				type="textarea"
				placeholder="Please describe your home."
				onChange={this.handleChange.bind(this, "description")}
				/>
				<br /><br />

				<h3>What borough is your listing in?</h3>
				
				<select class="styled-select slate" onChange={this.handleChange.bind(this, "borough")}>
				    <option value="Bronx">Bronx</option>
				    <option value="Brooklyn">Brooklyn</option>
				    <option value="Manhattan">Manhattan</option>
				    <option value="Queens">Queens</option>
				    <option value="Staten Island">Staten Island</option>
  				</select>
  				

				<br /><br />

				<h3>Price Per Night:</h3>
				<input 
				className="input-price"
				type="text"
				placeholder="Price"
				onChange={this.handleChange.bind(this, "price")}
				/>
				<br /><br />

				<h3>What is the guest limit for your listing?</h3>
				<input 
				className="input"
				type="text"
				placeholder="Guest Limit"
				onChange={this.handleChange.bind(this, "guestLimit")}
				/>
				<br /><br />
				
				<h3>Is your listing available now? Check for 'yes':</h3>
				<input 
				className="input"
				type="checkbox"
				onChange={this.handleChange.bind(this, "availability")}
				/>
				<br /><br />
				
				<h3>Please upload images for your listing:</h3>
				<input 
				className="input"
				type="text"
				placeholder="Image URL"
				onChange={this.handleChange.bind(this, "images")}
				/>
				<br /><br />
				
				<button 
				className="button"
				type="submit"
				>Submit</button>
			</form>
			</div></center>
		)
	}
})

export default CreateListing;