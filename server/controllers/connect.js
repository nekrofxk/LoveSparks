/* eslint-disable no-console */
/* eslint-disable no-useless-escape */
import randtoken from 'rand-token';
import mailer from './mail.js';
import * as Control from '../tools/usersControl.js';
import * as Getter from '../getters/getUsers.js';
import * as Updater from '../updaters/updateUsers.js';
import * as User from '../tools/usersTools.js';

const forgot = async (req, res) => {
  const { email } = req.params;
  const user = await Getter.getUser({ field: 'email', value: email });
  if (!user) {
    return res.send({
      success: false,
      message: 'No user is registered with this email.',
    });
  }
  const { login } = user;
  const confirmationKey = randtoken.generate(16);
  Updater.addConfirmationKeyForgot({ login, confirmationKey });
  mailer(email,
    `Hi ${login}, follow this link to change your password http://localhost:3000/change/${confirmationKey}`,
    'LoveSparks - Forgot your username or password',
  );
  return res.send({
    success: true,
    message: 'An email has been sent to you reset your password.',
  });
};

const newPassword = async (req, res) => {
  const { password, passwordConfirm, confirmationKey } = req.body;
  const user = await Getter.getUser({ field: 'confirmationKey', value: confirmationKey });
  if (!user) {
    return res.send({
      success: false,
      message: 'This link does not correspond to any account or n\is no longer valid.',
    });
  }
  if (!password || !passwordConfirm) {
    return res.send({
      success: false,
      message: 'Please fill in all the blanks !',
    });
  }
  const message = Control.verifPassword(req);
  if (message !== '') {
    return res.send({ success: false, message });
  }
  const { login } = user;
  const passwordHash = Control.generateHash(password);
  Updater.changePasswordAndReset({ login, passwordHash });
  return res.send({ success: true, message: `Your password has been updated, ${login} !` });
};

const confirm = async (req, res) => {
  const { confirmationKey } = req.body;
  const user = await Getter.getUser({ field: 'confirmationKey', value: confirmationKey });
  console.log(user, 'on ha');
  if (!user) {
    return res.send({
      success: false,
      error: 'This link does not correspond to any account or n\is no longer valid.',
    });
  }
  const { login } = user;
  const token = User.createToken(user);
  console.log('token : ', token);
  Updater.confirmSignup({ login });
  return res.send({ success: true, login, token, error: '' });
};

const signin = async (req, res) => {
  const { login, password } = req.body;
  const user = await Getter.getUser({ field: 'login', value: login });

  if (!user === true) {
    return res.send({
      success: false,
      message: 'No user n\is registered with this identifier.',
    });
  }
  if (user.closed === true) {
    return res.send({
      success: false,
      message: 'This identifier n\is no longer valid.',
    });
  }
  if (user.confirmationKey && user.auth === false) {
    return res.send({
      success: false,
      message: 'Your account n\has not been confirmed. Please follow the link sent by email.',
    });
  }
  const isSamePass = Control.checkPasswordSignin(user.password, password);
  if (!isSamePass) {
    return res.send({
      success: false,
      message: 'Your password is incorrect.',
    });
  }
  const token = User.createToken(user);
  Updater.connectUser({ login });
  return res.send({ success: true, token, message: '' });
};

export { forgot, newPassword, confirm, signin };
