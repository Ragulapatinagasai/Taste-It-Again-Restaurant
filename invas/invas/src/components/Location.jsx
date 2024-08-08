import React from "react";
import "./Location.css";

class Location extends React.Component {
  render() {
    return (
      <div className="mapbox body2">
        <div className="desc">
          <div>
            <span style={{ fontSize: "2rem" }}>Downtown Delight</span> <br />
            Address: [Address] Located in the heart of the city, our downtown
            location is perfect for those seeking a vibrant atmosphere and easy
            access to local attractions. Join us for a culinary journey that
            celebrates the spirit of the city.
          </div>
          <div>
            <span style={{ fontSize: "2rem" }}>Downtown Delight</span> <br />
            Address: [Address] Located in the heart of the city, our downtown
            location is perfect for those seeking a vibrant atmosphere and easy
            access to local attractions. Join us for a culinary journey that
            celebrates the spirit of the city.
          </div>
          <div>
            <span style={{ fontSize: "2rem" }}>Downtown Delight</span> <br />
            Address: [Address] Located in the heart of the city, our downtown
            location is perfect for those seeking a vibrant atmosphere and easy
            access to local attractions. Join us for a culinary journey that
            celebrates the spirit of the city.
          </div>
        </div>
        <div className="map">
          <img src="/resimg2.jpg" alt="" />
        </div>
      </div>
    );
  }
}

export default Location;
