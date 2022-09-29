import React, { Component } from 'react';
import TextInput from '../../HomePage/components/TextInput.js';
import SubmitForm from '../../HomePage/components/SubmitForm.js';

class InputNewPassword extends Component {

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit();
  }

  passChange = (name, value) => {
    this.props.onChange(name, value);
  }

  render() {
    return (
      <div className="forgot-container">
        <h2>New Password</h2>
        <form className="" onSubmit={this.handleSubmit}>
          <TextInput
            defaultValue=""
            name="password"
            type="password"
            placeholder="Password*"
            onChange={this.passChange}
            className="form-group size-form-signup"
          />
          <TextInput
            defaultValue=""
            name="passwordConfirm"
            type="password"
            placeholder="Password Confirmation*"
            onChange={this.passChange}
            className="form-group size-form-signup"
          />
          <SubmitForm
            value="Reset"
            className="btn btn-default submit-signup"
          />
        </form>
      </div>
    );
  }
}

export default InputNewPassword;
