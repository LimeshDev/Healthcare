import React from "react";
import "./Footer.css"; // CSS file for footer styling

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-sections">
          <div className="footer-section">
            <h5>Healthcare Services</h5>
            <ul>
              <li><a href="#">Doctors</a></li>
              <li><a href="#">Clinics</a></li>
              <li><a href="#">Appointments</a></li>
              <li><a href="#">Emergency</a></li>
              <li><a href="#">Pharmacy</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h5>About Us</h5>
            <ul>
              <li><a href="#">Our Story</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h5>Support</h5>
            <ul>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Insurance</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms</a></li>
            </ul>
          </div>
          <div className="footer-section newsletter">
            <h5>Subscribe to Health Tips</h5>
            <p>Get monthly tips on wellness, health updates & more.</p>
            <div className="newsletter-form">
              <input type="email" placeholder="Email address" />
              <button>Subscribe</button>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 HealthCare, Inc. All rights reserved.</p>
          <div className="social-icons">
            <a href="#" aria-label="Facebook">FB</a>
            <a href="#" aria-label="Instagram">IG</a>
            <a href="#" aria-label="Twitter">TW</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
