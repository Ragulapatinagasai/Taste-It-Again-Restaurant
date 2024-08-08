import React, { useState, useEffect } from "react";
import "./Corosel.css";

export const Corosel = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === data.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [data.length]);

  const renderItems = () => {
    const itemsToRender = [];
    for (let i = currentIndex; i < currentIndex + itemsPerPage; i++) {
      const itemIndex = i % data.length;
      itemsToRender.push(
        <img
          key={itemIndex}
          src={data[itemIndex].src}
          alt={data[itemIndex].alt}
          className="corosel_img"
        />
      );
    }
    return itemsToRender;
  };

  return <div className="corosel_container">{renderItems()}</div>;
};
