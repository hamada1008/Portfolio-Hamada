import React, { useState, useEffect } from "react";
import FullDetails from "../Projects/FullDetails";
import "../../Style/projectDetails.scss";

const Project = ({
  id,
  title,
  smallDescription,
  imgUrl,
  preview,
  description,
  techs,
  githubLink,
  website,
}) => {
  const [detailStatus, setDetailStatus] = useState(false);
  const [fullDetails, setFullDetails] = useState(false);
  const showDetails = () => {
    setDetailStatus(true);
  };
  const hideDetails = () => {
    setDetailStatus(false);
  };

  useEffect(() => {
    if (fullDetails) {
      document.getElementsByTagName("body")[0].style =
        "overflow: hidden; margin-right:0.9vw";
    }
    return () => {
      document.getElementsByTagName("body")[0].style = "overflow: visible";
    };
  }, [fullDetails]);

  const openCanvas = () => {
    if (!fullDetails) {
      setFullDetails(true);
    }
  };
  return (
    <div
      className="project"
      id={`project${id}`}
      onMouseLeave={hideDetails}
      onMouseOver={() => (!fullDetails ? showDetails() : null)}
      onClick={openCanvas}
    >
      <img src={imgUrl} alt={title} className="project-preview" />
      {detailStatus && (
        <div className="project-details">
          <h3>{title}</h3>
          <p>{smallDescription}</p>
        </div>
      )}

      {fullDetails && (
        <FullDetails
          id={id}
          title={title}
          preview={preview}
          description={description}
          techs={techs}
          githubLink={githubLink}
          website={website}
          fullDetails={fullDetails}
          setFullDetails={setFullDetails}
        />
      )}
    </div>
  );
};

export default Project;
