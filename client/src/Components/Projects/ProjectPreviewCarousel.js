import React, { useRef, useEffect, useState } from "react";
import "../../Style/ProjectPreviewCarousel.scss";

const ProjectPreviewCarousel = ({ setImagePreview, preview, title, id }) => {
  const carouselImageRef = useRef();
  const [carouselActiveImage, setCarouselActiveImage] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [rotationDirection, setRotationDirection] = useState("");
  const carouselNext = () => {
    setRotationDirection("carousel-right");
    if (carouselActiveImage === preview.length - 1) {
      setCarouselActiveImage(0);
    } else {
      setCarouselActiveImage((prev) => prev + 1);
    }
  };
  const carouselPrev = () => {
    setRotationDirection("carousel-left");

    if (carouselActiveImage === 0) {
      setCarouselActiveImage(preview.length - 1);
    } else {
      setCarouselActiveImage((prev) => prev - 1);
    }
  };
  const touchEndMove = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    if (touchEndX > touchStart) {
      carouselNext();
    } else if (touchEndX < touchStart) {
      carouselPrev();
    } else {
      return;
    }
    setTouchStart(0);
  };
  useEffect(() => {
    const imageCollection = document.getElementsByClassName(
      "preview-image-carousel"
    );
    for (let i of imageCollection) {
      if (Number(i.id) === carouselActiveImage) {
        i.className = i.className + " carousel-active";
      } else {
        i.className = `preview-image-carousel ${rotationDirection}`;
      }
    }
  }, [carouselActiveImage, rotationDirection]);
  return (
    <div
      className={
        id !== 5
          ? "preview-scene preview-scene-carousel"
          : "preview-scene preview-scene-carousel carousel-native"
      }
    >
      <button
        className="detail-close-button"
        onClick={() => setImagePreview(false)}
        style={{ zIndex: 72, left: "1vw" }}
      >
        <i className="fas fa-reply"></i>
      </button>
      <button
        className="carousel-controls carousel-prev"
        onClick={carouselPrev}
      >
        <i className="fas fa-chevron-circle-left"></i>
      </button>
      <div className="preview-container preview-container-carousel">
        {preview.map((el, index) => (
          <img
            onTouchStart={(e) => setTouchStart(e.changedTouches[0].clientX)}
            onTouchEnd={touchEndMove}
            key={index}
            id={index}
            ref={carouselImageRef}
            className="preview-image-carousel"
            src={el}
            alt={`${title} preview${index}`}
          />
        ))}
        <button
          className="carousel-controls carousel-next"
          onClick={carouselNext}
        >
          <i className="fas fa-chevron-circle-right"></i>
        </button>
      </div>
    </div>
  );
};

export default ProjectPreviewCarousel;
