import React from 'react';
import axios from 'axios';

const Search = React.createClass({
	getInitialState(){
		return {where: "", checkIn: "", checkOut: "", guests: 0}
	},

	updateQueries(event){
		let query = event.target.name;
		this.setState({[query]: event.target});
	},

	search(){
		axios.get
	},

	render(){
		let boros = ["Queens", "Brooklyn", "Bronx", "Staten Island", "Manhattan"]
		return (
			<div id="search">
				<p>Where</p>
					<select id="search-select" name="where" onChange={this.updateQueries}>
						{boros.map( (boro, idx) => <option value={boro} key={idx}>{boro}</option>)}
					</select>

				<p>When</p>
					<input className="search-date" name="checkIn" type="date" onChange={this.updateQueries}></input> <input className="search-date" name="checkOut" type="date" onChange={this.updateQueries}></input>
				
				<p>Guests</p>					
					<input id="search-guests" name="guests" type="number" onChange={this.updateQueries}></input>

				<button id="search-btn" onClick={this.search}>Search</button>
			</div>
		)
	}
})

export default Search;