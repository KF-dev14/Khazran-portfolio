import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} DevPortfolio. Built with React.js & Vite.</p>
    </footer>
  );
}