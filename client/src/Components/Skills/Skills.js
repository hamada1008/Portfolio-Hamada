import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import SectionHeader from "../../Modules/SectionHeader";
import "../../Style/skills.scss";

const Skills = () => {
  const currentSkills = [
    "HTML",
    "CSS",
    "SCSS",
    "JavaScript",
    "React",
    "React Native",
    "Redux",
    "Bootstrap",
    "Material UI",
    "NodeJs",
    "Express",
    "Passport",
    "EJS",
    "MongoDB",
    "Mongoose",
    "Heroku",
    "JWT",
    "RESTApi",
  ];

  return (
    <ScrollAnimation
      animateIn="fadeInLeft"
      animateOnce={true}
      delay={1.5}
      offset={50}
    >
      <section id="skills">
        <h1 className="section-header">
          {`My Skills && Tools`.split("").map((el, index) => (
            <SectionHeader key={index} el={el} />
          ))}
        </h1>
        <div className="skills-container">
          {currentSkills.map((el, index) => (
            <p key={index} className="skillImg">
              {el}
            </p>
          ))}
        </div>
      </section>
    </ScrollAnimation>
  );
};

export default Skills;
