import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { FaMoon, FaSun } from "react-icons/fa";
import Logo1 from "../../assets/Logo1.png";
import Logo2 from "../../assets/Logo2.png";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About Us" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact Us" },
];

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [active, setActive] = useState("home");

  /* Apply theme */
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  /* Active link tracking */
  useEffect(() => {
    const onScroll = () => {
      sections.forEach((sec) => {
        const el = document.getElementById(sec.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActive(sec.id);
          }
        }
      });
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <img src={Logo1} alt="TolNex Icon" />
          <img src={Logo2} alt="TolNex" />
        </div>

        {/* Links */}
        <ul className="navbar-links">
          {sections.map((sec) => (
            <li key={sec.id}>
              <a
                href={`#${sec.id}`}
                className={active === sec.id ? "active" : ""}
              >
                {sec.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="navbar-actions">
          <button className="cta-btn">Hire Me</button>

          <button
            className="mode-btn"
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle theme"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
