import React, { useEffect, useRef } from "react";
import "./Skills.css";
import {
  FaLaptopCode,
  FaRobot,
  FaChartLine,
  FaMobileAlt,
  FaPaintBrush,
} from "react-icons/fa";

const skillsData = [
  { name: "Full Stack Web Development", level: 90, icon: <FaLaptopCode /> },
  { name: "UI/UX Design", level: 85, icon: <FaPaintBrush /> },
  {
    name: "Artificial Intelligence & Machine Learning",
    level: 80,
    icon: <FaRobot />,
  },
  { name: "Cybersecurity", level: 75, icon: <FaChartLine /> },
  { name: "Data Science & Analytics", level: 85, icon: <FaChartLine /> },
  { name: "Mobile & App Development", level: 80, icon: <FaMobileAlt /> },
  { name: "Graphics Design", level: 70, icon: <FaPaintBrush /> },
  { name: "Video Editing", level: 65, icon: <FaLaptopCode /> },
];

const Skills = () => {
  const skillRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      skillRefs.current.forEach((skill, index) => {
        if (!skill) return;
        const rect = skill.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.85) {
          skill.querySelector(
            ".skill-fill"
          ).style.width = `${skillsData[index].level}%`;
          skill.querySelector(
            ".skill-glow"
          ).style.width = `${skillsData[index].level}%`;
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        <h2>My Skills</h2>
        <p>
          These are the skills I’ve mastered to guide students, innovators, and
          professionals in the tech industry.
        </p>

        {/* Floating tech icons */}
        <div className="floating-icons">
          {skillsData.map((skill, idx) => (
            <div
              key={idx}
              className="floating-icon"
              style={{ animationDelay: `${idx * 0.5}s` }}
            >
              {skill.icon}
            </div>
          ))}
        </div>

        <div className="skills-grid">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className="skill"
              ref={(el) => (skillRefs.current[index] = el)}
            >
              <div className="skill-header">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-fill" style={{ width: 0 }}></div>
                <div className="skill-glow" style={{ width: 0 }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
