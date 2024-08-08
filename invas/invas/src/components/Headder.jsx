import React from "react";
import { Link } from "react-router-dom";
import "./Headder.css";

function Headder() {
  return (
    <header className="sticky-top">
      <div className="tg">
        <div className="headder_title">
          <span className="i">TASTE IT AGAIN</span>
          <span className="u">UNFORGETTABLE FLAVOURS</span>
        </div>
        <button className="tog">
          <img src="./res/icons8-bars-50.png" alt="" />
        </button>
      </div>
      <div className="btns">
        <div></div>
        <div>
          <Link to="/" className="a">
            <span>HOME</span>
          </Link>
        </div>
        <div>
          <Link to="/menu" className="a">
            <span>MENU</span>
          </Link>
        </div>
        <div>
          <Link to="/location" className="a">
            <span>LOCATIONS</span>
          </Link>
        </div>
        <div>
          <Link to="/contact" className="a">
            <span>Contact Us</span>
          </Link>
        </div>
        <div>
          <Link to="/galery" className="a">
            <span>GALLERY</span>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Headder;
