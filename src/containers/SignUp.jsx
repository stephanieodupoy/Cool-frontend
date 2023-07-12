import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signUp } from "../reducks/users/operations";

import Home from "../containers/Home";
import { push } from "connected-react-router";
import { useNavigate } from "react-router";

const SignUp = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();

  const closeButton = () => {
    navigate('/')
  };
  const [user_name, setUserName] = useState(""),
    [email, setEmail] = useState(""),
    [password, setPassword] = useState("");
  const inputUserName = (event) => {
    setUserName(event.target.value);
  };
  const inputEmail = (event) => {
    setEmail(event.target.value);
  };
  const inputPassword = (event) => {
    setPassword(event.target.value);
  };
  const signUpButton = () => {
    dispatch(signUp(user_name, email, password));
    setUserName("");
    setEmail("");
    setPassword("");
  };
  return (
    <>
      <Home />
      <div class="wrap">
        <div class="login-form">
          <div class="form-header">
            <h3>
              Create account and <br /> discover the benfits{" "}
            </h3>
          </div>
          <h2 class="closebtn" onClick={closeButton}>
            X
          </h2>
          {/* <!--User Name--> */}
          <div class="form-group">
            <input
              type="text"
              onChange={inputUserName}
              class="form-input"
              placeholder="User Name"
            />
          </div>
          {/* <!--Email Input--> */}
          <div class="form-group">
            <input
              type="text"
              onChange={inputEmail}
              class="form-input"
              placeholder="E-mail"
            />
          </div>
          {/* <!--Password Input--> */}
          <div class="form-group">
            <input
              type="password"
              onChange={inputPassword}
              class="form-input"
              placeholder="Password"
            />
          </div>
          {/* <!--Login Button--> */}
          <div class="form-group">
            <button class="form-button" onClick={signUpButton} type="submit">
              Sign up
            </button>
          </div>
          <div class="form-footer">
            Already a member yet?
            <a href="/signin">Sign up</a>
          </div>
        </div>
      </div>
      {/* <!--/.wrap--> */}
    </>
  );
};

export default SignUp;
