import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "../css/Nav.css";
import Logo from "../assets/logo_v7.png";

function Nav() {
  const [show, setshow] = useState(false);
  const history = useHistory();
  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      setshow(true);
    } else {
      setshow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => {
      window.removeEventListener("scroll", transitionNavBar);
    };
  }, []);
  return (
    <div className={`nav ${show && "nav_black"}`}>
      <div className="nav_contents">
        <img
          onClick={() => {
            history.push("/");
          }}
          className="nav_logo"
          src={Logo}
          alt="netflix logo"
        />
        <img
          className="nav_avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="netflix avatar"
          onClick={() => {
            history.push("/profile");
          }}
        />
      </div>
    </div>
  );
}
export default Nav;
