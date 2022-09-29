import React from 'react';
import moment from 'moment';

const Infos = (props) => {
  const { firstName, lastName, gender, birthDate, height } = props.profile;
  const date = moment(birthDate);
  const age = -date.diff(moment(), 'years');
  const userGender = (gender === 'male') ? 'Male' : 'Female';
  const tab = [
    { name: 'First name', value: firstName },
    { name: 'Last name', value: lastName },
    { name: 'Age', value: `${age} old` },
    { name: 'Gender', value: userGender },
    { name: 'Height', value: height },
  ];
  const show = tab.map(data => (
    <div key={data.name}>
      <span className="infos-oneprofile"><b>{data.name}</b></span>
      <span>{data.value}</span>
    </div>
  ));

  return (
    <div className="each-box">
      <h2>General information</h2>
      {show}
    </div>
  );
};

export default Infos;
