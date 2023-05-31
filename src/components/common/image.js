import React, { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";

const LazyImage = ({ src, alt, placeholder, className }) => {
  const imageRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const image = entries[0];
        if (image.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(image.target);
        }
      },
      { threshold: 0.1 } // Adjust the threshold value as needed
    );

    observer.observe(imageRef.current);

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  return (
    <div
      className={`${className}`}
      style={{ position: "relative", width: "100%", height: "100%" }}
    >
      {isVisible ? (
        <img
          className={`${className}`}
          ref={imageRef}
          src={src}
          alt={alt}
          style={{ width: "100%", height: "100%" }}
        />
      ) : (
        <div
          ref={imageRef}
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            background: "#bda6a6", // Placeholder background color
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {placeholder}
        </div>
      )}
    </div>
  );
};

LazyImage.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.any,
};

export default LazyImage;
