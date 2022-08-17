import React, { useState } from "react";
import "../css/loginScreen.css";
import SignupScreen from "./SignupScreen";

import Logo from "../assets/logo_v7.png";

function LoginScreen() {
  const [signIn, setsignIn] = useState(false);
  return (
    <div className="loginScreen">
      <div className="loginScreen_background">
        <img src={Logo} className="loginScreen_logo" alt="logo" />
        <button
          className="loginScreen_button"
          onClick={() => {
            setsignIn(true);
          }}
        >
          SignIn
        </button>
        <div className="loginScreen_gradient"></div>
      </div>
      <div className="loginScreen_body">
        {signIn ? (
          <SignupScreen />
        ) : (
          <>
            <h1>Unlimited films,Tv programmes and more.</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <div className="loginScreen_input">
              <form>
                <input type="email" placeholder="Email Address" />
                <button
                  onClick={() => {
                    setsignIn(true);
                  }}
                  className="loginScreen_getStarted"
                >
                  {" "}
                  GET STARTED
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default LoginScreen;
