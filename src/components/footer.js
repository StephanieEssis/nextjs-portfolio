export default function Footer() {
    return (
      <footer className="footer">
        <p>© {new Date().getFullYear()} Mon Portfolio. Tous droits réservés.</p>
        <div className="social-links">
          <a href="https://github.com/ton-profil" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://linkedin.com/in/ton-profil" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="mailto:exemple@email.com">Email</a>
        </div>
      </footer>
    );
  }
  