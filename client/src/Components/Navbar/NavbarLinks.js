import React, { useState } from "react";

const NavbarLinks = ({ setHamburgerOpen }) => {
  const [activeLink, setActiveLink] = useState({
    about: false,
    skills: false,
    projects: false,
    contact: false,
  });
  const highlighted = (e) => {
    const href = e.target.href.split("/");
    const hash = href[href.length - 1];
    setActiveLink({
      about: false,
      skills: false,
      projects: false,
      contact: false,
      [hash.substring(1)]: true,
    });
    setHamburgerOpen &&
      setTimeout(() => {
        setHamburgerOpen((prev) => !prev);
      }, 500);
  };
  return (
    <ul className="navbar-links">
      <li>
        <a
          href="#about"
          onClick={highlighted}
          className={activeLink?.about ? "highlighted" : null}
        >
          About
        </a>
      </li>
      <li>
        <a
          href="#skills"
          onClick={highlighted}
          className={activeLink?.skills ? "highlighted" : null}
        >
          Skills & Tools
        </a>
      </li>
      <li>
        <a
          href="#projects"
          onClick={highlighted}
          className={activeLink?.projects ? "highlighted" : null}
        >
          Projects
        </a>
      </li>
      <li>
        <a
          href="#contact"
          onClick={highlighted}
          className={activeLink?.contact ? "highlighted" : null}
        >
          Contact
        </a>
      </li>
    </ul>
  );
};

export default NavbarLinks;
