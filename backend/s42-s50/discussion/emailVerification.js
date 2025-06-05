require("dotenv").config();
const nodemailer = require("nodemailer");
const PORT = process.env.PORT;

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.server_email,
    pass: process.env.server_password,
  },
});

module.exports.sendVerificationEmail = (userEmail, verificationToken) => {
  const mailOptions = {
    from: process.env.server_email,
    to: userEmail,
    subject: "Email Verification",
    html: `<p>Click <a href="http://localhost:${PORT}/users/verify-email?token=${verificationToken}">here</a> to verify your email</p>`,
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
    } else {
      console.log("Email sent" + info.response);
    }
  });
};
