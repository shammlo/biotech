import nodemailer from "nodemailer";
import sendgridTransport from "nodemailer-sendgrid-transport";

const sendEmail = async (email, subject, html) => {
  try {
    let transporter = nodemailer.createTransport(
      sendgridTransport({
        auth: {
          api_key: process.env.SENDGRID_API_KEY,
        },
      })
    );

    let mailOptions = {
      to: email,
      from: "no-reply@onlineguard.krd",
      subject: subject,
      html: html,
    };
    await transporter.sendMail(mailOptions);

    console.log("email sent sucessfully");
  } catch (error) {
    console.log(error, "email not sent");
  }
};

export default sendEmail;

//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
