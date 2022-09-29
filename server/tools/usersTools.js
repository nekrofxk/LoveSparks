/* eslint-disable no-console */
import jwt from 'jsonwebtoken';

const SESSION_SECRET = 'session';
const createToken = (user) => {
  console.log('create token func');
  const { login, _id } = user;

  const token = jwt.sign(
    { login, _id }, // payload
    SESSION_SECRET, // secret code used to verify authenticity of token
    { expiresIn: '7d' },
  );
  return token;
};
// process.env.SESSION_SECRET
const authLoggedUser = (req, res, next) => {
  const token = req.cookies.access_token;
  const decoded = jwt.verify(token, SESSION_SECRET);
  if (!decoded) {
    return res.send({
      success: false,
      error: 'Identification impossible.',
    });
  }
  return next();
};

const getLoggedUser = (req) => {
  const token = req.cookies.access_token;
  const decoded = jwt.verify(token, SESSION_SECRET);
  return decoded.login;
};

export { createToken, getLoggedUser, authLoggedUser };
