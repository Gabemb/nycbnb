import userReducer from "./userReducer"
// import bookingReducer from "./bookingReducer"
import {combineReducers} from "redux"

console.log(userReducer)

const reducers = combineReducers({
	user: userReducer,
	// booking: bookingReducer
})

export default reducers;