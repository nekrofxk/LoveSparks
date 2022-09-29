/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

import ShowTinyProfilePic from './ShowTinyProfilePic.js';

class ChatBox extends Component {
  render() {
    const { login, profilePic, connected } = this.props.profile;
    let isConnected;
    switch (connected) {
      case true:
        isConnected = (
          <div className="chat-box-connected">
            <span className="fa fa-circle" /> Online
          </div>
        );
        break;
      default:
        isConnected = (
          <div className="chat-box-connected">
            <span className="fa fa-circle-thin" /> Offline
          </div>
        );
    }

    return (
      <div className="chat-box-header">
        <ShowTinyProfilePic src={profilePic} className="chat-profile-pic" />
        <div>
          <h2 className="fa fa-commenting-o">
            <b>{login}</b>
          </h2>
          {isConnected}
        </div>
      </div>
    );
  }
}

export default ChatBox;
