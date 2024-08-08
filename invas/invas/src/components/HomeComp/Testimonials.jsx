import React, { useState, useEffect } from "react";
import "./Testimonials.css";

const Testimonials = ({ testimonials }) => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonialIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change testimonial every 5 seconds

    return () => clearInterval(interval);
  }, [testimonials]);

  return (
    <div className="testimonials-container">
      <h2 className="testimonials-heading">Coustomers Testimonials</h2>
      <div className="testimonials">
        <div className="testimonial">
          <p className="testimonial-text">
            {testimonials[currentTestimonialIndex].testimonial}
          </p>
          <p className="testimonial-name">
            {testimonials[currentTestimonialIndex].name}
          </p>
          <p className="testimonial-designation">
            {testimonials[currentTestimonialIndex].designation}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
