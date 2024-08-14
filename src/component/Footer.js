import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-dark text-light py-4 border-top fixed-bottom p-3 ">
      <div className="container">
        <div className="row">
          <div className="col-md-3 d-flex align-items-center mb-3 mb-md-0">
            <Link to="/" className="text-light text-decoration-none lh-1">
              <svg className="bi" width="30" height="24"></svg>
            </Link>
            <span className="ms-2 fs-1">gofood</span>
          </div>
          <div className="col-md-3">
            <h4>About Us</h4>
            <p>I am Vivek Prajapati.</p>
          </div>
          <div className="col-md-3">
            <h4>Contact Us</h4>
            <ul className="list-unstyled">
              <li>Email: vivekprajapati318@gmail.com</li>
              <li>Phone: 9173133627</li>
            </ul>
          </div>
          <div className="col-md-3">
            <h4>Follow Us</h4>
            <div className="d-flex">
              <a href="#" className="text-light me-2">Facebook</a>
              <a href="#" className="text-light me-2">Twitter</a>
              <a href="https://www.instagram.com/vivekprajapati2004?igsh=MWFvOTZyOXBkZ29iNg==" className="text-light">Instagram</a>
            </div>
          </div>
      
        </div>
        <div className="row mt-3">
          <div className="col text-center">
            <p className="text-light mb-0">&copy; 2024 Your Company. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
