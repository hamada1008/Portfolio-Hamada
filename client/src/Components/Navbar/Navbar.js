import React, { useState, useRef, useEffect } from "react";
import NavbarLinks from "./NavbarLinks";
import NavbarHamburger from "./NavbarHamburger";
import "../../Style/navbar.scss";

const Navbar = () => {
  const myNameRef = useRef();
  const initialScreenWidth = window.innerWidth < 767;
  const [hamburgerState, setHamburgerState] = useState(initialScreenWidth);
  const screenDetector = () => {
    const screenWidth = window.innerWidth;
    const hamburgerVisibility = screenWidth < 767 ? true : false;
    setHamburgerState(hamburgerVisibility);
  };
  useEffect(() => {
    window.addEventListener("resize", screenDetector);
    return () => {
      window.removeEventListener("resize", screenDetector);
    };
  }, []);

  const nameHoverInHandler = () => {
    myNameRef.current.className = "name-animated-return";
  };
  return (
    <header className="navbar">
      <a className="navbar-name" onMouseOver={nameHoverInHandler} href="/">
        <span ref={myNameRef} className="name-animated"></span>
      </a>
      {hamburgerState ? <NavbarHamburger /> : <NavbarLinks />}
    </header>
  );
};

export default Navbar;
