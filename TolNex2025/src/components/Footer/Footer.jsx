import React from "react";
import "./Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* 3 Sections */}
        <div className="footer-sections">
          {/* LEFT — Brand */}
          <div className="footer-section footer-brand">
            <h3>TolNex AcadTech</h3>
            <p>
              Building modern, scalable, and intelligent digital solutions
              through education, technology, and innovation.
            </p>
          </div>

          {/* CENTER — Navigation */}
          <div className="footer-section footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* RIGHT — Info */}
          <div className="footer-section footer-info">
            <h4>Contact</h4>
            <p>Email: tolnexacadtech@gmail.com</p>
            <p>Location: Nigeria</p>
            <p>Brand: TolNex®</p>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          © {year} TolNex AcadTech. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
