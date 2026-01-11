import React from "react";
import "./AboutUs.css";
import MyImage from "../../assets/My_image.jpg";

const AboutUs = () => {
  return (
    <div className="about-section">
      <div className="about-text">
        <h2>About TolNex</h2>
        <p>
          TolNex AcadTech is a leading tech-education hub that bridges the gap
          between students and industry. We provide hands-on learning in web
          development, AI, cybersecurity, and data science.
        </p>
        <p>
          Founded by James Samuel Toluwase, TolNex mentors students and young
          professionals to innovate, connect with the right networks, and gain
          real-world skills for the tech industry.
        </p>
        <p>
          Through our mentorship programs, internship placements, hackathons,
          and tech competitions, we empower learners to become confident and
          skilled professionals ready to tackle tomorrow’s challenges.
        </p>
        <p>
          Our mission is to make quality tech education accessible to all,
          fostering a community of learners, innovators, and future leaders.
        </p>
      </div>

      <div className="about-sidebar">
        <img src={MyImage} alt="Founder" className="founder-img" />
        <h3>James Samuel Toluwase</h3>
        <p>CEO, TolNex AcadTech</p>
      </div>
    </div>
  );
};

export default AboutUs;
