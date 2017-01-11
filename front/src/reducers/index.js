import userReducer from "./userReducer";
import listingReducer from './listingReducer';
import {reducer as formReducer} from 'redux-form'
// import bookingReducer from "./bookingReducer"
import {combineReducers} from "redux"

console.log(userReducer)

const reducers = combineReducers({
	user: userReducer,
	listing: listingReducer,
	form: formReducer
})

export default reducers;