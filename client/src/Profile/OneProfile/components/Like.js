import React, { Component } from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import TooltipSpan from './TooltipSpan.js';

class Like extends Component {

  handleAddition = () => {
    this.props.onAddition();
  }

  handleDelete = () => {
    this.props.onDelete();
  }

  render() {
    const { isLiked, canLike, isBlocked, isReported } = this.props;
    const tooltipCannotLike = (
      <Tooltip id="cannot-like">You can not like a profile without a profile picture !</Tooltip>
    );
    const tooltipLike = (
      <Tooltip id="like">Like this profile to be able to talk to him. He also like you !</Tooltip>
    );

    if (isBlocked || isReported) {
      return <span className="fa fa-star cannot-like" />;
    }
    if (!canLike) {
      return <TooltipSpan className="fa fa-star cannot-like" tooltip={tooltipCannotLike} />;
    }
    if (isLiked) {
      return <button className="fa fa-star liked" onClick={this.handleDelete} />;
    }
    return (
      <OverlayTrigger placement="bottom" overlay={tooltipLike}>
        <span>
          <button
            className="fa fa-star-o"
            onClick={this.handleAddition}
          />
        </span>
      </OverlayTrigger>
    );
  }
}

export default Like;
