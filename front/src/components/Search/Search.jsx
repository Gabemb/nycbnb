import React from 'react';
import axios from 'axios';

const Search = React.createClass({
	getInitialState(){
		return {}
	},
	render(){
		let boros = ["Queens", "Brooklyn", "Bronx", "Staten Island", "Manhattan"]
		return (
			<div>
				<p>Where</p>
				<select>
					{boros.map( boro => <option value={boro}>{boro}</option>)}
				</select>

				<p>When</p>
					<input type="date"></input> <input type="date"></input>
			</div>
		)
	}
})

export default Search;