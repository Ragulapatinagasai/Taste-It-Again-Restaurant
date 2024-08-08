import React, { useState, useEffect } from "react";
import "./Menue.css";
import { FaUtensils } from "react-icons/fa";

const Menu = () => {
  const [menu, setMenu] = useState(null);
  const [activeCategory, setActiveCategory] = useState("breakfast");

  useEffect(() => {
    fetch("http://localhost:3000/getitems")
      .then((response) => response.json())
      .then((data) => {
        setMenu(data);
      })
      .catch((error) => {
        console.error("Error fetching menu data:", error);
      });
  }, []);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  if (!menu) {
    return <div className="no-menu">Loading menu...</div>;
  }

  const filteredMenuItems = menu.filter(
    (item) => item.foodtype === activeCategory
  );

  return (
    <div className="body2">
      <div className="menu-container">
        <br />
        <br />
        <br />
        <div className="menu-buttons">
          <button
            className={activeCategory === "breakfast" ? "active" : ""}
            onClick={() => handleCategoryChange("breakfast")}
          >
            Breakfast
          </button>
          <button
            className={activeCategory === "lunch" ? "active" : ""}
            onClick={() => handleCategoryChange("lunch")}
          >
            Lunch
          </button>
          <button
            className={activeCategory === "dinner" ? "active" : ""}
            onClick={() => handleCategoryChange("dinner")}
          >
            Dinner
          </button>
        </div>

        <div className="menu-section">
          <h2>
            {activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)}
          </h2>
          <ul>
            {filteredMenuItems.map((item, index) => (
              <li key={index} className="menu-item">
                <img
                  src={item.foodimg}
                  alt={item.foodname}
                  className="menu-item-image"
                />
                <div className="menu-item-details">
                  <span className="menu-item-name">{item.foodname}</span>
                  <span className="menu-item-price">₹{item.price}</span>
                  <span className="menu-item-description">
                    {item.fooddescription}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default Menu;
