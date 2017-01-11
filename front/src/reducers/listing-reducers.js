import {GET_LISTINGS, POST_LISTING, DELETE_LISTING, GET_LISTINGSBORO, GET_ONELISTING, UPDATE_LISTING} from '../actions/listingActions';

const initialState={
	description: '',
	price: 0,
	borough: '',
	guestLimit: 0,
	availability: false,
	images: []
}

const listingReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'GET_LISTINGS':
		 	return Object.assign({}, state, action.data)

		case 'POST_LISTING':
			return Object.assign({}, state, action.data)

		case 'DELETE_LISTING':
			return Object.assign({}, state, action.data)

		case 'GET_ONELISTING':
			return Object.assign({}, state, action.data)

		case 'UPDATE_LISTING':
			return Object.assign({}, state, action.data)

		case 'GET_LISTINGSBORO':
			return Object.assign({}, state, action.data)

		default:
		  return state
	}
}

export default listingReducer;