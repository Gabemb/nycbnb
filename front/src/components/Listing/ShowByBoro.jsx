import React 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import {Link} from 'react-router';

const ShowByBoro = React.createClass({
	getInitialState(){
		return {places: []}
	},
	componentDidMount(){
		$.ajax({
			url: '/api/listing/where' + req.params.borough,
			type: 'GET',
			success: function(data){
				console.log(data)
			}
		})
		.done((data)=> {
			this.setState({places: data})
		})
	},
	render: function(){
		return(
			<div></div>
		
	}
})

export default ShowByBoro;