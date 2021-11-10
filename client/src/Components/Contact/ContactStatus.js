import React from "react";
import ContactAnimation from "./ContactAnimation";

const ContactStatusIndicator = ({ contactStatus }) => {
  switch (contactStatus) {
    case "loading":
      return <ContactAnimation type="loading" />;
    case "fulfilled":
      return <ContactAnimation type="fulfilled" />;
    case "rejected":
      return <ContactAnimation type="rejected" />;
    case "idle":
      return <ContactAnimation type="idle" />;
    default:
      return <></>;
  }
};

export default ContactStatusIndicator;
