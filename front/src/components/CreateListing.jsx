import React from 'react';
import axios from 'axios';
import $ from 'jquery';

var CreateListing=React.createClass({
	getInitialState: function(){
		return {description: '', price: 0, guestLimit: 0, borough: '', availability: false, images: []}
	},
	postListing: function(event){
		event.preventDefault()
		// axios.post('/api/listing', {
		// })
		$.ajax({
			url: '/api/listing',
			method: 'POST',
			data: this.state
		})
	},
	handleChange: function(input, event){
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
			this.setState({images: event.target.value})
		}
	},
	render: function(){
		return (
			<div>
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
				<select name="borough" onChange={this.handleChange.bind(this, "borough")}>
				    <option value="bronx">Bronx</option>
				    <option value="brooklyn">Brooklyn</option>
				    <option value="manhattan">Manhattan</option>
				    <option value="queens">Queens</option>
				    <option value="statenisland">Staten Island</option>
  				</select>
				<br /><br />

				<h3>Price Per Night:</h3>
				<input 
				className="input"
				type="text"
				placeholder="Price"
				onChange={this.handleChange.bind(this, "price")}
				/>
				<br /><br />

				<h3>What is the guest limit for your listing?</h3>
				<input 
				className="input"
				type="text"
				placeholder="Guest guestLimit"
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
				className="upload"
				type="file"
				name="pic"
				accept="image/*"
				onChange={this.handleChange.bind(this, "images")}
				/>
				<br /><br />
				
				<button 
				className="button"
				type="submit"
				>Submit</button>
			</form>
			</div>
		)
	}
})

export default CreateListing;