import React from "react";
import "./style.scss";
import ContactForm from "./ContactForm";

const Contact = (props) => {
  return (
    <section className="contact">
      <div className="left">
        <h1>Contact Me</h1>
        <p>
          I am interested in freelance opportunities especially large ambitious
          projects. However, if you have other request or question, don’t
          hesitate to contact me using the following form.
        </p>
        <ContactForm />
      </div>

      <header className="contact-info">
        <h1>Haouch El Makhfi</h1>
        <h2>35045, Ouled Hedadj, Boumerdes</h2>
        <a href="tel:+21367-626-1157">+213 06-76-26-11-57</a>
        <a href="mailto:sohaib.code@gmail.com">sohaib.code@gmail.com</a>
      </header>

      <div className="right"></div>
    </section>
  );
};

export default Contact;
