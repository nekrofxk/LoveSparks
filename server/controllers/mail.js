/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
/* eslint-disable no-console */
import nodemailer from 'nodemailer';

const sendMail = async (to, text, subject) => {
  console.log(to);
	// const transporter = nodemailer.createTransport(process.env.SMTPS_URI);
	// let testAccount = await nodemailer.createTestAccount();
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'adm.atlslk@gmail.com', // generated ethereal user
      pass: 'pizzahut2!', // generated ethereal password
    },
  });
  const mailOptions = {
    from: 'adm.atlslk@gmail.com',
    to,
    subject,
    text,
  };
  transporter.sendMail(mailOptions, (err) => {
    console.log(err);
  });
};

export default sendMail;

