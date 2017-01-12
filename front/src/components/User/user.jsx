import React from 'react';
import $ from 'jquery';
import {browserHistory} from 'react-router';
// import './App.css';


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

	 onSubmit(e) {
    if(this.state.firstName === '' || this.state.email === '' || this.state.password === '' || this.state.lastName === '') {
        this.setState({
          errorMessage: 'Please fill out all required fields.'
        });
      } else {
        if(this.state.error > -1 ) {
          console.log(this.state.error);
          this.setState({
            errorMessage: 'Please fixed all the errors in fields'
          });
        }  else {
          this.setState({ 
            errorMessage: 'You Successfully created an account!'
          });
        }
      }
   },

render: function () {
  const { handleSubmit, pristine, reset, submitting } = this.props
  return (
    <form onSubmit={this.acctSignUp}>
      <div >

   
<div className="container">
        
         {this.state.errorMessage}
          <div>
                <h2>SIGN UP</h2>
          <input name="firstName"  type="text" placeholder="First Name"
           onChange={this.handleChange.bind(this, "firstName")}   />


          <input name="lastName"  type="text" placeholder="Last Name"
           onChange={this.handleChange.bind(this, "lastName")} />

          <input name="email"  type="email" placeholder="Email"
           onChange={this.handleChange.bind(this, "email")}   />

          <input name="email"  type="email" placeholder="password"
           onChange={this.handleChange.bind(this, "password")}  />
        <div>
        <button className="button"type="submit">Join Now</button>
        </div>
           
        </div>
      </div>

        
        </div>


    </form>
  )
}

})

 export default SignUpForm;

      // </div>
      // </div>
      // </div>

      // <div>
      //   <label>Last Name</label>


      // <div>
      //   <label>Email</label>

      //   <label>Password</label>
      //   <div>
