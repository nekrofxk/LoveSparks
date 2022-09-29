import React from 'react';
import { Link } from 'react-router-dom';
import { Tooltip } from 'react-bootstrap';
import TooltipSpan from './TooltipSpan.js';

const Chat = (props) => {
  const { matches, login } = props.profile;
  const loggedUser = props.loggedUser.login;
  const linkTo = `/messages/${login}`;

  const tooltip = (
    <Tooltip id="cannot-chat">
      You can talk to this profile if you like each other !
    </Tooltip>
  );

  if (matches.includes(loggedUser) === true) {
    return <Link to={linkTo} className="fa fa-comments" />;
  }
  return <TooltipSpan className="fa fa-comments cannot-chat" tooltip={tooltip} />;
};

export default Chat;
