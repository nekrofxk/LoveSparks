import React, { Component } from 'react';

class MyGeolocate extends Component {

  handleClick = () => {
    this.props.onClick();
  }

  render() {
    return (
      <div className="each-box geolocate">
        <h2>Localisation</h2>
        <div className="geolocate-text">Re - geolocate yourself to see users around
          you currently.
        </div>
        <button className="btn btn-default" onClick={this.handleClick}>
          Where am i ?
        </button>
      </div>
    );
  }
}

export default MyGeolocate;
