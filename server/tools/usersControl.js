/* eslint-disable max-len */
/* eslint-disable no-param-reassign */
/* eslint-disable no-console */
import bcrypt from 'bcrypt-nodejs';
import moment from 'moment';

const filterProfileData = (profile, loggedUser) => {
  const loginProfile = profile.login;
  delete profile.password;
  if (loginProfile !== loggedUser) {
    delete profile.email;
  }
  return profile;
};


const verifPassword = (req) => {
  const { password, passwordConfirm } = req.body;

  let message = '';
  if (!password.match(/^(?=.*[0-9])[a-zA-Z0-9]{6,24}$/)) {
    message = 'Your password must be 6 to 24 characters long, and contain at least one letter and one number.';
  } else if (password !== passwordConfirm) {
    message = 'Please type the same password you typed before.';
  }
  return message;
};

const verifChangePassword = (req) => {
  const { oldPassword, password, passwordConfirm } = req.body;

  let message = '';
  if (!oldPassword || !password || !passwordConfirm) {
    message = 'Please fill in all the blanks!';
  } else {
    message = verifPassword(req);
  }
  return message;
};

const verifLogin = (req) => {
  const { login } = req.body;

  let message = '';
  if (login.length < 3 || login.length > 10 || !login.match(/^[a-z0-9]+$/i)) {
    message = 'Your login must consist of 3 to 10 characters, and only numbers or letters.';
  }
  return message;
};

const verifInfos = (req) => {
  const { email, firstName, lastName, gender, /* orientation */ birthDate } = req.body;

  const date = moment(birthDate, 'DD/MM/YYYY', true);
  const age = -date.diff(moment(), 'years');
  let message = '';
  if (!firstName.match(/^[-a-z' ]+$/i) || !lastName.match(/^[-a-z' ]+$/i)) {
    message = 'Your first or last name does not match.';
  } else if (!email.match(/^[-a-z0-9~!$%^&*_=+}{'?]+(\.[-a-z0-9~!$%^&*_=+}{'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i)) {
    message = 'Your email is invalid.';
  } else if (!moment(date).isValid() || age > 140) {
    message = 'Your date of birth is not valid.';
  } else if (age < 18) {
    message = 'You must be over 18 to register on this site.';
  } else if (gender !== 'male' && gender !== 'female')
  /*
  ||  (orientation !== 'Bisexuel' && orientation !== 'Homosexuel' && orientation !== 'Hétérosexuel') */
  // eslint-disable-next-line brace-style
  {
    message = 'Please select your gender.';
  }
  return message;
};

const generateHash = (password) => {
  try {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
  } catch (err) {
    console.error('Error: ', err);
    return null;
  }
};

const checkPasswordSignin = (dbPassword, password) => {
  try {
    return bcrypt.compareSync(password, dbPassword);
  } catch (err) {
    console.error('Error: ', err);
    return null;
  }
};

export {
  filterProfileData,
  verifChangePassword,
  verifPassword,
  verifLogin,
  verifInfos,
  generateHash,
  checkPasswordSignin,
};
