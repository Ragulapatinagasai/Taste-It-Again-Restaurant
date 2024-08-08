import React, { useState } from "react";
import axios from "axios";
import "./AddMenuItemForm.css";
const AddMenuItemForm = () => {
  const [formData, setFormData] = useState({
    foodname: "",
    foodimg: "",
    price: 0,
    fooddescription: "",
    foodtype: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/addmenueitem", formData);
      // If successful, clear the form
      setFormData({
        foodname: "",
        foodimg: "",
        price: 0,
        fooddescription: "",
        foodtype: "",
      });
      alert("Menu item added successfully!");
    } catch (error) {
      console.error("Error adding menu item:", error);
      alert("Failed to add menu item. Please try again.");
    }
  };

  return (
    <div className="additem">
      <h2>Add New Menu Item</h2>
      <form onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr>
              <td>Food Name:</td>
              <td>
                <input
                  type="text"
                  name="foodname"
                  value={formData.foodname}
                  onChange={handleChange}
                  required
                  className="additemsbox"
                />
              </td>
            </tr>
            <tr>
              <td>Food Image URL:</td>
              <td>
                <input
                  type="text"
                  name="foodimg"
                  value={formData.foodimg}
                  onChange={handleChange}
                  required
                  className="additemsbox"
                />
              </td>
            </tr>
            <tr>
              <td>Price:</td>
              <td>
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  required
                  className="additemsbox"
                />
              </td>
            </tr>
            <tr>
              <td>Description:</td>
              <td>
                <input
                  type="text"
                  name="fooddescription"
                  value={formData.fooddescription}
                  onChange={handleChange}
                  required
                  className="additemsbox"
                />
              </td>
            </tr>
            <tr>
              <td>Food Type:</td>
              <td>
                <select
                  name="foodtype"
                  value={formData.foodtype}
                  onChange={handleChange}
                  required
                  className="additemsbox"
                >
                  <option value="">Select Food Type</option>
                  <option value="breakfast">Breakfast</option>
                  <option value="lunch">Lunch</option>
                  <option value="dinner">Dinner</option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>
        <br />
        <button type="submit" className="additemsbox">
          Add Item
        </button>
      </form>
    </div>
  );
};

export default AddMenuItemForm;
