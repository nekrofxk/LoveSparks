import React, { Component } from 'react';

import TextInput from './TextInput.js';
import SubmitForm from './SubmitForm.js';

class ChangePassword extends Component {

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit();
  }

  passChange = (name, value) => {
    this.props.onChange(name, value);
  }

  render() {
    return (
      <div className="each-box password">
        <h2>Change your password</h2>
        <form onSubmit={this.handleSubmit}>
          <TextInput
            currentValue=""
            name="oldPassword"
            type="password"
            text="Type your old password"
            onChange={this.passChange}
          />
          <TextInput
            currentValue=""
            name="password"
            type="password"
            text="Type your new password"
            onChange={this.passChange}
          />
          <TextInput
            currentValue=""
            name="passwordConfirm"
            type="password"
            text="Confirm the new password"
            onChange={this.passChange}
          />
          <SubmitForm />
        </form>
      </div>
    );
  }

}

export default ChangePassword;
