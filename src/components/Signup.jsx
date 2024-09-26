import "./signup.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Signup() {
  const [userName, setUserName] = useState(""); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  async function save(event) {
    event.preventDefault();
    if (!userName.trim() || !email.trim() || !password.trim()) {
      alert("Please fill in all fields.");
      return;
    }
    try {
      await axios.post("http://localhost:8080/api/v1/employee/save", {
        userName: userName,
        email: email,
        password: password,
      });
      alert("Employee Registration Successfully");
    } catch (err) {
      if (err.response) {
        if (err.response.status === 400) {
          if (err.response.data && err.response.data.message) {
            alert(err.response.data.message);
          } else {
            alert("This email is already registered. Please use a different email.");
          }
        } else {
          const message = err.response.data && typeof err.response.data === 'string'
            ? err.response.data
            : err.response.data.message || JSON.stringify(err.response.data);
          alert(message);
        }
      } else {
        alert("An error occurred");
      }
    }
  }


  return (
    <>
     <div className="pt-5 Full">
     <div className="addUser shadow">
        <h3>Sign Up</h3>
        <form className="addUserForm" onSubmit={save}> 
          <div className="inputGroup">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="username"
              name="name"
              autoComplete="off"
              placeholder="Enter your name"
              value={userName}
              onChange={(event) => {
                setUserName(event.target.value); 
              }}
            />

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="off"
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
              placeholder="Enter Password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
            <button type="submit" className="btn btn-success"> 
              Sign Up
            </button>
          </div>
        </form>
        <div className="login">
          <p>Already have an Account? </p>
          <Link to="/Todolist" className="btn btn-primary"> 
            Login
          </Link>
        </div>
      </div>
     </div>
    </>
  );
}

export default Signup;
