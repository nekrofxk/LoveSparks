import Cookies from 'universal-cookie';
import jwtDecode from 'jwt-decode';
import React from 'react';
import { Redirect } from 'react-router-dom';
import { Tooltip } from 'react-bootstrap';
import TooltipLink from './TooltipLink.js';

const GetNavProfile = () => {
  const cookies = new Cookies();
  const token = cookies.get('access_token');
  try {
    const decoded = jwtDecode(token);
    const login = decoded.login;
    const profile = `/profile/${login}`;
    const tooltip = <Tooltip id="nav-my-profile">My profile</Tooltip>;
    return (
      <TooltipLink to={profile} className="fa fa-user fa-2x" tooltip={tooltip} />
    );
  } catch (err) {
    return <Redirect to="/" />;
  }
};

export default GetNavProfile;
