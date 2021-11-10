import "../../Style/projectDetails.scss";
import React, { useState } from "react";
import ProjectPreview from "../Projects/ProjectPreview";
import animateItDetails from "../../Modules/animateItDetails";

const FullDetails = ({
  id,
  title,
  preview,
  description,
  techs,
  githubLink,
  website,
  FullDetails,
  setFullDetails,
}) => {
  const [imagePreview, setImagePreview] = useState(false);
  const closeDetails = () => {
    setFullDetails(false);
  };
  const closeDetailsWithKey = (e) => {
    if (e.keyCode === 27) {
      setFullDetails(false);
    } else {
      return;
    }
  };
  const openPreview = () => {
    setImagePreview(true);
  };

  return (
    <div className="detail-screen" onKeyDown={closeDetailsWithKey} tabIndex="0">
      {imagePreview && (
        <ProjectPreview
          imagePreview={imagePreview}
          setImagePreview={setImagePreview}
          title={title}
          preview={preview}
          id={id}
        />
      )}
      <div className="detail-left-pannel " onClick={closeDetails}></div>
      <div className="detail-offcanvas">
        <button className="detail-close-button" onClick={closeDetails}>
          <i className="fas fa-reply"></i>
        </button>
        <h2>
          {title.split("").map((el) => {
            return (
              <span
                key={Math.random()}
                aria-hidden="true"
                className="animated-bounce"
                onMouseOver={animateItDetails}
              >
                {el.trim() === "" ? String.fromCharCode(160) : el}
              </span>
            );
          })}
        </h2>
        <h4>More Details</h4>

        <p>{description}</p>
        <h4>Project preview</h4>
        <div
          className={
            id === 5
              ? "detail-image-container native-container"
              : "detail-image-container"
          }
          onClick={openPreview}
        >
          <img
            className={id === 5 ? "detail-image native" : "detail-image"}
            src={preview[0]}
            alt={`${title} index preview`}
          />
        </div>

        <h4>Technologies</h4>
        <ul>
          {techs.map((el, index) => (
            <li key={index}>{el}</li>
          ))}
        </ul>
        <h4>
          Github &nbsp; <i className="devicon-github-original"></i>
        </h4>
        <a target="_blank" rel="noopener noreferrer" href={githubLink}>
          {githubLink}
        </a>
        {website.length > 0 && (
          <>
            <h4>
              Website &nbsp; <i className="fas fa-globe"></i>
            </h4>
            <a target="_blank" rel="noopener noreferrer" href={website}>
              {website}
            </a>
          </>
        )}
      </div>
    </div>
  );
};

export default FullDetails;
