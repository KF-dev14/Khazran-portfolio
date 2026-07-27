// src/pages/Services.jsx
import './Services.css';

export default function Services() {
  const serviceList = [
    { title: 'Frontend Development', icon: '⚡', desc: 'Crafting responsive, high-performance web applications using React.' },
    { title: 'UI/UX Implementation', icon: '🎨', desc: 'Turning design files into clean, accessible web components.' },
    { title: 'API Integration', icon: '🔌', desc: 'Connecting frontend clients to RESTful services cleanly and securely.' }
  ];

  return (
    <div className="page-container">
      <h1 className="page-title">Services Offered</h1>
      <div className="services-grid">
        {serviceList.map((s, idx) => (
          <div key={idx} className="service-card">
            <span className="service-icon">{s.icon}</span>
            <h2>{s.title}</h2>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}