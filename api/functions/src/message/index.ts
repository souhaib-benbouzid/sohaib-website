import * as functions from "firebase-functions";
import * as nodemailer from "nodemailer";

let user: string = functions.config().gmail.user;
let pass: string = functions.config().gmail.password;

export const sendEmail = functions.firestore
  .document("messages/{messageId}")
  .onCreate(async (snapshot, _context) => {
    const contactMessage = snapshot.data();

    if (contactMessage) {
      //
      const { name, email, subject, message, createdAt } = contactMessage;

      let transport = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user,
          pass,
        },
      });

      // format mails message
      // user message
      let senderMessage = {
        from: user,
        to: email,
        subject: "Message Received",
        text: `Hello ${name},I received your message. I will get back to you as soon as possible.`,
      };
      //

      // admin notification

      let adminMessage = {
        from: user,
        to: ["sohaib.code@gmail.com", "sohaib.bb.97@gmail.com"],
        subject: "New Message Sent",
        text: `there is a new message sent. 
        At: ${createdAt}
        from: ${name}, email: ${email}
        about: ${subject}
        message: ${message}
        `,
      };

      // send mail to user
      transport.sendMail(senderMessage, (error, info) => {
        if (error) {
          console.error(error);
        } else {
          console.log("Email sent " + info.response);
        }
      });

      // send mail to admin
      transport.sendMail(adminMessage, (error, info) => {
        if (error) {
          console.error(error);
        } else {
          console.log("Email sent " + info.response);
        }
      });
    }
  });
