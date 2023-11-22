import React, { useState } from "react";
import emailjs, { init } from "emailjs-com";
import "./index.css";

init("3NHfxP-1ElgHHPB2g");

const Email: React.FC = () => {
  const [recipientEmail, setRecipientEmail] = useState("");
  const [recipientName, setRecipientName] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = () => {
    const templateParams = {
      from_email: recipientEmail,
      from_name: recipientName,
      to_name: "Manuel Segarra",
      message: message,
    };

    emailjs
      .send("service_fvxdrcs", "template_awa2a0r", templateParams)
      .then((response) => {
        console.log("Email sent successfully:", response);
      })
      .catch((error) => {
        console.error("Failed to send email:", error);
      });
  };

  return (
    <>
      <h1 id="h1-email">
        <span className="span-email">&#60;</span>send me an email <span className="span-email">/&#62;</span>
      </h1>
      <div id="email-div">
        <div id="info-email">
          <div className="subject">
            <label>name_</label>
            <input
              type="text"
              value={recipientName}
              onChange={(e) => setRecipientName(e.target.value)}
            />
          </div>
          <div className="subject">
            <label>email_</label>
            <input
              type="email"
              value={recipientEmail}
              onChange={(e) => setRecipientEmail(e.target.value)}
            />
          </div>
          <p id="email-button" onClick={sendEmail}>/* send */</p>
        </div>
        <div id="message">
          <label>message_</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <br />
        </div>
      </div>
    </>
  );
};

export default Email;
