import React from "react";
import "./Contact.css";

class Contact extends React.Component {
  handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    try {
      const response = await fetch("http://localhost:3000/submitcontact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("Form submitted successfully.");
      } else {
        alert("Failed to submit form. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  render() {
    return (
      <>
        <div className="body2">
          <br />
          <br />
          <div className="container">
            <h1 className="heading">Contact Us</h1>
            <p className="paragraph">
              Send us a message, and we'll get back to you as soon as possible.
              We're looking forward to hearing from you.
            </p>
            <form className="form" onSubmit={this.handleSubmit}>
              <label htmlFor="name" className="label">
                Name - Required
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="input"
                required
              />

              <label htmlFor="email" className="label">
                Email - Required
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="input"
                required
              />

              <label htmlFor="phone" className="label">
                Phone Number - Optional
              </label>
              <input
                type="tel"
                id="phone"
                pattern="[0-9]{10}"
                name="phone"
                className="input"
              />

              <label htmlFor="location" className="label">
                Location - Required
              </label>
              <input
                type="text"
                id="location"
                name="location"
                className="input"
                required
              />

              <label htmlFor="reason" className="label">
                What are you getting in touch about? - Required
              </label>
              <select id="reason" name="reason" className="input" required>
                <option value="Reservation">Reservation</option>
                <option value="Feedback">Feedback</option>
                <option value="General Inquiry">General Inquiry</option>
              </select>

              <label htmlFor="message" className="label">
                Your Message - Required
              </label>
              <textarea
                id="message"
                name="message"
                className="textarea"
                required
              ></textarea>

              <button type="submit" className="button">
                Submit
              </button>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default Contact;
