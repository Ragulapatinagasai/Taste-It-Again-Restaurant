import React from "react";
import "./Gallery.css";

const Gallery = () => {
  const images = [
    { id: 1, src: "/resimg4.jpg", alt: "Image 1" },
    { id: 2, src: "/resimg4.jpg", alt: "Image 2" },
    { id: 3, src: "/resimg4.jpg", alt: "Image 3" },
    { id: 4, src: "/resimg5.jpg", alt: "Image 3" },
    { id: 5, src: "/resimg5.jpg", alt: "Image 3" },
    { id: 6, src: "/resimg5.jpg", alt: "Image 3" },
    { id: 7, src: "/resimg5.jpg", alt: "Image 3" },
    { id: 8, src: "/resimg5.jpg", alt: "Image 3" },
    { id: 9, src: "/resimg5.jpg", alt: "Image 3" },

    // Add more images her
  ];

  return (
    <div className="gallery-container">
      <h2 className="gallery-title">Gallery</h2>
      <div className="image-grid">
        {images.map((image) => (
          <div key={image.id} className="image-wrapper">
            <img src={image.src} alt={image.alt} className="gallery-image" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
