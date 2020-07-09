import React, { useState } from "react";
import "./style.scss";
import { toast } from "react-toastify";

import axios from "axios";
const { validateField } = require("./validateForm");

const sendMessage = async ({ name, email, subject, message }) => {
  try {
    const headers = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "http://www.sohaibbenbouzid.com/contact",
    };

    let res = await axios.post(
      "https://us-central1-sohaibbenbouzid-com.cloudfunctions.net/api/contact",
      // "http://localhost:5000/sohaibbenbouzid-com/us-central1/api/contact",
      { name, email, subject, message },
      { headers: headers }
    );
    console.log(res.data);
  } catch (error) {
    console.error(error);

    toast.error("🦄 Ops!, Something Went Wrong.", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
};

const ContactForm = (props) => {
  const initialState = {
    name: "",
    email: "",
    subject: "",
    message: "",
    errors: { name: "", email: "", subject: "", message: "" },
  };

  const [state, setstate] = useState(initialState);

  const handleChange = (event) => {
    const target = event.target;
    const { name, value } = target;

    let errors = validateField(name, value);
    setstate({
      ...state,
      [name]: value,
      errors: { ...state.errors, ...errors },
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, subject, message } = state;
    const form = {
      name,
      email,
      subject,
      message,
    };

    await sendMessage(form);

    setstate(initialState);
    toast.success("🦄 Message Sent Successfully!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const classnames = {
    name: state.errors.name ? "form-error-field" : "",
    email: state.errors.email ? "form-error-field" : "",
    subject: state.errors.subject ? "form-error-field" : "",
    message: state.errors.message ? "form-error-field" : "",
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">
        Name
        <input
          type="text"
          autoComplete="off"
          id="name"
          name="name"
          value={state.name}
          onChange={handleChange}
          className={classnames.name}
          required
        />
      </label>
      {state.errors.name ? (
        <div className="form-error">{state.errors.name}</div>
      ) : (
        <div></div>
      )}
      <label htmlFor="name">
        Email
        <input
          name="email"
          type="email"
          autoComplete="off"
          id="email"
          value={state.email}
          onChange={handleChange}
          className={classnames.email}
          required
        />
        {state.errors.email ? (
          <div className="form-error">{state.errors.email}</div>
        ) : (
          <div></div>
        )}
      </label>
      <label htmlFor="subject">
        Subject
        <input
          autoComplete="off"
          type="text"
          id="subject"
          name="subject"
          value={state.subject}
          onChange={handleChange}
          className={classnames.subject}
          required
        />
        {state.errors.subject ? (
          <div className="form-error">{state.errors.subject}</div>
        ) : (
          <div></div>
        )}
      </label>
      <label htmlFor="name">
        Message
        <textarea
          autoComplete="off"
          name="message"
          id="message"
          cols="25"
          rows="8"
          value={state.message}
          onChange={handleChange}
          className={classnames.message}
          required
        ></textarea>
        {state.errors.message ? (
          <div className="form-error">{state.errors.message}</div>
        ) : (
          <div></div>
        )}
      </label>
      <button type="submit" value="SEND">
        SEND
      </button>
    </form>
  );
};

export default ContactForm;
