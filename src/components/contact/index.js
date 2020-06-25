import React from "react";
import "./style.scss";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("subbmited");
  };

  return (
    <section className="contact">
      <div className="left">
        <h1>Contact Me</h1>
        <p>
          I am interested in freelance opportunities – especially ambitious or
          large projects. However, if you have other request or question, don’t
          hesitate to contact me using below form either.
        </p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="name">
            Name
            <input type="text" autoComplete="off" id="name" name="name" />
          </label>
          <label htmlFor="name">
            Email
            <input type="email" autoComplete="off" id="email" />
          </label>
          <label htmlFor="subject">
            Subject
            <input autoComplete="off" type="text" id="subject" name="subject" />
          </label>
          <label htmlFor="name">
            Message
            <textarea
              autoComplete="off"
              name="message"
              id="message"
              cols="25"
              rows="8"
            ></textarea>
          </label>
          <button type="submit" value="SEND">
            SEND
          </button>
        </form>
      </div>

      <header className="contact-info">
        <h1>Haouch El Makhfi</h1>
        <h2>35045, Ouled Hedadj, Boumerdes</h2>
        <a href="tel:+21367-626-1157">+213 06-76-26-11-57</a>
        <a href="mailto:sohaib.code@gmail.com">sohaib.code@gmail.com</a>
      </header>

      <div className="right">
      
      </div>
    </section>
  );
};

export default Contact;
