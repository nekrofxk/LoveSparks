import React, { Component } from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

class Report extends Component {

  handleClick = () => {
    this.props.onClick();
  }

  render() {
    const { isReported } = this.props;
    const tooltipToReport = (
      <Tooltip id="report-as-fake">False or inappropriate profile? Please note that you will not be able to
        cancel this action. You can just block a user you no longer want to see.</Tooltip>
    );
    const tooltipReported = (
      <Tooltip id="reported-as-fake">Thanks for your feedback. We will study this profile.</Tooltip>
    );

    switch (isReported) {
      case true:
        return (
          <OverlayTrigger placement="bottom" overlay={tooltipReported}>
            <button
              className="fa fa-exclamation-circle reported"
              disabled
            />
          </OverlayTrigger>
        );
      default:
        return (
          <OverlayTrigger placement="bottom" overlay={tooltipToReport}>
            <button
              className="fa fa-exclamation-circle not-reported"
              onClick={this.handleClick}
            />
          </OverlayTrigger>
        );
    }
  }
}

export default Report;
