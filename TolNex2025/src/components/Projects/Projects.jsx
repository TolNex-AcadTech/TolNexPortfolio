import { useRef } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaGithub,
  FaHeart,
} from "react-icons/fa";
import "./Projects.css";

// Sample projects grouped by skill
const projectsBySkill = [
  {
    skill: "Web Development",
    projects: Array.from({ length: 6 }, (_, i) => ({
      title: `Web Project ${i + 1}`,
      description:
        "A responsive and modern web project built with best practices.",
      image: "/projects/web.jpg",
      github: "#",
      details: "#",
    })),
  },
  {
    skill: "Data Science & Analysis",
    projects: Array.from({ length: 6 }, (_, i) => ({
      title: `Data Project ${i + 1}`,
      description: "Data analysis and visualization project using Python & R.",
      image: "/projects/data.jpg",
      github: "#",
      details: "#",
    })),
  },
  {
    skill: "AI & Machine Learning",
    projects: Array.from({ length: 6 }, (_, i) => ({
      title: `AI Project ${i + 1}`,
      description:
        "Machine learning or AI-powered project solving real-world problems.",
      image: "/projects/ai.jpg",
      github: "#",
      details: "#",
    })),
  },
];

const Projects = () => {
  const rowRefs = useRef([]);

  const scrollRow = (index, direction) => {
    const row = rowRefs.current[index];
    if (!row) return;

    // Each card width + gap
    const cardWidth = row.querySelector(".project-card").offsetWidth + 24;
    row.scrollBy({
      left: direction === "right" ? cardWidth : -cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <section className="projects-section">
      <h2 className="projects-title">Selected Projects</h2>

      {projectsBySkill.map((group, index) => (
        <div className="projects-skill-group" key={index}>
          {/* Skill header */}
          <div className="projects-header">
            <h3>{group.skill}</h3>
          </div>

          {/* Row of project cards */}
          <div
            className="projects-row"
            ref={(el) => (rowRefs.current[index] = el)}
          >
            {group.projects.map((project, i) => (
              <div className="project-card" key={i}>
                <img src={project.image} alt={project.title} />
                <div className="project-info">
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                  <div className="project-actions">
                    <a href={project.details} className="project-btn view-btn">
                      View Details
                    </a>
                    <a href={project.github} className="project-btn github-btn">
                      <FaGithub />
                    </a>
                    <button className="project-btn like-btn">
                      <FaHeart />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Scroll buttons overlay */}
          <button
            className="scroll-btn scroll-left"
            onClick={() => scrollRow(index, "left")}
          >
            <FaChevronLeft />
          </button>
          <button
            className="scroll-btn scroll-right"
            onClick={() => scrollRow(index, "right")}
          >
            <FaChevronRight />
          </button>

          {/* Optional floating icons for tech-acad vibe */}
          <div className="floating-icons">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="floating-icon"
                style={{
                  top: `${Math.random() * 80}%`,
                  left: `${Math.random() * 90}%`,
                  fontSize: `${Math.random() * 2 + 1}rem`,
                }}
              >
                ⚡
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;
