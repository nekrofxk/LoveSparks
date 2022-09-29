import React, { Component } from 'react';
import Dropzone from 'react-dropzone';

import ShowProfilePic from './ShowProfilePic.js';

class MyProfilePic extends Component {

  handleDrop = (files) => {
    const file = files[0];
    const data = new FormData();
    data.append('profilePic', file);
    this.props.onDrop(data);
  }

  render() {
    const { profilePicName } = this.props;

    return (
      <div>
        <h3>My profile picture (required!)</h3>
        <div className="my-profile-pic">
          <Dropzone
            multiple={false}
            accept="image/jpeg, image/png"
            onDrop={this.handleDrop}
            className="dropzone"
          >
            <span className="fa fa-camera-retro fa-3x" />
          </Dropzone>
          <ShowProfilePic src={profilePicName} />
        </div>
      </div>
    );
  }
}

export default MyProfilePic;
