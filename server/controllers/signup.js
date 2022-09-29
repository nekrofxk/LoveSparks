import ipInfo from 'ipinfo';
import moment from 'moment';
import randtoken from 'rand-token';

import mailer from './mail.js';
import * as Control from '../tools/usersControl.js';
import * as Getter from '../getters/getUsers.js';
import Mongo from '../config/MongoConnection.js';

const signup = async (req, res) => {
  // extraction of info from request and verification that no user already exists with that login
  const {
    login,
    email,
    password,
    passwordConfirm,
    firstName,
    lastName,
    nationalId,
    gender,
    birthDate,
  } = req.body;

  if (!login || !email || !password || !passwordConfirm || !firstName
    || !lastName || !gender || !nationalId || !birthDate) {
    return res.send({
      success: false,
      message: 'Please fill in all the blanks !',
    });
  }
  let unique = await Getter.getUser({ field: 'login', value: login });
  if (unique) {
    return res.send({
      success: false,
      message: 'This identifier is already used.',
    });
  }

  unique = await Getter.getUser({ field: 'nationalId', value: nationalId });
  if (unique) {
    return res.send({
      success: false,
      message: 'This national ID is already in the database.',
    });
  }

  unique = await Getter.getUser({ field: 'email', value: email });
  if (unique) {
    return res.send({
      success: false,
      message: 'An account already exists with this email.',
    });
  }

  // verification on the User input, return a message if not valid
  let verif = Control.verifLogin(req);
  if (verif !== '') {
    return res.send({ success: false, message: verif });
  }
  verif = Control.verifInfos(req);
  if (verif !== '') {
    return res.send({ success: false, message: verif });
  }
  verif = Control.verifPassword(req);
  if (verif !== '') {
    return res.send({ success: false, message: verif });
  }

  // create a user in the database and return a confirmation that an email has been sent
  const confirmationKey = randtoken.generate(16);

  // const confirmationKey = "sdsdsdsdjdsfjjkdshvndsjifhdjskncsdkbcjksnckksdfhs";

  const passwordHash = Control.generateHash(password);
  ipInfo((err, cLoc) => {
    let latitude;
    let longitude;
    if (err === null) {
      const loc = cLoc.loc.split(',');
      latitude = parseFloat(loc[0]);
      longitude = parseFloat(loc[1]);
    } else {
      latitude = 0;
      longitude = 0;
    }
    const date = moment(birthDate, 'DD/MM/YYYY', true).format();
    Mongo.db.collection('users').insertOne({
      login,
      email,
      password: passwordHash,
      firstName,
      lastName,
      nationalId,
      gender,
      birthDate: date,
      confirmationKey,
      bio: '',
      tags: [],
      geolocation: { latitude, longitude },
      profilePic: '',
      pictures: [],
      likes: [],
      likedBy: [],
      newLikedBy: [],
      matches: [],
      popularity: 0,
      blockes: [],
      blockedBy: [],
      visits: [],
      visitedBy: [],
      newVisitedBy: [],
      reportsAsFake: [],
      reportedAsFakeBy: [],
      unreadMessages: [],
      connected: false,
      auth: false,
      closed: false,
    });
  });
  mailer(email,
    `Welcome ${login}, follow this link to validate your account http://localhost:3000/auth/${confirmationKey}`,
    'LoveSparks - Confirm your account',
  );
  return res.send({
    success: true,
    message: 'An email has been sent to you to confirm your account !',
  });
};

export default signup;
