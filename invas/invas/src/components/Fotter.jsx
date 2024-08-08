import React from "react";
import "./Fotter.css";
import { Link } from "react-router-dom";

function Fotter() {
  return (
    <>
      <div>
        <div className="footer">
          <div className="atr">
            <div className="icn">
              <a href="https://www.instagram.com/invasconventions_/" about="_">
                <i>
                  <img src="/insta3.png" alt="insta"  />
                </i>
              </a>
              <a href="#">
                <i>
                  <img src="/" alt="" />
                </i>
              </a>
            </div>
            <div className="atr_m">
              {/* <a href="#">
                <span>AWARDS</span>
              </a>
              <a href="#">
                <span>CAREERS</span>
              </a> */}
              <Link to="/contact">
                <span>Contact Us</span>
              </Link>
              <Link to="/about">
                <span>ABOUT</span>
              </Link>
              <a href="">
                <span>TERMS</span>
              </a>
              <a href="">
                <span>PRIVACY</span>
              </a>
            </div>
          </div>
          <div style={{ textAlign: "center", color: "#ffd700" }}>
            &copy; 2024 taste it again <br />
          </div>
        </div>
      </div>
    </>
  );
}

export default Fotter;
