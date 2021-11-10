import React, { useRef } from "react";
import "../../Style/loader.scss";
const Loader = () => {
  const hovered = useRef(false);
  const flipIt = (e) => {
    if (!hovered.current) {
      hovered.current = true;
      e.target.className = "loader-name flip-animation glow-animation-no-delay";
      setTimeout(() => {
        e.target.className = "loader-name glow-animation-no-delay";
      }, 2010);
      hovered.current = false;
    } else {
      return;
    }
  };
  return (
    <div className="loader loader-background-animation">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      {"HAMADA".split("").map((el) => (
        <span
          className="loader-name loader-name-animated glow-animation"
          key={Math.random()}
          onMouseEnter={flipIt}
        >
          {el}
        </span>
      ))}
    </div>
  );
};

export default Loader;
