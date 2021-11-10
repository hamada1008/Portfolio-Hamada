import React from "react";
import animateIt from "./animateIt";

const SectionHeader = ({ el }) => {
  return (
    <span
      key={Math.random()}
      aria-hidden="true"
      className="animated-band"
      onMouseOver={animateIt}
    >
      {el.trim() === "" ? String.fromCharCode(160) : el}
    </span>
  );
};

export default SectionHeader;
