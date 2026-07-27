import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
  const [activeTab, setActiveTab] = useState('All');

  const skills = [
    { name: 'React.js', category: 'Frontend' },
    { name: 'JavaScript (ES6+)', category: 'Frontend' },
    { name: 'HTML/CSS3', category: 'Frontend' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'Express.js', category: 'Backend' },
    { name: 'MongoDB', category: 'Backend' },
    { name: 'Git & GitHub', category: 'Tools' },
    { name: 'Vite', category: 'Tools' },
  ];

  const filteredSkills = activeTab === 'All'
    ? skills
    : skills.filter(skill => skill.category === activeTab);

  return (
    <div className="home-container">
      {/* HERO SECTION */}
      <section className="hero">
        <span className="badge">👋 Welcome to my portfolio</span>
        <h1 className="hero-title">Building Modern Web Experiences</h1>
        <p className="hero-subtitle">
          I'm a full-stack developer dedicated to crafting clean, high-performance web applications using modern tech.
        </p>
        <div className="hero-buttons">
          <Link to="/projects" className="btn btn-primary">Explore Projects</Link>
          <Link to="/contact" className="btn btn-primary">Get in Touch</Link>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section className="section">
        <h2 className="section-title">Tech Stack</h2>
        <div className="tabs">
          {['All', 'Frontend', 'Backend', 'Tools'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="skills-grid">
          {filteredSkills.map((skill, index) => (
            <div key={index} className="skill-card">
              {skill.name}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}