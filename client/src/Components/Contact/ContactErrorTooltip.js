import React from "react";
import "../../Style/tooltipBubble.scss";

const ContactErrorTooltip = ({ content }) => {
  return <div className="bubble bubble-animation">{content}</div>;
};

export default ContactErrorTooltip;
