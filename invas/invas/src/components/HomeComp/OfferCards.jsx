import React, { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

import "./Offercards.css";

export const OfferCards = ({ data }) => {
  const [slide, setslide] = useState(0);
  //   console.log(data);
  const nextslide = () => {
    setslide(slide === 5 ? 0 : slide + 1);
  };
  const prevslide = () => {
    setslide(slide === 0 ? 5 : slide - 1);
  };

  return (
    <div className="offers">
      <BsArrowLeftCircleFill className="arrow arrow_left" onClick={prevslide} />
      {data.map((item, idx) => {
        return (
          <img
            src={item.src}
            alt={item.alt}
            key={idx}
            className={
              slide === idx ? "offers_img" : "offers_img offers_img_none"
            }
          />
        );
      })}
      <BsArrowRightCircleFill
        className="arrow arrow_right"
        onClick={nextslide}
      />
      <span className="indicators">
        {data.map((_, idx) => {
          return (
            <button
              key={idx}
              onClick={null}
              className={
                slide === idx ? "indicator " : "indicator indicator_inactive"
              }
            ></button>
          );
        })}
      </span>
    </div>
  );
};
