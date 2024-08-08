import React from "react";
import "./About.css";
const About = () => {
  return (
    <div style={{ backgroundColor: "#ffd700" }}>
      <div className="container34">
        <h1>About Us - INVAS Restaurant</h1>
        <p>
          Welcome to INVAS Restaurant, a culinary gem nestled in the heart of
          the city. We take pride in our mission to provide an exceptional
          dining experience that goes beyond mere sustenance.
        </p>
        <p>
          Our story begins with a passion for food and a commitment to creating
          dishes that tantalize your taste buds. From locally sourced
          ingredients to globally inspired recipes, every meal at INVAS is a
          work of art.
        </p>
        <img
          className="about-image"
          src="/resimg.webp"
          alt="Restaurant Interior"
        />
        <p>
          Our restaurant's warm and inviting ambiance is designed to make you
          feel at home. Whether you're celebrating a special occasion or looking
          for a cozy spot for a casual dinner, we have a space that's perfect
          for you.
        </p>
        <p>
          Our talented chefs and dedicated staff are the heart and soul of INVAS
          Restaurant. Their expertise and passion for culinary excellence shine
          through in every dish we serve, from our signature entrees to our
          delectable desserts.
        </p>
        <p>
          We are committed to sustainability and responsible sourcing, ensuring
          that our commitment to delicious food is also a commitment to the
          environment and the community. We believe in giving back and making a
          positive impact.
        </p>
        <p>
          Thank you for choosing INVAS Restaurant. We're excited to have you
          dine with us and be a part of our culinary journey. Your satisfaction
          is our ultimate goal, and we can't wait to create memorable moments
          with you.
        </p>
      </div>
    </div>
  );
};

export default About;
