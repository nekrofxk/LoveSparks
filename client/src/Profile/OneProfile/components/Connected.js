import React from 'react';
import moment from 'moment';
import 'moment/min/locales';

const Connected = (props) => {
  const { connected, lastConnection } = props.profile;
  const date = moment(lastConnection).locale('en-en').format('LL');

  switch (connected) {
    case true:
      return <div className="connected"><span className="fa fa-circle" /> Online</div>;
    default:
      return <div className="connected">Last seen : <span>{ date }</span></div>;
  }
};

export default Connected;
