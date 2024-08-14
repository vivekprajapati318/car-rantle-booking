import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Signin() {
  const [credentials, setCredentials] = useState({ email: "", pwd: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/loginuser", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email:credentials.email, pwd:credentials.pwd })
      });

      const json = await response.json();
      console.log(json);

      if (json.success) {
        localStorage.setItem("authtoken", json.authtoken);
        console.log(localStorage.getItem("authtoken"));
        navigate("/");
      } else {
        alert("Invalid email or password");
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("An error occurred during login. Please try again.");
    }
  };

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className="container mt-5">
    <div className="row justify-content-center">
      <div className="col-md-6">
        <form onSubmit={handleSubmit} className="p-4 border rounded-3 shadow-sm bg-secondary text-white">
          <h2 className="mb-4 text-center">Login</h2>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" name='email' value={credentials.email} onChange={handleChange} />
            <div id="emailHelp" className="form-text text-white-50">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="pwd" className="form-label">Password</label>
            <input type="password" className="form-control" id="pwd" name='pwd' value={credentials.pwd} onChange={handleChange} />
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
          </div>
          <button type="submit" className="btn btn-light w-100 mb-3 text-secondary">Submit</button>
          <Link to="/Signup" className='btn btn-danger w-100'>New User</Link>
        </form>
      </div>
    </div>
  </div>
  
  );
}
