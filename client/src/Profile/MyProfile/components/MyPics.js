import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import { NotificationManager } from 'react-notifications';

import ShowPic from './ShowPic.js';

class MyPics extends Component {

  handleDrop = (files) => {
    const { picNames } = this.props;
    const nbPics = picNames === undefined ? 0 : picNames.length;
    if (nbPics === 4) {
      NotificationManager.error('You cannot have more than 4 photos !', 'Oh...', 2000);
    } else {
      const data = new FormData();
      for (let i = 0; i < files.length && i < (4 - nbPics); i += 1) {
        data.append('pics', files[i]);
      }
      this.props.onDrop(data);
    }
  }

  handleClick = (filename) => {
    this.props.onRemove(filename);
  }

  render() {
    const { picNames } = this.props;

    return (
      <div>
        <h3>My more photos (maximum 4)</h3>
        <div className="pic">
          <ShowPic
            multipleSrc={picNames}
            onRemove={this.handleClick}
            removeButtonOn
          />
          <Dropzone
            accept="image/jpeg, image/png"
            onDrop={this.handleDrop}
            className="dropzone"
          >
            <span className="fa fa-camera-retro fa-3x" />
          </Dropzone>
        </div>
      </div>
    );
  }
}

export default MyPics;
