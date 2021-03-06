const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  auth: {
    user: 'username@gmail.com',
    pass: 'password'
  }
});

const send = async (text) => {
  await transporter.sendMail({
    from: '"Lester Lyu" <lesterlyu@gmail.com>', // sender address
    to: "lvds2000@gmail.com", // list of receivers
    subject: "你的Switch有货了", // Subject line
    html: text // html body
  });
};

module.exports = {
  send,
};

