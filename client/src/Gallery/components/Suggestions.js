import React, { Component } from 'react';

import ProfileBoxSuggest from './ProfileBoxSuggest.js';

// eslint-disable-next-line react/prefer-stateless-function
class Suggestions extends Component {

  render() {
    const { gallery, galleryFilter, filter } = this.props;
    const galleryToDisplay = (filter === false) ? gallery : galleryFilter;
    let display;
    if (galleryToDisplay.length === 0) {
      display = (
        <div className="search-no-profile">
          Oops ... No profile matches your criteria.
        </div>
      );
    } else {
      display = galleryToDisplay.map((profile) => {
        const { _id } = profile;
        return (
          <div className="profile-box" key={_id}>
            <ProfileBoxSuggest profile={profile} />
          </div>
        );
      });
    }

    return (
      <div className="all-likes">
        {display}
      </div>
    );
  }
}

export default Suggestions;
