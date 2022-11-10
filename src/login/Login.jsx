import React from "react";

import { Context } from "../store/Context.js";
import { useRef } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Login() {
  const userRef = useRef();

  const passwordRef = useRef();

  const emailRef = useRef();

  const phoneRef = useRef();

  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post(
        "https://expensestrackernode.herokuapp.com/auth/login",
        {
          username: userRef.current.value,
          password: passwordRef.current.value,
          email: emailRef.current.value,
          phone: phoneRef.current.value,
        }
      );
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      window.location.replace("/");
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  return (
    <div className="login">
      <span className="loginTitle">Login</span>

      <form className="loginForm" onSubmit={handleSubmit}>
        <label>UserName</label>
        <input
          className="loginInput"
          type="text"
          placeholder="enter your UserName"
          ref={userRef}
        />
        <label>Password</label>
        <input
          type="password"
          className="loginInput"
          placeholder="enter your password"
          ref={passwordRef}
        />

        <label>Email</label>
        <input
          type="email"
          className="loginInput"
          placeholder="enter your Email"
          ref={emailRef}
        />

        <label>Phone</label>
        <input
          type="phone"
          className="loginInput"
          placeholder="enter your phone"
          ref={phoneRef}
        />
        <button className="loginButton" type="submit" disabled={isFetching}>
          Login
        </button>
      </form>

      <button className="RegisterButton">
        <Link className="link" to="/signup">
          Signup
        </Link>
      </button>
    </div>
  );
}

export default Login;
