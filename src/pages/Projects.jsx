// src/pages/Projects.jsx
import './Projects.css';

export default function Projects() {
  const projectList = [
    {
      title: 'E-Commerce Platform',
      desc: 'Complete shopping solution with shopping cart, filter capabilities, and dark UI theme.',
      tags: ['React', 'Context API', 'Vite']
    },
    {
      title: 'Task Management Hub',
      desc: 'Productivity board featuring drag-and-drop workflow status updates.',
      tags: ['React', 'JavaScript', 'CSS Modules']
    },
    {
      title: 'Developer Analytics Dashboard',
      desc: 'Real-time metrics visualizer for monitoring app performance.',
      tags: ['React', 'Chart.js', 'REST API']
    }
  ];

  return (
    <div className="page-container">
      <h1 className="page-title">Featured Work</h1>
      <div className="projects-grid">
        {projectList.map((p, idx) => (
          <div key={idx} className="project-card">
            <h2>{p.title}</h2>
            <p>{p.desc}</p>
            <div className="tags">
              {p.tags.map((t, i) => <span key={i} className="tag">{t}</span>)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}