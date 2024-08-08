import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Headder from "./components/Headder";
import Fotter from "./components/Fotter";
import Menu from "./components/Menue";
import Contact from "./components/Contact";
import Location from "./components/Location";
import Login from "./Login";
import Register from "./Register";
import AddMenuItemForm from "./components/AddMenuItemForm";
import { Admin } from "./components/Admin";
import About from "./About";
import Gallery from "./components/Galary";

function App() {
  return (
    <Router>
      <>
        <Headder />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/location" element={<Location />} />
          <Route path="/adminLogin" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/galery" element={<Gallery />} />
          {/* <Route path="/addfood" element={<AddMenuItemForm/>}/> */}
          {/* <Route path="/adminLogin" element={<Admin />} /> */}
        </Routes>
        <Fotter />
      </>
    </Router>
    // <AddMenuItemForm />
    // <Register />
  );
}

export default App;
