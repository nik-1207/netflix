import React from "react";
import { useHistory } from "react-router-dom";
import "../css/nav2.css";

function Nav2() {
  const history = useHistory();

  return (
    <div className="nav_dark">
      <div className="">
        <img
          onClick={() => {
            history.push("/");
          }}
          className="nav2_logo"
          src="https://assets.nflxext.com/en_us/home/logo_v7.png"
          alt="netflix logo"
        />
        <img
          className="nav2_avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="netflix avatar"
        />
      </div>
    </div>
  );
}

export default Nav2;
