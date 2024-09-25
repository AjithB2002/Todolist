import React from "react";
import "./login.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function login(event) {
    event.preventDefault();
    try {
      await axios.post("http://localhost:8080/api/v1/employee/login", {
        email: email,
        password: password,
      }).then((res) => {
        console.log(res.data);

        if (res.data.message == "Email not exits") {
          alert("Email not exits");
        }
        else if (res.data.message == "Login Success") {

          navigate('/todo');
        }
        else {
          alert("Incorrect Email and Password not match");
        }
      }, fail => {
        console.error(fail); // Error!
      });
    }

    catch (err) {
      alert(err);
    }

  }
  return (
    <div className="Full pt-5">
      <div className="addUser shadow">
        <h3>Sign in</h3>
        <form className="addUserForm">
          <div className="inputGroup">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="on"
              placeholder="Enter your Email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
            <label htmlFor="Password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              autoComplete="off"
              placeholder="Enter your Password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
            <button type="submit" class="btn btn-primary" onClick={login}>
              Login
            </button>
          </div>
        </form>
        <div className="login">
          <p>Don't have Account? </p>
          <Link to="/signup" type="submit" class="btn btn-success">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
