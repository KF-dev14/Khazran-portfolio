// src/pages/About.jsx
import './About.css';

export default function About() {
  return (
    <div className="page-container">
      <h1 className="page-title">About Me</h1>
      <div className="about-content">
        <p className="lead-text">
          I am a passionate software developer specializing in constructing scalable, modern frontend applications with React.
        </p>
        <div className="timeline">
          <div className="timeline-item">
            <h3>Full-Stack Developer</h3>
            <p className="timeline-date">2023 - Present</p>
            <p>Building responsive web applications and REST APIs for client projects.</p>
          </div>
          <div className="timeline-item">
            <h3>Frontend Developer Apprentice</h3>
            <p className="timeline-date">2022 - 2023</p>
            <p>Mastered UI component design, state management, and modern CSS frameworks.</p>
          </div>
        </div>
      </div>
    </div>
  );
}