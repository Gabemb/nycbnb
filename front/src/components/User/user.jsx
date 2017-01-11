import React from 'react'
import { Field, reduxForm } from 'redux-form'



const SignUpForm = React.createClass({
	getInitialState: function(){
		return {email: '', firstName: '', lastName: '', password: null}
	},

handleChange: function(input, event){
		if(input === "email"){
			this.setState({email: event.target.value})
		} else if (input === "password"){
			this.setState({password: event.target.value})
		} else if (input === "firstName"){
			this.setState({firstName: event.target.value})
		} else if (input === "lastName"){
			this.setState({lastName: event.target.value})
		}
	},
acctSignUp: function(event){
		event.preventDefault()
		$.ajax({
			method: 'POST',
			url: '/api/users',
			data: this.state
		})
		.done((data) => {
			console.log("Received User Data", data);
			browserHistory.push('/account')
		})
	},





render: function () {
  const { handleSubmit, pristine, reset, submitting } = this.props
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name</label>
        <div>
          <input name="firstName"  type="text" placeholder="First Name"/>
        </div>
      </div>

      <div>
        <label>Last Name</label>
        <div>
          <input name="lastName"  type="text" placeholder="Last Name"/>
        </div>
      </div>

      <div>
        <label>Email</label>
        <div>
          <input name="email"  type="email" placeholder="Email"/>
        </div>
      </div>
      <div>

        <label>Password</label>
        <div>
          <input name="email"  type="email" placeholder="password"/>
        </div>
      </div>

      <div>
        <button type="submit" disabled={pristine || submitting}>Join Now</button>
      </div>
    </form>
  )
}

})

 

 export default SignUpForm;

