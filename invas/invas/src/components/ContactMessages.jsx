import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AddMenuItemForm.css";

const ContactMessages = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Fetch contact messages when component mounts
    fetchContactMessages();
  }, []);

  const fetchContactMessages = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/getcontactmessages"
      ); // Assuming your server is running on the same domain
      setMessages(response.data);
    } catch (error) {
      console.error("Error fetching contact messages:", error);
    }
  };

  return (
    <div className="contacttext">
      <h2>Contact Messages</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          {messages.map((message, index) => (
            <tr key={index} className="table1">
              <td className="table2">{message.name}</td>
              <td className="table2">{message.email}</td>
              <td className="table2">{message.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactMessages;
