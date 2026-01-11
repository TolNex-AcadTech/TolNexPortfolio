import React, { useEffect, useRef } from "react";
import "./Hero.css";
import {
  FaRobot,
  FaMicrochip,
  FaCogs,
  FaSatellite,
  FaNetworkWired,
} from "react-icons/fa";

const Hero = () => {
  const heroRef = useRef();

  useEffect(() => {
    const hero = heroRef.current;

    const handleMouseMove = (e) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      hero.style.setProperty("--mouse-x", x);
      hero.style.setProperty("--mouse-y", y);
    };
    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="hero-section" ref={heroRef}>
      <div className="hero-content">
        <h1>TolNex</h1>
        <p>Learn. Connect. Innovate.</p>
        <a href="#projects" className="cta-btn">
          View My Work
        </a>
      </div>

      {/* Stars */}
      {Array.from({ length: 150 }).map((_, i) => (
        <div
          key={i}
          className="star"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}

      {/* Meteors */}
      {Array.from({ length: 10 }).map((_, i) => (
        <div
          key={i}
          className="meteor"
          style={{
            top: `${Math.random() * 50}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}

      {/* Floating tech icons */}
      {Array.from({ length: 30 }).map((_, i) => (
        <div
          key={i}
          className="icon"
          style={{
            top: `${Math.random() * 90}%`,
            left: `${Math.random() * 90}%`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        >
          {i % 5 === 0 && <FaRobot />}
          {i % 5 === 1 && <FaCogs />}
          {i % 5 === 2 && <FaMicrochip />}
          {i % 5 === 3 && <FaSatellite />}
          {i % 5 === 4 && <FaNetworkWired />}
        </div>
      ))}
    </section>
  );
};

export default Hero;
