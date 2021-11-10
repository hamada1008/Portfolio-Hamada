import React, { useRef, useState, useEffect } from "react";
import ProjectPreviewCarousel from "./ProjectPreviewCarousel";
import "../../Style/ProjectPreview.scss";

const ProjectPreview = ({ setImagePreview, preview, title, id }) => {
  const previewImage = useRef(false);
  const [preventReset, setPreventReset] = useState(false);
  useEffect(
    (id) => {
      if (!previewImage.current) {
        setTimeout(
          () => {
            previewImage.current = true;
          },
          id === 5 ? 2000 : 900
        );
        return;
      }
    },
    [previewImage]
  );
  const previewHover = (e) => {
    const imageCollectionDOM = document.getElementsByClassName("preview-image");
    let isUnique = true;
    for (let i = 0; i < imageCollectionDOM.length; i++) {
      if (imageCollectionDOM[i].className.includes("highlighted")) {
        isUnique = false;
        return;
      }
    }
    if (!!isUnique && previewImage.current) {
      if (!preventReset) {
        setPreventReset(true);
        e.target.className =
          id !== 5
            ? "preview-image preview-image-highlighted"
            : "preview-image native-preview native-preview-highlighted";
        setTimeout(() => {
          setPreventReset(false);
        }, 900);
      } else {
        return;
      }
    }
  };
  const previewReset = (e) => {
    setTimeout(() => {
      e.target.className =
        id !== 5 ? "preview-image" : "preview-image native-preview";
    }, 1500);
  };

  const initialScreenWidth = window.innerWidth < 1023;
  const [carouselState, setCarouselState] = useState(initialScreenWidth);
  const screenDetector = () => {
    const screenWidth = window.innerWidth;
    const hamburgerVisibility = screenWidth < 1023 ? true : false;
    setCarouselState(hamburgerVisibility);
  };
  useEffect(() => {
    window.addEventListener("resize", screenDetector);
    return () => {
      window.removeEventListener("resize", screenDetector);
    };
  }, []);
  if (carouselState) {
    return (
      <ProjectPreviewCarousel
        setImagePreview={setImagePreview}
        preview={preview}
        title={title}
        id={id}
      />
    );
  }
  return (
    <div className="preview-scene">
      <button
        className="detail-close-button"
        onClick={() => setImagePreview(false)}
        style={{ zIndex: 72, left: "1vw" }}
      >
        <i className="fas fa-reply"></i>
      </button>
      <div className="preview-container">
        {preview.map((el, index) => (
          <img
            onMouseEnter={previewHover}
            onMouseOut={previewReset}
            key={index}
            className={
              id !== 5 ? "preview-image" : "preview-image native-preview"
            }
            src={el}
            alt={`${title} preview${index}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectPreview;
