import React from "react";
import Project from "../Projects/Project";
import ScrollAnimation from "react-animate-on-scroll";
import SectionHeader from "../../Modules/SectionHeader";
import projectList from "../../Constants/projectList";

const ProjectSection = () => {
  return (
    <ScrollAnimation
      animateIn="fadeInRight"
      animateOnce={true}
      delay={1.5}
      offset={50}
    >
      <section id="projects">
        <h1 className="section-header">
          {`My Projects`.split("").map((el, index) => (
            <SectionHeader key={index} el={el} />
          ))}
        </h1>

        <div className="project-container">
          {projectList.map((el) => (
            <Project
              key={el.id}
              id={el.id}
              title={el.title}
              smallDescription={el.smallDescription}
              imgUrl={el.imgUrl}
              preview={el.preview}
              description={el.description}
              techs={el.techs}
              githubLink={el.githubLink}
              website={el.website}
            />
          ))}
        </div>
      </section>
    </ScrollAnimation>
  );
};

export default ProjectSection;
