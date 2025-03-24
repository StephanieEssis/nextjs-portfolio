import Link from 'next/link';
import styles from '../styles/navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li><Link href="/">Accueil</Link></li>
        <li><Link href="/about">À propos</Link></li>
        <li><Link href="/projects">Projets</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}
