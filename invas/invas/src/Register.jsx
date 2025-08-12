// Register.jsx
import React, { useState } from "react";
import "./Register.css";
import axios from "axios";

function Register() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const { username, email, password, confirmPassword } = formData;

    if (password !== confirmPassword) {
      alert("Password and Confirm Password do not match.");
      return;
    }

    try {
      const response = await axios.post(
        "https://taste-it-again-restaurant-backend.onrender.com/registrenewuser",
        {
          username,
          email,
          password,
        }
      );
      console.log(response.data);
      alert("User registered successfully.");
    } catch (error) {
      console.error("Error registering user:", error.message);
      alert("Error registering user. Please try again later.");
    }
  }

  return (
    <>
      <div className="body">
        <header className="sticky-top">
          <div className="tg">
            <div className="headder_title">
              <span className="i">INVAS</span>
              <span className="u">UNFORGETTABLE FLAVOURS</span>
            </div>
          </div>
        </header>

        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-md-4 signup-container">
              <form className="signup-form" onSubmit={handleSubmit}>
                <h2 className="text-center mb-4">Sign Up</h2>

                <div className="form-group">
                  <label htmlFor="username">Username:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                  />
                </div>
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
                <div className="form-group">
                  <label htmlFor="confirm-password">Confirm Password:</label>
                  <input
                    type="password"
                    className="form-control"
                    id="confirm-password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group text-center ">
                  <input
                    type="submit"
                    className="btn btn-primary btn-block"
                    value="Sign Up"
                  />
                </div>
                <p className="text-center">
                  Already have an account?{" "}
                  <a href="./login.html" className="login-link">
                    Login
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
