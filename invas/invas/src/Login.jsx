import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import { Admin } from "./components/Admin";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const { email, password } = formData;

    try {
      const response = await axios.post(
        "https://taste-it-again-restaurant-backend.onrender.com/loginuser",
        {
          email,
          password,
        }
      );
      console.log(response.data);
      alert("Login successful!");
      setIsLoggedIn(true); // Set login status to true upon successful login
      // Redirect or perform other actions after successful login
    } catch (error) {
      console.error("Error logging in:", error.message);
      alert("Invalid email or password. Please try again.");
    }
  }

  return (
    <>
      <div className="body">
        <div className="container-fluid">
          <div className="row justify-content-center">
            {!isLoggedIn && ( // Render login form if not logged in
              <div className="col-md-4 login-container">
                <form className="login-form" onSubmit={handleSubmit}>
                  <h2 className="text-center mb-4">Login</h2>
                  <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group text-center">
                    <input
                      type="submit"
                      className="btn btn-primary btn-block"
                      value="Login"
                    />
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
        {isLoggedIn && <Admin />}{" "}
        {/* Render Admin component if isLoggedIn is true */}
      </div>
    </>
  );
}

export default Login;
