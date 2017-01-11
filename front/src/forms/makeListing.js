import React, { Component, PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
// import Dropzone from 'react-dropzone';

class ListingForm extends Component {
  render() {
    const { handleSubmit, pristine, reset, submitting} = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="description">Description</label>
          <Field name="Description" component="input" type="textarea"/>
        </div>
      
        <div>
          <label htmlFor="borough">Borough</label>
          <Field name="borough" component="select">
            <option>Bronx</option>
            <option>Brooklyn</option>
            <option>Manhattan</option>
            <option>Queens</option>
            <option>Staten Island</option>
          </Field>
        </div>

        <div>
          <label htmlFor="price">Price</label>
          <Field name="price" component="input" type="text"/>
        </div>

        <div>
          <label htmlFor="guestLimit">Guest Limit</label>
          <Field name="guestLimit" component="input" type="text"/>
        </div>

        <div>
          <label htmlFor="availability">Available Now?</label>
          <Field name="availability" component="input" type="checkbox"/>
        </div>

        <button type="submit">Submit</button>
      </form>
    );
  }
}

// Decorate the form component
ListingForm = reduxForm({
  form: 'listing' // a unique name for this form
})(ListingForm);

export default ListingForm;