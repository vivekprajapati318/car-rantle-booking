import React from 'react'

export default function footer() {
  return (
    <div>
        <footer>
            <div className="container">
                <div className="footer-col">
                    <h4>About Us</h4>
                    <p>I am vivek prajapati.
                     
                    
                    </p>
                </div>
                <div className="footer-col">
                    <h4>Contact Us</h4>
                    <ul>
                        <li>Email: vivekprajapati318@gmail.com</li>
                        <li>Phone: 9173133627</li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Follow Us</h4>
                    <div className="follow">
                        <a href="#">Facebook</a>
                        <a href="#">Twitter</a>
                        <a href="https://www.instagram.com/vivekprajapati2004?igsh=MWFvOTZyOXBkZ29iNg==">Instagram</a>
                    </div>
                </div>
                <div className="footer-col">
                    <h4>Newsletter</h4>
                    <p>Subscribe to our newsletter for updates.</p>
                    <form action="#" method="POST" className="form">
                        <input type="email" name="email" placeholder="Enter your email" required/>
                        <button type="submit">Subscribe</button>
                    </form>
                </div>
            </div>
            <div className="copy">
                <p>&copy; 2024 Your Company. All rights reserved.</p>
            </div>
        </footer>
   
    </div>
  )
}
