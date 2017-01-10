import React from 'react'
import { Field, reduxForm } from 'redux-form'

const SignUpForm = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name</label>
        <div>
          <Field name="firstName" component="input" type="text" placeholder="First Name"/>
        </div>
      </div>

      <div>
        <label>Last Name</label>
        <div>
          <Field name="lastName" component="input" type="text" placeholder="Last Name"/>
        </div>
      </div>

      <div>
        <label>Email</label>
        <div>
          <Field name="email" component="input" type="email" placeholder="Email"/>
        </div>
      </div>
      <div>

        <label>Password</label>
        <div>
          <Field name="email" component="input" type="email" placeholder="Email"/>
        </div>
      </div>

      <div>
        <button type="submit" disabled={pristine || submitting}>Join Now</button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'signUp'  
})(SignUpForm)