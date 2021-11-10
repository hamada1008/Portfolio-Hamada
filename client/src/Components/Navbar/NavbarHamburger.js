import React, { useState } from "react";
import NavbarLinks from "./NavbarLinks";
import "../../Style/navbarHamburger.scss";

const NavbarHamburger = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState();
  const toggleLinkVisibility = () => {
    setHamburgerOpen((prevState) => !prevState);
  };
  return (
    <div className="hamburger">
      <div
        onClick={toggleLinkVisibility}
        className={
          hamburgerOpen ? "hamburger-icon is-active" : "hamburger-icon"
        }
      >
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </div>

      {hamburgerOpen && (
        <div className="hamburger-links">
          <NavbarLinks setHamburgerOpen={setHamburgerOpen} />
        </div>
      )}
    </div>
  );
};

export default NavbarHamburger;
