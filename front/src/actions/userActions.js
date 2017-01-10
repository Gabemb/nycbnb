//using axios instead of jquerry
import axios from 'axios';



//defining label for action types
export const LOGIN = 'LOGIN'

//our actions go here

//action creators return an obj or func

// response = {
// 	success: false,
// 	error: 'error message',
// 	user: null
// }

export const login = function(username, password){

	return (dispatch)=> {
		axios.post('/login', {user: username, pass: password})
		.then((response)=> {
			dispatch({type: LOGIN, response: response});
		})
	}

}

