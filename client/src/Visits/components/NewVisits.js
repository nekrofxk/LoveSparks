import React from 'react';

import ProfileBox from '../../Likes/components/ProfileBox.js';

const NewVisits = (props) => {
  const { newVisitors } = props;
  let display;
  switch (newVisitors.length) {
    case 0:
      display = <div className="no-likes">You have no new visitors !</div>;
      break;
    default:
      display = newVisitors.map((profile) => {
        const { _id } = profile;
        const indivKey = `new_visits_${_id}`;
        return (
          <div className="profile-box" key={indivKey}>
            <ProfileBox profile={profile} />
          </div>
        );
      });
  }

  return (
    <div>
      <h2 className="title-likes">New visitors</h2>
      <div className="all-likes">
        {display}
      </div>
    </div>
  );
};

export default NewVisits;
