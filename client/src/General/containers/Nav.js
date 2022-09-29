/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Tooltip } from 'react-bootstrap';

import Logout from '../components/Logout.js';
import Search from './Search.js';
import TooltipLink from '../components/TooltipLink.js';
import GetNavProfile from '../components/GetNavProfile.js';
import '../css/nav.css';

class Nav extends Component {

  render() {
    const { nbVisits, nbLikes, nbMessages } = this.props;
    const tooltipGallery = <Tooltip id="nav-gallery">Suggestions</Tooltip>;
    const tooltipLike = <Tooltip id="nav-like">Likes</Tooltip>;
    const tooltipVisit = <Tooltip id="nav-visit">Visitors</Tooltip>;
    const tooltipChat = <Tooltip id="nav-chat">Messages</Tooltip>;

    return (
      <nav className="navbar">
        <div className="container-fluid">
          <div className="navbar-header">
            <div className="navbar-brand">Love Sparks</div>
          </div>
          <ul className="nav navbar-nav" style={{ display: 'contents' }}>
            <li className="nav-link"><GetNavProfile /></li>
            <li className="nav-link">
              <TooltipLink to="/gallery" className="fa fa-users fa-2x" tooltip={tooltipGallery} />
            </li>
            <li className="nav-link" data-count={nbLikes}>
              <TooltipLink to="/likes" className="fa fa-star fa-2x" tooltip={tooltipLike} />
            </li>
            <li className="nav-link" data-count={nbVisits}>
              <TooltipLink to="/visites" className="fa fa-user fa-2x" tooltip={tooltipVisit} />
            </li>
            <li className="nav-link" data-count={nbMessages}>
              <TooltipLink to="/messages" className="fa fa-comments fa-2x" tooltip={tooltipChat} />
            </li>
            <li className="nav-link"><Logout /></li>
          </ul>
          <Search history={this.props.history} />
        </div>
      </nav>
    );
  }
}

export default Nav;
