import React, { useState, useReducer, useRef } from "react";
import axios from "axios";
import "../../Style/contact.scss";
import ScrollAnimation from "react-animate-on-scroll";
import ContactStatusIndicator from "../Contact/ContactStatus";
import SectionHeader from "../../Modules/SectionHeader";
import ContactSvg from "./ContactSvg";
import inputValidator from "../../Modules/contactInputValidator";
import ContactErrorTooltip from "./ContactErrorTooltip";

export const ACTION_TYPES = {
  nameChanged: "nameChanged",
  emailChanged: "emailChanged",
  subjectChanged: "subjectChanged",
  messageChanged: "messageChanged",
  errorInName: "errorInName",
  errorInEmail: "errorInEmail",
  errorInSubject: "errorInSubject",
  errorInMessage: "errorInMessage",
  resetInputs: "resetInputs",
};
const Contact = () => {
  const [email, setEmail] = useState("oussamahamada@yahoo.com");
  const [emailClassName, setEmailClassName] = useState("clipboard");
  const [contactStatus, setContactStatus] = useState("idle");
  const [sendingAnimationStatus, setSendingAnimationStatus] = useState(false);
  const [errorShown, setErrorShown] = useState(false);
  const carAnimation = useRef();
  const initialInputState = {
    name: "",
    email: "",
    subject: "",
    message: "",
    error: { name: "", email: "", subject: "", message: "" },
  };
  const [inputState, dispatch] = useReducer(
    inputHandlingReducer,
    initialInputState
  );
  const formFocused = () => {
    const yPosition = carAnimation.current?.getBoundingClientRect().top - 90;
    setTimeout(() => {
      carAnimation.current &&
        window.scrollTo(0, yPosition + document.body.scrollTop);
    }, 500);
    if (!sendingAnimationStatus) {
      setSendingAnimationStatus(true);
    } else {
      return;
    }
  };
  function inputHandlingReducer(state, action) {
    switch (action.type) {
      case ACTION_TYPES.nameChanged:
        return {
          ...state,
          error: initialInputState.error,
          name: action.payload,
        };
      case ACTION_TYPES.emailChanged:
        return {
          ...state,
          error: initialInputState.error,
          email: action.payload,
        };
      case ACTION_TYPES.subjectChanged:
        return {
          ...state,
          error: initialInputState.error,
          subject: action.payload,
        };
      case ACTION_TYPES.messageChanged:
        return {
          ...state,
          error: initialInputState.error,
          message: action.payload,
        };
      //error handling
      case ACTION_TYPES.errorInName:
        return {
          ...state,
          error: { ...initialInputState.error, name: action.payload },
        };
      case ACTION_TYPES.errorInEmail:
        return {
          ...state,
          error: { ...initialInputState.error, email: action.payload },
        };
      case ACTION_TYPES.errorInSubject:
        return {
          ...state,
          error: { ...initialInputState.error, subject: action.payload },
        };
      case ACTION_TYPES.errorInMessage:
        return {
          ...state,
          error: { ...initialInputState.error, message: action.payload },
        };
      case ACTION_TYPES.resetInputs:
        return initialInputState;
      default:
        return state;
    }
  }
  const listMouseOver = () => {
    setEmail("Copy to clipboard");
    setEmailClassName("clipboard clipboard-animated");
  };
  const listMouseOut = () => {
    setEmail("oussamahamada@yahoo.com");
    setEmailClassName("clipboard clipboard-animated");
    setTimeout(() => {
      setEmailClassName("clipboard");
    }, 1100);
  };
  const handleEmailCopy = async (e) => {
    navigator.clipboard
      .writeText("oussamahamada@yahoo.com")
      .then(() => null)
      .catch(() => null);
  };
  const sendEmail = (e) => {
    e.preventDefault();
    const url =
      process.env.NODE_ENV === "development"
        ? "http://localhost:5000/api/contact"
        : "https://ohmailer.herokuapp.com/api/contact";

    if (inputValidator(inputState, dispatch)) {
      setContactStatus("loading");
      axios
        .post(url, inputState)
        .then(() => setContactStatus("fulfilled"))
        .catch((err) => setContactStatus("rejected"));
      dispatch({ type: ACTION_TYPES.resetInputs });
    } else {
      setErrorShown(true);
    }
  };
  return (
    <ScrollAnimation
      animateIn="fadeInLeft"
      animateOnce={true}
      delay={1.5}
      offset={50}
    >
      <section id="contact">
        <h1 className="section-header">
          {"Contact".split("").map((el, index) => (
            <SectionHeader key={index} el={el} />
          ))}
        </h1>
        <div className="contact-container">
          <div className="contact-sections">
            <div className="contact-intro">
              <h2>
                Lets build something great
                <ContactSvg />
              </h2>
              <p className="about-para" id="about-para-1">
                Having a request or question? Wanting to know more about me? I’m
                looking forward to hear from you!
              </p>
              <p className="about-para" id="about-para-2">
                You can shoot me an email or directly call me on my phone
                number!
              </p>
            </div>
            <ul className="contact-info">
              <li>
                <i className="fas fa-phone-square"></i>
                <a href="tel:+216 58 691 125">+216 58 691 125</a>
              </li>
              <div
                onClick={handleEmailCopy}
                onMouseOver={listMouseOver}
                onMouseOut={listMouseOut}
              >
                <li className={emailClassName}>
                  <i className="fas fa-envelope"></i>
                  <span>{email}</span>
                </li>
              </div>
            </ul>
          </div>
          <div className="contact-sections">
            <h3>Or you can fill in your info in the form below</h3>
            <form onSubmit={sendEmail} onFocus={formFocused}>
              <div>
                <label>Name || Company: </label>
                <input
                  id="nameInput"
                  ref={carAnimation}
                  value={inputState.name}
                  type="text"
                  name="name"
                  placeholder="Name"
                  onChange={(e) =>
                    dispatch({
                      type: ACTION_TYPES.nameChanged,
                      payload: e.target.value,
                    })
                  }
                />
                {errorShown && inputState.error.name && (
                  <ContactErrorTooltip content={inputState.error.name} />
                )}
              </div>
              <div>
                <label>Email: </label>
                <input
                  value={inputState.email}
                  type="text"
                  name="email"
                  placeholder="Email"
                  onChange={(e) =>
                    dispatch({
                      type: ACTION_TYPES.emailChanged,
                      payload: e.target.value,
                    })
                  }
                />
                {errorShown && inputState.error.email && (
                  <ContactErrorTooltip content={inputState.error.email} />
                )}
              </div>
              <div>
                <label>Subject: </label>
                <input
                  value={inputState.subject}
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  onChange={(e) =>
                    dispatch({
                      type: ACTION_TYPES.subjectChanged,
                      payload: e.target.value,
                    })
                  }
                />
                {errorShown && inputState.error.subject && (
                  <ContactErrorTooltip content={inputState.error.subject} />
                )}
              </div>
              <div>
                <label>Message: </label>
                <textarea
                  value={inputState.message}
                  name="message"
                  placeholder="I would like to say something"
                  spellCheck="true"
                  wrap="soft"
                  onChange={(e) =>
                    dispatch({
                      type: ACTION_TYPES.messageChanged,
                      payload: e.target.value,
                    })
                  }
                ></textarea>
                {errorShown && inputState.error.message && (
                  <ContactErrorTooltip content={inputState.error.message} />
                )}
              </div>
              <div>
                <button>Send</button>
              </div>
            </form>
          </div>
        </div>
        <div className="sending-form-animation">
          {sendingAnimationStatus && (
            <ContactStatusIndicator contactStatus={contactStatus} />
          )}
        </div>
      </section>
    </ScrollAnimation>
  );
};

export default Contact;
