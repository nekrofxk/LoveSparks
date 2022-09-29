import React, { Component } from 'react';

import TextInput from './TextInput.js';
import RadioInput from './RadioInput.js';
import TextInputDate from './TextInputDate.js';
import SubmitForm from './SubmitForm.js';
import TextInputNationalId from './TextInputNationalId.js';

class SignUpForm extends Component {

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit();
  }

  passChange = (name, value) => {
    this.props.onChange(name, value);
  }

  passRadio = (name, value) => {
    this.props.onChange(name, value);
  }

  render() {
    return (
      <div className="signup">
        <form className="" onSubmit={this.handleSubmit}>
          <h2>Create a new account</h2>
          <TextInput
            defaultValue=""
            name="login"
            type="text"
            placeholder="Username*"
            onChange={this.passChange}
            className="form-group size-form-signup"
          />
          <TextInput
            defaultValue=""
            name="firstName"
            type="text"
            placeholder="First name*"
            onChange={this.passChange}
            className="form-group size-form-signup"
          />
          <TextInput
            defaultValue=""
            name="lastName"
            type="text"
            placeholder="Last name*"
            onChange={this.passChange}
            className="form-group size-form-signup"
          />
          <TextInputNationalId
            className="nationalid"
            defaultValue=""
            name="nationalId"
            type="value"
            placeholder="National ID*"
            onChange={this.passChange}
          />
          <br />
          <TextInput
            defaultValue=""
            name="email"
            type="email"
            placeholder="Email*"
            onChange={this.passChange}
            className="form-group size-form-signup"
          />
          <TextInputDate
            defaultValue=""
            name="birthDate"
            type="text"
            placeholder="Date of birth*"
            onChange={this.passChange}
          />
          <div className="form-inline size-radio-signup">
            <RadioInput
              label="male"
              name="gender"
              text="Male"
              onChange={this.passRadio}
            />
            <RadioInput
              label="female"
              name="gender"
              text="Female"
              onChange={this.passRadio}
            />
          </div>
          {/*
          <div className="form-inline size-radio-signup">
            <RadioInput
              label="Bisexuel"
              name="orientation"
              text="Bisexuel"
              onChange={this.passRadio}
            />
            <RadioInput
              label="Hétérosexuel"
              name="orientation"
              text="Hétérosexuel"
              onChange={this.passRadio}
            />
            <RadioInput
              label="Homosexuel"
              name="orientation"
              text="Homosexuel"
              onChange={this.passRadio}
            />
          </div>
           */}
          <TextInput
            defaultValue=""
            name="password"
            type="password"
            placeholder="New password*"
            onChange={this.passChange}
            className="form-group size-form-signup"
          />
          <TextInput
            defaultValue=""
            name="passwordConfirm"
            type="password"
            placeholder="Retype password*"
            onChange={this.passChange}
            className="form-group size-form-signup"
          />
          <SubmitForm
            value="Sign Up"
            className="btn btn-default submit-signup"
          />
        </form>
        <img className="" src="img/homeimg.jpg" alt="love quote" width="300" />
      </div>
    );
  }
}

export default SignUpForm;
