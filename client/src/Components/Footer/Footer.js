import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

import "../../Style/footer.scss";

const Footer = () => {
  return (
    <ScrollAnimation
      animateIn="fadeInUp"
      animateOnce={true}
      delay={1.5}
      offset={10}
    >
      <footer>
        <p>© 2021 | Designed & coded by Oussama Hamada</p>
        <div className="web-links">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/hamada1008"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/oussama-hamada-a457571a3/"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </footer>
    </ScrollAnimation>
  );
};

export default Footer;
