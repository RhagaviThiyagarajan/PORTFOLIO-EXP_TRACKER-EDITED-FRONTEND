import React from "react";

import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
export default function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post(
        "https://expensestrackernode.herokuapp.com/auth/register",
        {
          username,
          email,
          password,
          phone,
        }
      );
      res.data && window.location.replace("/login");
    } catch (error) {
      setError(true);
    }
  };
  return (
    <div className="Register">
      <span className="RegisterTitle">Register</span>

      <form className="RegisterForm" onSubmit={handleSubmit}>
        <label>UserName</label>
        <input
          className="RegisterInput"
          type="text"
          placeholder="enter your username"
          onChange={(e) => setUsername(e.target.value)}
          required="true"
        />

        <label>Email</label>
        <input
          className="RegisterInput"
          type="text"
          placeholder="enter your Email"
          onChange={(e) => setEmail(e.target.value)}
          required="true"
        />

        <label>Password</label>
        <input
          type="password"
          className="RegisterInput"
          placeholder="enter your password"
          onChange={(e) => setPassword(e.target.value)}
          required="true"
        />

        <label>Phone</label>
        <input
          type="text"
          className="RegisterInput"
          placeholder="enter your phone"
          onChange={(e) => setPhone(e.target.value)}
          required="true"
        />

        <button className="RegisterButton" type="submit">
          Signup
        </button>
      </form>
      <button className="RegisterLoginButton">
        <Link className="link" to="/login">
          Login
        </Link>
      </button>
      {error && (
        <span style={{ color: "red", marginTop: "10px" }}>
    Please fill all the details
        </span>
      )}
    </div>
  );
}
