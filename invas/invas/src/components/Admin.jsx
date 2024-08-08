import React, { useState } from "react";
import AddMenuItemForm from "./AddMenuItemForm";
import ContactMessages from "./ContactMessages";
import "./AddMenuItemForm.css";

export const Admin = () => {
  const [showAddMenuItemForm, setShowAddMenuItemForm] = useState(true);
  const [showContactMessages, setShowContactMessages] = useState(false);

  const handleShowAddMenuItemForm = () => {
    setShowAddMenuItemForm(true);
    setShowContactMessages(false);
  };

  const handleShowContactMessages = () => {
    setShowAddMenuItemForm(false);
    setShowContactMessages(true);
  };

  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <div className="adminbtns">
        <button onClick={handleShowAddMenuItemForm} className="">
          Show Add Menu Item Form
        </button>
        <button onClick={handleShowContactMessages}>
          Show Contact Messages
        </button>
      </div>

      {showAddMenuItemForm && <AddMenuItemForm />}
      {showContactMessages && <ContactMessages />}
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};
