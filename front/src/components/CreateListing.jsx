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
				<input 
				className="input"
				type="textarea"
				placeholder="Please describe your home."
				onChange={this.handleChange.bind(this, "description")}
				/>
				
			  <datalist id="boroughs">
			    <option value="Bronx">
			    <option value="Brooklyn">
			    <option value="Manhattan">
			    <option value="Queens">
			    <option value="Staten Island">
			  </datalist>

				
				<input 
				className="input"
				type="textarea"
				placeholder="Please describe your home."
				onChange={this.handleChange.bind(this, "description")}
				/>
				
				<input 
				className="input"
				type="textarea"
				placeholder="Please describe your home."
				onChange={this.handleChange.bind(this, "description")}
				/>
				
				<input 
				className="input"
				type="textarea"
				placeholder="Please describe your home."
				onChange={this.handleChange.bind(this, "description")}
				/>
				
				<input 
				className="input"
				type="textarea"
				placeholder="Please describe your home."
				onChange={this.handleChange.bind(this, "description")}
				/>
				
				<input 
				className="input"
				type="textarea"
				placeholder="Please describe your home."
				onChange={this.handleChange.bind(this, "description")}
				/>
			</form>
			</div>
		)
	}
})