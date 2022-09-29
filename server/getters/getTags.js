/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */
import Mongo from '../config/MongoConnection.js';

const getTagsSuggestions = async () => {
  try {
    const suggestions = await Mongo.db.collection('suggestions').find().toArray();
    const tagsSuggestions = suggestions.map(tag => tag.text);
    return tagsSuggestions;
  } catch (err) {
    console.error('Error: ', err);
    return null;
  }
};

export { getTagsSuggestions };
