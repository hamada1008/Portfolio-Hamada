import React from "react";
import resume from "../../Constants/Oussama Hamada Resume.pdf";
import Typewriter from "typewriter-effect";
import "../../Style/about.scss";

const About = () => {
  return (
    <section id="about">
      <div className="about-section">
        <div className="greetings">
          <p>
            Hi there <span className="wave">👋</span> , I'm
          </p>
          <h1>OUSSAMA HAMADA</h1>
          <h4>Full Stack Web Developer</h4>
        </div>
        <div className="more-details">
          <span className="my-type">
            I'm a&nbsp;
            <span className="my-type-span">
              <Typewriter
                options={{
                  strings: [
                    "Full Stack JavaScript",
                    "Front-end w/ React Js",
                    "Back-end w/ Node Js",
                  ],
                  delay: 50,
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 20,
                  pauseFor: 3000,
                  wrapperClassName: "my-type-span",
                }}
              />
            </span>
            <span> Web Developer located in Tunisia.</span>
          </span>
          <p className="about-para" id="about-para-1">
            My <span>passion </span> is writing and giving life to code made
            with body and soul to create, not only <span>beautiful</span> but
            functional websites that respond to many's needs.
          </p>
          <p className="about-para" id="about-para-2">
            I'm taking pride in developing web applications with a handful of
            powerful and fun tools to use. The ones I'm the happiest when
            working with the most are JavaScript (ES6) and CSS or&nbsp;
            <a
              href="https://sass-lang.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              SCSS
            </a>
            &nbsp;which I'm always discovering the never-ending&nbsp;
            <span>potential</span>&nbsp; of such powerful tools.
          </p>
          <p className="about-para" id="about-para-3">
            Investing my free time in learning new languages, techniques and
            technologies have been a <span>practice </span>in my daily life for
            the sole purpose of <span>leveling up </span> my skills and
            potential, which was have never been <span>easier</span> thanks to
            my fast learning ability.
          </p>
          <div className="resume-details" id="about-para-4">
            <p>You can read more about me in the PDF attached below</p>
            <a href={resume}>My Resume.PDF</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
