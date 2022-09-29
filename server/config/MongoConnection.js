import { MongoClient } from 'mongodb';

const URL = 'mongodb://localhost/node-mongo-registeration-login-api';
const MongoConnection = {
  connect() {
    return new Promise((resolve, reject) => {
      // process.env.MONGODB_URI
      MongoClient.connect(URL, (err, db) => {
        if (err) {
          reject(err);
        }
        this.db = db;
        resolve();
        // eslint-disable-next-line no-console
        console.log('Connected to Mongo DB.');
      });
    });
  },
};

export default MongoConnection;
