import React from 'react';
import { Link } from 'react-router-dom';

const UnavailablePage = () => (
  <div className="close-container">This page is not available.</div>
);

const ClosedAccount = () => (
  <div className="close-container">
    <Link to="/"><span className="fa fa-arrow-left" /></Link>
    <div>Thank you for participating in LoveSpark. Your account has been deleted.
    </div>
  </div>
);

const InvalidToken = () => (
  <div className="close-container">
    <Link to="/"><span className="fa fa-arrow-left" /></Link>
    <div>
      This link is not valid, or your account has already been confirmed.
    </div>
  </div>
);

export { UnavailablePage, ClosedAccount, InvalidToken };
