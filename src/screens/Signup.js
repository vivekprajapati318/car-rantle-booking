import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Signup() {
  const [credentials, setCredentials] = useState({ name: "", email: "", pwd: "", geolocation: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/createUser", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: credentials.name,
        email: credentials.email,
        pwd: credentials.pwd,
        geolocation: credentials.geolocation
      })
    });

    const json = await response.json();
    console.log(json);

    if (!json.success) {
      alert("Invalid data");
    } else {
      alert("Account created");
      navigate("/login");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <form onSubmit={handleSubmit} className="p-4 border rounded-3 shadow-sm bg-primary text-white">
              <h2 className="mb-4 text-center">Register</h2>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={credentials.name}
                  onChange={onChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={credentials.email}
                  onChange={onChange}
                />
                <div id="emailHelp" className="form-text text-white-50">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="pwd"
                  value={credentials.pwd}
                  onChange={onChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="address" className="form-label">Address</label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  name="geolocation"
                  value={credentials.geolocation}
                  onChange={onChange}
                />
              </div>
              <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="check" />
                <label className="form-check-label" htmlFor="check">Check me out</label>
              </div>
              <button type="submit" className="btn btn-light w-100 mb-3 text-primary">
                Submit
              </button>
              <Link to="/login" className="btn btn-danger w-100">Already a user</Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
