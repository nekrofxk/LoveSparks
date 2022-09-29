/* eslint-disable linebreak-style */
import React, { Component } from 'react';

class TextInputHeight extends Component {

  handleChange = (event) => {
    event.preventDefault();
    const name = event.target.name;
    const value = event.target.value.trim();
    this.props.onChange(name, value);
  }

  render() {
    const { currentValue, name, type, text } = this.props;

    return (
      <div className="form-inline form-myprofile-height">
        <label htmlFor={name} className="input-label">{text}</label>
        <input
          className="form-control"
          defaultValue={currentValue}
          name={name}
          type={type}
          onChange={this.handleChange}
        />
        <small>Ex: 5&apos;2&apos;&apos;</small><br />
      </div>
    );
  }
}

export default TextInputHeight;
