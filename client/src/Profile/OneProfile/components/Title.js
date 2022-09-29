import React from 'react';
import { Tooltip } from 'react-bootstrap';
import TooltipSpan from './TooltipSpan.js';

const Title = (props) => {
  const { likes, login } = props.profile;
  const loggedUser = props.loggedUser.login;
  const tooltipLike = (
    <Tooltip id="likesYou">This profile liked you! Like this profile for be able to talk to him.</Tooltip>
  );

  const tooltipNoLike = (
    <Tooltip id="likesYou">This profile does not like you yet.</Tooltip>
  );

  const likesYou = likes.includes(loggedUser);
  let star = '';
  if (likesYou === true) {
    star = <TooltipSpan className="fa fa-star" tooltip={tooltipLike} />;
  } else {
    star = <TooltipSpan className="fa fa-star-o" tooltip={tooltipNoLike} />;
  }

  return (
    <h2>{login}{star}</h2>
  );
};

export default Title;
