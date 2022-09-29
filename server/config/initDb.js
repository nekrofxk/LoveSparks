/* eslint-disable no-console */
import Mongo from '../config/MongoConnection.js';
import * as Control from '../tools/usersControl.js';

const createUser = ({
  login,
  firstName,
  lastName,
  nationalId,
  gender,
  // orientation,
  email,
  birthDate,
  bio,
  tags,
  geolocation,
  profilePic,
  pictures,
  likes,
  likedBy,
  visits,
  visitedBy,
  blockes,
  blockedBy,
  matches,
  }) => {
  const password = Control.generateHash('pass123');
  const popularity = likedBy.length;
  Mongo.db.collection('users').updateOne(
    { login },
    {
      $set:
      {
        email,
        password,
        firstName,
        lastName,
        nationalId,
        gender,
        // orientation,
        birthDate,
        bio,
        tags,
        geolocation,
        profilePic,
        pictures,
        likes,
        likedBy,
        matches,
        popularity,
        newLikedBy: [],
        blockes,
        blockedBy,
        visits,
        visitedBy,
        newVisitedBy: [],
        reportsAsFake: [],
        reportedAsFakeBy: [],
        unreadMessages: [],
        connected: false,
        auth: true,
        distance: 0,
        nbCommonTags: 0,
        lastConnection: '2017-08-01T16:38:20+02:00',
        closed: false,
      },
    },
    { upsert: true },
  );
};

const initDb = async (req, res) => {
  console.log('init_db');
  // await Mongo.db.collection('chats').drop(); // pour nettoyer base en dev
  Mongo.db.collection('chats').insert(
    {
      login1: 'fifi',
      login2: 'jojo',
      discussion: [
        { posted: '2017-07-21T14:53:59+02:00', author: 'fifi', text: 'Youhou ' },
        { posted: '2017-07-21T14:54:59+02:00', author: 'jojo', text: 'Je suis Jojo' },
      ],
    },
  );
  // await Mongo.db.collection('users').drop(); // pour nettoyer base en dev
  createUser({
    login: 'saman',
    firstName: 'Saman',
    lastName: 'Perera',
    gender: 'male',
    email: 'samanperera76@gmail.com',
    birthDate: '1998-11-11T00:00:00+06:00',
    bio: 'Hi im saman. i love to play guitar and music is hobby.',
    tags: [{ id: '1', text: '#music' }, { id: '2', text: '#nature' }, { id: '3', text: '#love' }, { id: '4', text: '#camping' }],
    geolocation: { latitude: 6.921068699999999, longitude: 79.9737763 },
    profilePic: 'profilePic1237653647343.jpg',
    pictures: [],
    likes: [],
    likedBy: [],
    matches: [],
    visits: [],
    visitedBy: [],
    blockes: [],
    blockedBy: [],
  });
  res.send({ success: true });
};

export default initDb;
