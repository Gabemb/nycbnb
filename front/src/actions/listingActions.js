import $ from 'jquery';

// api/listing
export const GET_LISTINGS = 'GET_LISTINGS';
export const POST_LISTING = 'POST_LISTING';

// api/listing/:id
export const DELETE_LISTING = 'DELETE_LISTING';
export const GET_ONELISTING = 'GET_ONELISTING';
export const UPDATE_LISTING = 'UPDATE_LISTING';

// api/listing/where/:borough
export const GET_LISTINGSBORO = 'GET_LISTINGSBORO';


// BASIC ACTIONS

export const get_listings = (listings) => ({
	type: GET_LISTINGS,
	data: listings
})

export const post_listing = (listing) => ({
	type: POST_LISTING,
	data: listing
})

export const get_onelisting = (listing) => ({
	type: GET_ONELISTING,
	data: listing
})

export const delete_listing = (listing) => ({
	type: DELETE_LISTING
})

export const update_listing = (listing) => ({
	type: UPDATE_LISTING,
	data: listing
})

export const get_listingsboro = (listings) => ({
	type: GET_LISTINGSBORO,
	data: listings
})


// ASYNC

export getListingsAsync = () => (dispatch) => {
	$.ajax({
		url: '/api/listing',
		type: 'GET'
	})
	.done((data)=> {
		dispatch(get_listings({listings: data}))
	})
}

export postListingAsync = () => (dispatch) => {
	$.ajax({
		url: '/api/listing',
		type: 'POST'
	})
	.done((data)=> {
		dispatch(post_listing({listing: data}))
	})
}

export getOneListingAsync = () => (dispatch) => {
	$.ajax({
		url: '/api/listing' + {req.params.id},
		type: 'GET'
	})
	.done((data)=> {
		dispatch(get_onelisting({listing: data}))
	})
}

export deleteListingAsync = () => (dispatch) => {
	$.ajax({
		url: '/api/listing/' + {req.params.id},
		type: 'DELETE'
	})
	.done((data)=> {
		dispatch(delete_listing({listing: null}))
	})
	.catch((err)=> console.log(err))
}

export updateListingAsync = () => (dispatch) => {
	$.ajax({
		url: '/api/listing/' + {req.params.id},
		type: 'PUT'
	})
	.done((data) => {
		dispatch(update_listing({listing: data}))
	})
}

export getListingsBoroAsync = () => (dispatch) => {
	$.ajax({
		url: '/api/listing/where/' + {req.params.borough},
		type: 'GET'
	})
	.done((data) => {
		dispatch(get_listingsboro({listings: data}))
	})
}
