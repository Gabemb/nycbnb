//import action types

import * as actions from "../actions/userActions"

//defining statre

const initialState = { user:'null', err: 'null' }

//initial state is the previous state and action is the current thing that6 we're processing
const userReducer = function (state = initialState, action){
	switch (action.type){
		case actions.LOGIN:
			if(action.response.success){
				//return Object.assign({}, state, {user: action.response.user})
				return {...state, user: action.response.user}
			}else{
				return {...state, err: action.response.error}
			}
		default:
			return state
	}

	// setState({ err: 'oh no' })
	// return merge(state, { err: 'oh no' })
	// return { ...state, err: 'oh no' }
 //return state
}

export default userReducer;